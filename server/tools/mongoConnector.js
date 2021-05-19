const MongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";

const dbName = "question-manager";
MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log("Error in connecting to Server", err);
  }
  console.log("MongoDb is connected successfully");

  const db = client.db(dbName);

  // db.collection("questions").insertOne({
  //   question: "What is the stock exchange rate",
  //   category: "Company Policy",
  //   State: "CA",
  //   question_group: "view",
  //   license: "view",
  //   status: "Active",
  //   display: "published",
  // });
});
