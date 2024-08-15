import logo from '../Assets/image/Type-B.svg';
import {
  AppLogoSpin,
  AppContainer,
  AppLogo,
  AppHeader,
  AboutSection,
} from '../App.styled';

const ViewTest = () => {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt='logo' />
        <AboutSection>Hello! I am Farcade!!</AboutSection>
      </AppHeader>
    </AppContainer>
  );
};

export default ViewTest;
