import { GET_QUESTIONS } from "../types";
// API imports
import { GetQuestions, AddQuestion } from "../../services/api_collection";

export const getQuestions = (searchQuery) => async (dispatch) => {
  GetQuestions(searchQuery).then((response) => {
    if (response) {
      dispatch({ type: GET_QUESTIONS, payload: response.data });
    }
  });
};

export const addQuestion = (question) => async (dispatch) => {
  AddQuestion(question).then((response) => {
    if (response && response.status_code === 201) {
      dispatch(getQuestions(""));
    }
  });
};

export const updateQuestion = (QuestionId, Question) => async (dispatch) => {};

export const removeQuestion = (QuestionId) => async (dispatch) => {};
