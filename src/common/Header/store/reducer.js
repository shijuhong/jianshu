import { constants } from ".";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      return state.set("list", action.data);
    default:
      return state;
  }
};

export default reducer;
