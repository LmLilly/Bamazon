var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "miregalito",
    database: "bamazon"
});

connection.connect(function(err) {
   if (err) throw err;
   //console.log("connected");
   runSearch();
});
//Start Customer
function runSearch(){
    connection.connect(function(err) {
        console.log('connected')
        var sql = 'SELECT * FROM products WHERE 0=0';
        //Passing MySQL
        connection.query(sql, function (err, res) {
            if (err) throw err;

            var items = [];
            for (var i = 0; i< res.length; i++){
                items.push(res[i].product_name)// + "|| Department: " + res[i].department_name + " Price: " + res[i].price)
            }
        //Prompting the customer
        inquirer
        .prompt([
            {
                name: "action",
                type: "list",
                message: "What Item would you like to purchase?",
                choices: items
            },
            {
                name: "quantity",
                type: "input",
                message: "How many do you wish to purchase?",
                validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
                }
            }
        ])
        .then(function(answer){
            //Check if there is inventory
            var query = "SELECT product_name, stock_quantity FROM products WHERE product_name = ? AND stock_quantity >= ?";

connection.query(query, [answer.action, parseInt(answer.quantity)], function(err, res) {
console.log(err)
        //If sufficient inventory, then update quantity and show cost of purchase
        if (res.length > 0) {
            var newQuantity = res[0].stock_quantity - parseInt(answer.quantity);

            query = "UPDATE products SET stock_quantity = ? WHERE product_name = ?" ;
            connection.query(query, [newQuantity, answer.action], function(err2, res2){
                console.log(`${res[0].product_name} was ordered.  There are ${newQuantity} items left.`)
                runSearch();
            })
        }
        else {
        //If not, no order placed
            console.log(`There is not enough ${answer.action} inventory for your order.  Please order an amount less than ${answer.quantity}.`)
            runSearch();
        }
        })
        })
        })
    });
}