import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { WriterWrapper, WriterItem } from "../style";

class Writer extends PureComponent {
  render() {
    const { writerList } = this.props;
    return (
      <WriterWrapper>
        {writerList.map((item) => (
          <WriterItem key={item.get("id")}>
            <img className="pic" src={item.get("imgUrl")} alt="" />
            <div className="follow">关注</div>
            <span>{item.get("name")}</span>
            <p>
              写了{item.get("wordCount")}k字 · {item.get("likeCount")}k喜欢
            </p>
          </WriterItem>
        ))}
      </WriterWrapper>
    );
  }
}

const mapState = (state) => ({
  writerList: state.getIn(["home", "writerList"]),
});

export default connect(mapState, null)(Writer);
