import logo from '../Assets/image/Type-B.svg';
import {
  TestContents,
  AppContainer,
  AppLogo,
  AppHeader,
  AboutSection,
} from '../Test.styled';

const ViewTest = () => {
  return (
    <TestContents>
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt='logo' />
          <AboutSection>Hello! I am Farcade!!</AboutSection>
        </AppHeader>
      </AppContainer>
    </TestContents>
  );
};

export default ViewTest;
