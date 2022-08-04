const mongoose = require("mongoose");
const mongodb = require("mongodb");
const mongoClient = require("mongodb").MongoClient;
const dataBaseUrl = "mongodb://0.0.0.0:27017/";
const databaseName = "local";

const connectDb = mongoClient.connect(dataBaseUrl, (error, client) => {
  if (error) {
    console.log(err);
  }
  const db = client.db(databaseName);
  console.log("MongoDB bağlantısı başarıyla gerçekleştirildi.");
  client.close();
});

module.exports.connectDb = connectDb;
