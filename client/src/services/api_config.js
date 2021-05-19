import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.REACT_APP_API_URL_BE,
  headers: {
    // Accept: "application/json",
    'Content-Type': 'application/json',
  },
});

export default api;
