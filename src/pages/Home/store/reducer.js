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
  articleList: [
    {
      id: 1,
      title: "读书让人安静",
      desc: "今天阳光灿烂，蓝天高远。 拿出了前年参加这本书的译者王杨的新书发布会获得的这本书，再次打开来看。 这本书主要写了：当赖德军官看到那座庄园时，所有...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/1699915-f4b8fe0aa734aa30.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
    {
      id: 2,
      title: "读书让人安静",
      desc: "今天阳光灿烂，蓝天高远。 拿出了前年参加这本书的译者王杨的新书发布会获得的这本书，再次打开来看。 这本书主要写了：当赖德军官看到那座庄园时，所有...",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/1699915-f4b8fe0aa734aa30.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
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
