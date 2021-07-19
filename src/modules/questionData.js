const axios = require("axios");

export const getData = axios.get(
  "https://www.career.go.kr/inspct/openapi/test/questions?apikey=72612ba54c1decfb085cfe680f85ce3a&q=6&trgetSe=100208"
);
