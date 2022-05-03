import { constants } from ".";
import axios from "axios";

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true,
});

export const logout = () => ({
  type: constants.CHANGE_LOGIN,
  value: false,
});

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get(`/api/login.json?account=${account}&password=${password}`)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert("登录失败");
        }
      });
  };
};
