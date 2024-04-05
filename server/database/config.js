require("dotenv").config();
const port = process.env.PORT;
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
});

const connectMysql = async (cb) => {
  connection.connect((err) => {
    err ? console.log(err.message) : cb();
  });
};

module.exports = { port, connectMysql, connection };
