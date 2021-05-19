const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

mongoose.connect("mongodb://127.0.0.1:27017/question-manager", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose);

const questionSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  group: {
    required: true,
    type: String,
  },
  license: {
    required: true,
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  display: {
    type: String,
    required: true,
  },
});

questionSchema.plugin(autoIncrement.plugin, {
  model: "question",
  field: "id",
  startAt: 1,
  incrementBy: 1,
  unique: true,
});

questionSchema.index({
  question: "text",
  group: "text",
  category: "text",
  state: "text",
  license: "text",
  status: "text",
  display: "text",
});
const Question = mongoose.model("question", questionSchema);
module.exports = Question;
