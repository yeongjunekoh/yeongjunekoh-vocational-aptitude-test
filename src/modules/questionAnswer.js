const axios = require("axios");

export const getData = axios.get(
  "https://www.career.go.kr/inspct/openapi/test/questions?apikey=72612ba54c1decfb085cfe680f85ce3a&q=6&trgetSe=100208"
);

const SET_QUESTION_ANSWER = "counter/SET_QUESTION_ANSWER";
const UPDATE_QUESTION_ANSWER = "counter/UPDATE_QUESTION_ANSWER";
const DELETE_DATA = "counter/DELETE_DATA";

export const setQuestionAnswer = (data) => ({
  type: SET_QUESTION_ANSWER,
  data: data,
});

export const updateQuestionAnswer = (data) => ({
  type: UPDATE_QUESTION_ANSWER,
  data: data,
});

export const deleteData = () => ({
  type: DELETE_DATA,
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
    case UPDATE_QUESTION_ANSWER:
      return [
        ...state.slice(0, action.data[0].questionNumber),
        ...action.data,
        ...state.slice(action.data[action.data.length - 1].questionNumber + 1),
      ];
    case DELETE_DATA:
      return [...initialState];

    default:
      return state;
  }
}
