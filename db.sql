CREATE DATABASE genshinbuilds;
USE genshinbuilds;
CREATE USER 'admin'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON genshinbuilds.* TO 'admin';
CREATE TABLE JSONDoc (
    element VARCHAR(20),
    data JSON DEFAULT NULL,
    updated date,
    PRIMARY KEY (element)
);