import { createGlobalStyle } from 'styled-components';

import Library from '../fonts/LIBRARY3AM.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Library 3 AM';
    src: local('Library 3AM'),
    url(${Library}) format('woff2');
  }
`;