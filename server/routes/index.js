const express = require("express");
const questionController = require("../controllers/questionController");

const router = express.Router();

router.post("/api/v1/questions/add", (req, res) => {
  questionController
    .addQuestion(req.body)
    .then((result) => {
      res.status(201).send({
        status_code: res.statusCode,
        msg: result,
        success: true,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Failed to add question ",
        error: err,
      });
    });
});

router.get("/api/v1/questions", (req, res) => {
  questionController
    .getQuestions(req.query)
    .then((result) => {
      result.length > 0
        ? res.status(200).send({
            status_code: res.statusCode,
            message: "Successful retreival of questions",
            success: true,
            data: result,
          })
        : res.status(200).send({
            status_code: res.statusCode,
            message: "No related questions",
            success: true,
            data: result,
          });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Failed to retrive question ",
        success: false,
        error: err,
      });
    });
});

module.exports = router;
