import { combineReducers } from "redux";
import todoReducers from "./Recucers";

const rootReducer = combineReducers({
  todoReducers,
});

export default rootReducer;