const axios = require("axios");
require("dotenv").config();

const YOUR_ACCESS_KEY = process.env.YOUR_ACCESS_KEY;

axios.defaults.headers.common.Authorization = `Client-ID ${YOUR_ACCESS_KEY}`;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

module.exports = axios;
