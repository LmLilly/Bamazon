# Bamazon

In this project I created an Amazon-like storefront with MySQL called **Bamazon**. The app takes in orders form customers and deminishes the quantity in stock from the store's inventory as the customer orders product.

# Getting Started
The customer will be presented with a list of inventory items.
At the same time the customer will be prompted what they would like to purchase.
Once the customer makes a choice, they will be asked how many they would like to purchase.
The customer will be informed what they ordered and the quantity they ordered.
The customer will also be informed if there is or if there is not enough inventory for the purchase.

# Test
![Bamazon on Terminal](/images/bamazonTerminal.png)

![Bamazon on Terminal](/images/bamazonMysql.png)

# Prerequisites
MySQL

node modules

pakage.json

npm mysql

npm inquirer

readme.md

# Creating database with MySQL
```javascript
USE bamazon;

CREATE TABLE products (
  item_id INT (10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10, 4) NULL,
  stock_quantity INT (100) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Leonel Messi Jersey", "SportsApperal", "114.00", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Cristiano Ronaldo Jersey", "SportsApperal", "150.00", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Pelé Jersey", "SportsApperal", "200.00", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Mancala", "Games", "12.00", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Checkers", "Games", "12.00", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Chess", "Games", "12.00", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("XBox One", "Video Games", "150.00", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Playstation", "Video Games", "250.00", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity )
VALUES ("Wii U", "Video Games", "100.00", "5");


SELECT * FROM products
```javascript



