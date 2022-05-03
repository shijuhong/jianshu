import { combineReducers } from "redux-immutable";
import { reducer as HeaderReducer } from "../common/Header/store";
import { reducer as HomeReducer } from "../pages/Home/store";
import { reducer as DetailReducer } from "../pages/Detail/store";
import { reducer as LoginReducer } from "../pages/Login/store";

export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer,
  login: LoginReducer,
});
