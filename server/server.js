const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes/index");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT,DELETE, POST, GET, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server is running on port", port);
});
