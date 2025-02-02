import { ContainerStyled, ImageStyled } from '../styled/common/Common.styled';
import {
  ContentsStyled,
  GuideLineStyled,
  Intro,
  Contact,
  CopyRight,
  Element,
} from '../styled/ViewFooter.styled';
import logoB from '../../Assets/image/main/logo-B.svg';
import email from '../../Assets/image/main/e-mail-logo.svg';
import insta from '../../Assets/image/main/insta-logo.svg';
import { handleMoveToURL } from '../../Controller/main.control';
import { URL } from '../../Model/url.data';

const ViewFooter = () => {
  return (
    <ContainerStyled bgColorProps='var(--gray-color-10)'>
      <GuideLineStyled justifyProps='space-between' heightProps='214px'>
        <div>
          <ImageStyled
            src={logoB}
            cursorProps='pointer'
            onClick={() => {
              handleMoveToURL(URL.home);
            }}
          />
        </div>
        <ContentsStyled>
          <CopyRight>Copyright ⓒ FARCADE</CopyRight>
          <Intro>
            <div>Team Leader : Woo Ju Son</div>
            <div>Team Member : Ju Hee Hyung, Tumaris</div>
          </Intro>
          <Contact>
            <Element marginRProps='8px'>Contact :</Element>
            <div>
              <ImageStyled
                src={email}
                marginProps='0 16px 0 0'
                cursorProps='pointer'
                onClick={() => {
                  handleMoveToURL(URL.contact);
                }}
              />
            </div>
            <div>
              <ImageStyled
                src={insta}
                cursorProps='pointer'
                onClick={() => {
                  handleMoveToURL(URL.insta);
                }}
              />
            </div>
          </Contact>
        </ContentsStyled>
      </GuideLineStyled>
    </ContainerStyled>
  );
};

export default ViewFooter;
