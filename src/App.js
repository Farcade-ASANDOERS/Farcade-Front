import logo from './Assets/image/Fracade.svg';
import {
  AppLogoSpin,
  AppContainer,
  AppLogo,
  AppHeader,
  AboutSection,
} from './App.styled';

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt='logo' />
        <AboutSection>Hello!, I am Farcade!!</AboutSection>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
