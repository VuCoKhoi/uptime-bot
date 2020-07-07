const axios = require("axios");
require("dotenv").config();

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

module.exports = axios;
