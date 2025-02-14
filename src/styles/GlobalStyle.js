import { createGlobalStyle } from 'styled-components';
import Light_woff2 from './fonts/NotoSansKR-Light.woff2';
import Light_woff from './fonts/NotoSansKR-Light.woff';
import Light_otf from './fonts/NotoSansKR-Light.otf';
import Regular_woff2 from './fonts/NotoSansKR-Regular.woff2';
import Regular_woff from './fonts/NotoSansKR-Regular.woff';
import Regular_otf from './fonts/NotoSansKR-Regular.otf';
import Medium_woff2 from './fonts/NotoSansKR-Medium.woff2';
import Medium_woff from './fonts/NotoSansKR-Medium.woff';
import Medium_otf from './fonts/NotoSansKR-Medium.otf';
import Bold_woff2 from './fonts/NotoSansKR-Bold.woff2';
import Bold_woff from './fonts/NotoSansKR-Bold.woff';
import Bold_otf from './fonts/NotoSansKR-Bold.otf';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(${Light_woff2}) format('woff2'),
         url(${Light_woff}) format('woff'),
         url(${Light_otf}) format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${Regular_woff2}) format('woff2'),
         url(${Regular_woff}) format('woff'),
         url(${Regular_otf}) format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${Medium_woff2}) format('woff2'),
         url(${Medium_woff}) format('woff'),
         url(${Medium_otf}) format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url(${Bold_woff2}) format('woff2'),
         url(${Bold_woff}) format('woff'),
         url(${Bold_otf}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans CJK KR', sans-serif;
    font-display: swap;
  }
`;

export default GlobalStyle;