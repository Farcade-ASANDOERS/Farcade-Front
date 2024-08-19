import {
  ContainerStyled,
  GuideLineStyled,
  GroupStyled,
  ImageStyled,
} from '../styled/common/Common.styled';
import { Intro, Contact, CopyRight } from '../styled/ViewFooter.styled.test';
import logoB from '../../Assets/image/main/logo-B.svg';
import email from '../../Assets/image/main/e-mail-logo.svg';
import insta from '../../Assets/image/main/insta-logo.svg';
import { handleMoveToURL } from '../../Controller/main.control';
import { URL } from '../../Model/url.data';

const ViewFooter = () => {
  return (
    <ContainerStyled
      bgColorProps='var(--gray-color-10)'
      heightProps='214px'
      colorProps='var(--gray-color-80)'
      fontSizeProps='var(--font-body-md)'
      LHProps='var(--font-body-LH-md)'
    >
      <GuideLineStyled
        displayProps='flex'
        justifyProps='space-between'
        widthProps='var(--inner-contents-width)'
      >
        <div>
          <ImageStyled
            src={logoB}
            widthProps='160px'
            heightProps='37px'
            cursorProps='pointer'
            onClick={() => {
              handleMoveToURL(URL.home);
            }}
          />
        </div>
        <GroupStyled
          displayProps='flex'
          justifyProps='space-between'
          widthProps='68.85%' // 895px
          marginProps='0'
        >
          <CopyRight>Copyright ⓒ FARCADE</CopyRight>
          <Intro>
            <div>Team Leader : Woo Ju Son</div>
            <div>Team Member : Ju Hee Hyung, Tumaris</div>
          </Intro>
          <GroupStyled
            displayProps='flex'
            justifyProps='flex-end'
            marginProps='0'
            widthProps='192px'
          >
            <Contact>Contact :</Contact>
            <div>
              <ImageStyled
                src={email}
                marginProps='0 16px 0 0'
                //1.79%
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
          </GroupStyled>
        </GroupStyled>
      </GuideLineStyled>
    </ContainerStyled>
  );
};

export default ViewFooter;
