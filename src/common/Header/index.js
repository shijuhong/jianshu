import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/Login/store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";

class Header extends Component {
  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const pageList = [];

    if (list.size !== 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={list.get(i)}>{list.get(i)}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      focused,
      list,
      login,
      handleLogout,
      handleInputBlur,
      handleInputFocus,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem onClick={handleLogout} className="right">
              退出
            </NavItem>
          ) : (
            <Link to={"/login"}>
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>

          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={focused ? "focused iconfont zoom" : "iconfont zoom"}
            >
              &#xe6e4;
            </span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writing">
              <span className="iconfont">&#xe600;</span>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spinIcon) {
      // 每次获取上一次的旋转角度
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, "");
      // 初始的时候，origin 没有值
      if (originAngle) {
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
      // 如果此时在最后一页了，页数返回到第一页
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    handleLogout() {
      dispatch(loginActionCreators.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
