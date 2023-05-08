import { css } from 'styled-components';
import Library from '../fonts/library3am.woff2';

const Fonts = css`
  @font-face {
    font-family: 'Library 3 AM';
    src: local('Library 3AM'),
    url(${Library}) format('woff2');
  }
`;

export default Fonts;