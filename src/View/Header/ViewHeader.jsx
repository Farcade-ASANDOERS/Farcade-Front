import {
  GuideLineStyled,
  ImageStyled,
  ButtonStyled,
  ContainerStyled,
} from '../styled/common/Common.styled';
import { BoxStyled, ContentStyled } from '../styled/ViewHeader.styled';
import logoA from '../../Assets/image/main/logo-A.svg';
import { HashLink } from 'react-router-hash-link';
import { URL } from '../../Model/url.data';
import { handleMoveToURL } from '../../Controller/main.control';
import { scrollSet } from '../../Controller/hashLink.contral';

const ViewHeader = () => {
  return (
    <ContainerStyled
      heightProps='77px'
      colorProps='var(--gray-color-60)'
      borderBottomProps='1px solid var(--primary-color-200)'
    >
      <GuideLineStyled
        displayProps='flex'
        justifyProps='space-between'
        widthProps='var(--inner-contents-width)'
        // bgColorProps='#597659'
      >
        <div>
          <ImageStyled
            src={logoA}
            cursorProps='pointer'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <BoxStyled>
          <ContentStyled>
            <HashLink smooth to='#ourService' scroll={scrollSet}>
              Our Service
            </HashLink>
          </ContentStyled>
          <ContentStyled onClick={() => {}}>
            <HashLink smooth to='#team' scroll={scrollSet}>
              Team
            </HashLink>
          </ContentStyled>
          <ContentStyled onClick={() => {}}>
            <HashLink smooth to='#contact' scroll={scrollSet}>
              Contact
            </HashLink>
          </ContentStyled>
          <ButtonStyled
            bgColorProps='var(--primary-color-500)'
            colorProps='var(--white-color)'
            widthProps='197px'
            radiusProps='12px'
            onClick={() => {
              handleMoveToURL(URL.launchAlerts);
            }}
          >
            GET LAUNCH ALERTS
          </ButtonStyled>
        </BoxStyled>
      </GuideLineStyled>
    </ContainerStyled>
  );
};

export default ViewHeader;
