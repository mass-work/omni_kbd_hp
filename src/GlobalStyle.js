import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle `
  body {
    background-color: #f8f8f8;
    color: #333;
    font-family: 'Inter', sans-serif;
  }

  a {
    color: #333;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #000;
  }

  button {
    font-weight: bold;
  }
`;
export default GlobalStyle;
