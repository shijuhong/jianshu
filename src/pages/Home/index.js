import React, { PureComponent } from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import _ from "lodash";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {showScroll && (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        )}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    const { changeHomeData } = this.props;
    changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    // 组件销毁之前，事件要解绑
    const { changeScrollTopShow } = this.props;
    window.removeEventListener("scroll", _.throttle(changeScrollTopShow, 500));
  }

  bindEvents() {
    const { changeScrollTopShow } = this.props;
    window.addEventListener("scroll", _.throttle(changeScrollTopShow, 500));
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);
