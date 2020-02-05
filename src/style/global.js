import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #ffd7c2;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
   
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
