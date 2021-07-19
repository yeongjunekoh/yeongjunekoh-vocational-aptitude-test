import { combineReducers } from "redux";
import clientInfo from "./clientInfo";
import questionAnswer from "./questionAnswer";

const rootReducer = combineReducers({
  clientInfo,
  questionAnswer,
});

export default rootReducer;
