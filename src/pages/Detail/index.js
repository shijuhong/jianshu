import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Content, DetailWrapper, Header } from "./style";

class Detail extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    const { getDetail } = this.props;
    getDetail();
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  },
});

export default connect(mapState, mapDispatch)(Detail);
