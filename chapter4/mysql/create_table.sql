CREATE DATABASE COMPANY;
USE COMPANY;
/*AUTO_INCREMENT : 숫자 자동을 증가*/
CREATE TABLE products(
  id          INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(50) NOT NULL,
  modelnumber VARCHAR(15) NOT NULL,
  series      VARCHAR(30) NOT NULL
);
