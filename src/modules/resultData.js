const SET_RESULT_DATA = "counter/SET_RESULT_DATA";

export const setResultData = (data) => ({
  type: SET_RESULT_DATA,
  data: data,
});

const initialState = {
  inspctSeq: "",
  resultURL: "",
};

export default function resultData(state = initialState, action) {
  switch (action.type) {
    case SET_RESULT_DATA:
      console.log("현재 상태", state, "들어오는 데이터", action.data);
      return {
        ...state,
        inspctSeq: action.data.RESULT.inspctSeq,
        resultURL: action.data.RESULT.url,
      };

    default:
      return state;
  }
}
