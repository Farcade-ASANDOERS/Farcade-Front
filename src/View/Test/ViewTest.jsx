import { Link } from 'react-router-dom';
import logo from '../../Assets/image/Type-B.svg';
import {
  TestContents,
  AppContainer,
  AppLogo,
  AppHeader,
  AboutSection,
} from '../../Test.styled';

const ViewTest = () => {
  return (
    <TestContents>
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt='logo' />
          <AboutSection>
            Hello! I am <Link to={'/'}>Farcade</Link>!!
          </AboutSection>
        </AppHeader>
      </AppContainer>
    </TestContents>
  );
};

export default ViewTest;
