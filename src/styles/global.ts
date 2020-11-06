import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/open-sans-v18-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Light'), local('OpenSans-Light'),
        url('/fonts/open-sans-v18-latin-300.woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/open-sans-v18-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('/fonts/open-sans-v18-latin-regular.woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/open-sans-v18-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url('/fonts/open-sans-v18-latin-700.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/ubuntu-v15-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url('../fonts/ubuntu-v15-latin-regular.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/ubuntu-v15-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
      url('../fonts/ubuntu-v15-latin-700.woff2');
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
