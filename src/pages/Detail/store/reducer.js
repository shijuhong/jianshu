import { constants } from ".";
import { fromJS } from "immutable";

const defaultState = fromJS({
  title: "",
  content: "",
});

const changeDetail = (state, action) =>
  state.merge({
    title: fromJS(action.title),
    content: fromJS(action.content),
  });

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return changeDetail(state, action);
    default:
      return state;
  }
};

export default reducer;
