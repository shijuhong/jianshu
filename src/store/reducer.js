import { combineReducers } from "redux-immutable";
import { reducer as HeaderReducer } from "../common/Header/store";

export default combineReducers({
  header: HeaderReducer,
});
