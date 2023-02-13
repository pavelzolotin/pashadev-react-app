import { createGlobalStyle } from 'styled-components';

import Library from '../fonts/library-3-am.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Library 3 AM';
    src: local('Library 3AM'),
    url(${Library}) format('otf');
  }
`;