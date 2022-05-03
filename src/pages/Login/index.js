import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { actionCreators } from "./store";
import { Button, Input, LoginBox, LoginWrapper } from "./style";

class Login extends PureComponent {
  render() {
    const { login, handleLogin } = this.props;
    return !login ? (
      <LoginWrapper>
        <LoginBox>
          <Input
            placeholder="账号"
            ref={(input) => {
              this.account = input;
            }}
          />
          <Input
            placeholder="密码"
            ref={(input) => {
              this.password = input;
            }}
          />
          <Button onClick={() => handleLogin(this.account, this.password)}>
            登录
          </Button>
        </LoginBox>
      </LoginWrapper>
    ) : (
      <Navigate to="/" />
    );
  }
}

const mapState = (state) => ({
  login: state.getIn(["login", "login"]),
});

const mapDispatch = (dispatch) => ({
  handleLogin(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  },
});

export default connect(mapState, mapDispatch)(Login);
