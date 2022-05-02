import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  padding: 20px 0;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid #c8c8c8;
  margin: 10px auto;
  color: #777;
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
`;
