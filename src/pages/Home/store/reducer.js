import { constants } from ".";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://upload.jianshu.io/publication/image/b3d2135b-3c0f-45c7-8428-6bc0d7539ca3?imageMogr2/auto-orient/strip|imageView2/2/w/125/format/webp",
    },
    {
      id: 2,
      title: "社会热点",
      imgUrl:
        "https://upload.jianshu.io/publication/image/b3d2135b-3c0f-45c7-8428-6bc0d7539ca3?imageMogr2/auto-orient/strip|imageView2/2/w/125/format/webp",
    },
  ],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
