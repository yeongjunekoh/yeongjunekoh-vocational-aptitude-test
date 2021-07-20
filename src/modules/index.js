import { combineReducers } from "redux";
import clientInfo from "./clientInfo";
import questionAnswer from "./questionAnswer";
import resultData from "./resultData";

const rootReducer = combineReducers({
  clientInfo,
  questionAnswer,
  resultData,
});

export default rootReducer;
