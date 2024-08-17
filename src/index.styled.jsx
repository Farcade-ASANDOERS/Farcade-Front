import { createGlobalStyle } from 'styled-components';
//@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');
const GlobalStyle = createGlobalStyle`
  :root {
    /* Primary Color */
    --primary-color-200 : #FBBFB7;
    --primary-color-300 : #F89F92;
    --primary-color-400 : #F67F6E;
    --primary-color-500 : #F45F4A;

    /* Gray Color */
    --gray-color-10 : #F1F1F1;
    --gray-color-20 : #CFCFCF;
    --gray-color-30 : #B8B8B8;
    --gray-color-40 : #A0A0A0;
    --gray-color-50 : #878787;
    --gray-color-60 : #707070;  
    --gray-color-70 : #595959;
    --gray-color-80 : #414141;
    --gray-color-90 : #292929;
    --gray-color-100 : #111111;

    /* White Color */
    --white-color : #FFFFFF;

    /* Error Color */
    --error-color : #DE2323;

    /* Positive Color */
    --positive-color : #34C759;

    /* Font */
    /* Font Family */
    --font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

    /* Font Size */
    --font-headline-lg: 72px;
    --font-headline-md: 58px;
    --font-title-lg: 44px;
    --font-title-md: 32px;
    --font-title-sm: 24px;
    --font-title-xs: 20px;
    --font-body-lg: 20px;
    --font-body-md: 16px;
    --font-body-sm: 12px;
    --font-button-lg: 28px;
    --font-button-md: 20px;
    --font-button-sm: 16px;

    /* Font Weight */
    --font-weight-extra-bold: 800;
    --font-weight-bold: 700;
    --font-weight-semi-bold: 600;
    --font-weight-medium: 500;
    --font-weight-regular: 400;

    /* Font Height 130% */
    --font-line-height: 1.3;

    --font-headline-LH-lg: calc(var(--font-headline-lg) * var(--font-line-height));
    --font-headline-LH-md: calc(var(--font-headline-md) * var(--font-line-height));
    --font-title-LH-lg: calc(var(--font-title-lg) * var(--font-line-height));
    --font-title-LH-md: calc(var(--font-title-md) * var(--font-line-height));
    --font-title-LH-sm: calc(var(--font-title-sm) * var(--font-line-height));
    --font-title-LH-xs: calc(var(--font-title-xs) * var(--font-line-height));
    --font-body-LH-lg: calc(var(--font-body-lg) * var(--font-line-height));
    --font-body-LH-md: calc(var(--font-body-md) * var(--font-line-height));
    --font-body-LH-sm: calc(var(--font-body-sm) * var(--font-line-height));
    --font-button-LH-lg: calc(var(--font-button-lg) * var(--font-line-height));
    --font-button-LH-md: calc(var(--font-button-md) * var(--font-line-height));
    --font-button-LH-sm: calc(var(--font-button-sm) * var(--font-line-height));

    /* Font Letter Spacing */
    --font-letter-spacing: 1%;

    /* standard width */
    --inner-contents-width: 67.71%;
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
    background-color: var(--white-color);
    font-family: var(--font-family);
    font-size: var(--font-button-sm);
    line-height: var(--font-button-LH-sm);
    letter-spacing: var(--font-letter-spacing);
    font-weight: var(--font-weight-regular);
    color: var(--gray-color-100);
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    min-height: auto;
    max-width: 100%;
    margin: 0 auto;

    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
