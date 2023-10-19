const mongoose = require("mongoose");
require('dotenv').config();

const makeNewConnection = (uri) => {
 const db = mongoose.createConnection(uri, {
  useNewUrlParser: true
 });

 db.on("error", function (error) {
  console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
  db.close().catch(() =>
   console.log(`MongoDB :: failed to close connection ${this.name}`)
  );
 });

 db.on("connected", function () {
  console.log(`MongoDB :: connected`)
 });

 db.on("disconnected", function () {
  console.log(`MongoDB :: disconnected ${this.name}`);
 });
 return db;
};

const conn_str = `${process.env.CONN_STRING}`;

const dbConnection = 
  makeNewConnection(conn_str);

module.exports = dbConnection;
