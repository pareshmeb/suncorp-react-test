import axios from 'axios';
const { URL } = require("../constant/actionTypes");

const https = axios.create({
  timeout: 60000,
  baseURL: URL
});

export default https;