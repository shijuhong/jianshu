import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import { ListItem, ListInfo, LoadMore } from "../style";

class List extends PureComponent {
  render() {
    const { articleList, articlePage, getMoreList } = this.props;
    return (
      <Fragment>
        {articleList.map((item) => (
          <Link key={item.get("id")} to={`/detail/${item.get("id")}`}>
            <ListItem>
              <img className="pic" src={item.get("imgUrl")} alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => getMoreList(articlePage)}>阅读更多</LoadMore>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  articleList: state.getIn(["home", "articleList"]),
  articlePage: state.getIn(["home", "articlePage"]),
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  },
});

export default connect(mapState, mapDispatch)(List);
