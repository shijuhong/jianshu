import { createGlobalStyle } from "styled-components";

const IconfontStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* Project id 3278405 */
    src: url('//at.alicdn.com/t/font_3278405_qsvkxcy1jmk.woff2?t=1651312180057') format('woff2'),
        url('//at.alicdn.com/t/font_3278405_qsvkxcy1jmk.woff?t=1651312180057') format('woff'),
        url('//at.alicdn.com/t/font_3278405_qsvkxcy1jmk.ttf?t=1651312180057') format('truetype');
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
