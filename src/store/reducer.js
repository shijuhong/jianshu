import { combineReducers } from "redux";
import { reducer as HeaderReducer } from "../common/Header/store";

export default combineReducers({
  header: HeaderReducer,
});
