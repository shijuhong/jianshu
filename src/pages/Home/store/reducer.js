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
        "https://img1.baidu.com/it/u=3331778458,1704878545&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    },
    {
      id: 2,
      title: "读书让人安静",
      desc: "今天阳光灿烂，蓝天高远。 拿出了前年参加这本书的译者王杨的新书发布会获得的这本书，再次打开来看。 这本书主要写了：当赖德军官看到那座庄园时，所有...",
      imgUrl:
        "https://img2.baidu.com/it/u=3299975374,897725621&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl:
        "https://sjh-picture.oss-cn-beijing.aliyuncs.com/img/20220501174944.png",
    },
    {
      id: 2,
      imgUrl:
        "https://sjh-picture.oss-cn-beijing.aliyuncs.com/img/20220501175130.png",
    },
  ],
  writerList: [
    {
      id: 1,
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "Hobbit霍比特人",
      wordCount: 463.3,
      likeCount: 2.3,
    },
    {
      id: 2,
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/5303650/33f2887c-e6e2-43b3-bd2c-b8516e5ee646.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "Rose的肉丝儿",
      wordCount: 147.1,
      likeCount: 13.2,
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
