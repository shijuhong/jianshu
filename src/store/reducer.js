import { combineReducers } from "redux-immutable";
import { reducer as HeaderReducer } from "../common/Header/store";
import { reducer as HomeReducer } from "../pages/Home/store";

export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
});
