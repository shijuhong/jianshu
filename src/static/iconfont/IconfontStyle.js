import { createGlobalStyle } from "styled-components";

const IconfontStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 3278405 */
    src: url('');
    src: url('?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_3278405_02z04q7k68b.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_3278405_02z04q7k68b.woff') format('woff'),
    url('//at.alicdn.com/t/font_3278405_02z04q7k68b.ttf') format('truetype'),
    url('#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default IconfontStyle;
