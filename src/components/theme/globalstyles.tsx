import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.darkColor};
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.font.family.default};
    background-image: url('/images/bubbles.svg');
    background-repeat: no-repeat;
    background-position: bottom right;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  /* Full height layout */ 
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
