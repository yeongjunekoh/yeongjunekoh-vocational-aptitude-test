const axios = require("axios");

export const getData = axios.get(
  "https://www.career.go.kr/inspct/openapi/test/questions?apikey=72612ba54c1decfb085cfe680f85ce3a&q=6&trgetSe=100208"
);

const SET_QUESTION_ANSWER = "counter/SET_QUESTION_ANSWER";

export const setQuestionAnswer = (data) => ({
  type: SET_QUESTION_ANSWER,
  data: data,
});

const initialState = [
  {
    question: "",
    questionNumber: 0,
    answerList: [{ answerText: "", isSelected: false }],
  },
];

export default function questionAnswer(state = initialState, action) {
  switch (action.type) {
    case SET_QUESTION_ANSWER:
      return [...state, ...action.data];

    default:
      return state;
  }
}
