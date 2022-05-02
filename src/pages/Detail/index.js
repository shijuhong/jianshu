import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators } from "./store";
import { Content, DetailWrapper, Header } from "./style";

function Detail(props) {
  const { title, content, getDetail } = props;
  const { id } = useParams();

  useEffect(() => {
    getDetail(id);
  });

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </DetailWrapper>
  );
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
});

export default connect(mapState, mapDispatch)(Detail);
