import { createGlobalStyle } from 'styled-components';

import SavoyeLETPlainWoff from './OnlineWebFonts_COM_712aaafc1496288ce96a00a14f232ddb/Savoye LET Plain:1.0/Savoye LET Plain:1.0.woff';
import SavoyeLETPlainWoff2 from './OnlineWebFonts_COM_712aaafc1496288ce96a00a14f232ddb/Savoye LET Plain:1.0/Savoye LET Plain:1.0.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${SavoyeLETPlaintWoff2}) format('woff2'),
        url(${SavoyeLETPlainWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
