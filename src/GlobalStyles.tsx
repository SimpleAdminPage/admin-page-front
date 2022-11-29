import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol, ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    margin: 0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 4px;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    outline: none;
  }
`;

export default GlobalStyle;
