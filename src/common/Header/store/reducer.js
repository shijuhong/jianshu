import { constants } from ".";

const defaultState = {
  focused: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return {
        ...state,
        focused: true,
      };
    case constants.SEARCH_BLUR:
      return {
        ...state,
        focused: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
