import api from './api_config';

const GetQuestions = async function (query) {
  try {
    const { data: response } = await api.get(`/questions${query}`);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const AddQuestion = async function (question) {
  try {
    const { data: response } = await api.post(`/questions/add`, question);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export { GetQuestions, AddQuestion };
