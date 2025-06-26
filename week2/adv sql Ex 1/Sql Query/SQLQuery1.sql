CREATE DATABASE ProductDB;
GO

USE ProductDB;
GO

CREATE TABLE Products (
    ProductID INT,
    ProductName VARCHAR(50),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

INSERT INTO Products (ProductID, ProductName, Category, Price)
VALUES 
(1, 'A', 'Laptop', 1000),
(2, 'B', 'Laptop', 950),
(3, 'C', 'Laptop', 950),
(4, 'D', 'Phone', 600),
(5, 'E', 'Phone', 600),
(6, 'F', 'Phone', 400);
