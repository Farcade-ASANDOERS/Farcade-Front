import { createGlobalStyle } from 'styled-components';
//@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color-200 : #FBBFB7;
    --primary-color-300 : #F89F92;
    --primary-color-400 : #F67F6E;
    --primary-color-500 : #F45F4A;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  input {
    outline: none;
    border: none;
    background: none;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
  }

  textarea {
    resize: none;
    outline: none;
    border: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background-color: var(--primary-color-300);
    font-family: 'Pretendard Variable';
    color: var(--white-color);
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    min-height: auto;
    max-width: 100%;
    margin: 0 auto;

    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
