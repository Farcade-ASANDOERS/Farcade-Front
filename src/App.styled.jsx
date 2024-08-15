import styled, { keyframes } from 'styled-components';
const colorTransition = keyframes`
  0% {
    background-color: var(--primary-color-200);
    color: var(--primary-color-500);
  }
  25% {
    background-color: var(--primary-color-300);
    color: var(--primary-color-400);
  }
  50% {
    background-color: var(--primary-color-400);
    color: var(--primary-color-300);
  }
  75% {
    background-color: var(--primary-color-500);
    color: var(--primary-color-200);
  }
  100% {
    background-color: var(--primary-color-200);
    color: var(--primary-color-500);
  }
`;

// App-logo-spin keyframes
export const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// App container
export const AppContainer = styled.div`
  text-align: center;
  animation: ${colorTransition} 10s infinite alternate;
`;

// App logo
export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`;

// App header
export const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

// About section
export const AboutSection = styled.div`
  margin-top: 30px;
`;
