import { GET_QUESTIONS } from "../types";

const initialState = {
  questions: [],
};

const getQuestions = (state, payload) => {
  return {
    ...state,
    questions: payload,
  };
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_QUESTIONS:
      return getQuestions(state, payload);
    default:
      return state;
  }
};
