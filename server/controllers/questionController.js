const Question = require("../models/question");

function addQuestion(body) {
  return new Promise((resolve, reject) => {
    const question = new Question(body);
    question
      .save()
      .then((result) => {
        console.log("Question added to database successfully");
        resolve("Question added to database successfully");
      })
      .catch((err) => {
        console.log("Failed to add question to database");
        reject(err);
      });
  });
}

function getQuestions(queryParam) {
  return new Promise((resolve, reject) => {
    let keyword = "";
    if (Object.keys(queryParam).length > 0) {
      for (let key of Object.keys(queryParam)) {
        keyword += " " + queryParam[key];
      }
      console.log("keywords ", keyword);
      Question.find({ $text: { $search: keyword } })
        .sort({ id: -1 })
        .then((result) => {
          console.log("Searched questions are ", result);
          resolve(result);
        })
        .catch((err) => {
          console.log("Failed to retreive searched questions");
          reject(err);
        });
    } else {
      Question.find()
        .sort({ id: -1 })
        .then((result) => {
          console.log("Retreived questions are ", result);
          resolve(result);
        })
        .catch((err) => {
          console.log("Failed to retreive questions");
          reject(err);
        });
    }
  });
}

module.exports = {
  addQuestion,
  getQuestions,
};
