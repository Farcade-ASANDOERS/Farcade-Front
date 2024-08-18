import {
  ContainerStyled,
  GuideLineStyled,
  GroupStyled,
  ImageStyled,
} from '../styled/common/Common.styled';
import { Intro, Contact, CopyRight } from '../styled/ViewFooter.styled';
import logoB from '../../Assets/image/main/logo-B.svg';
import email from '../../Assets/image/main/e-mail-logo.svg';
import insta from '../../Assets/image/main/insta-logo.svg';

export const ViewFooter = () => {
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
        <ImageStyled src={logoB} widthProps='160px' heightProps='37px' />
        <GroupStyled
          displayProps='flex'
          justifyProps='space-between'
          widthProps='68.85%' // 895px
          marginProps='0'
        >
          <CopyRight>Copyright ⓒ FARCADE</CopyRight>
          <Intro>
            <div>대표자 : 손우주</div>
            <div>팀원 : 형주희, 탄기르베르게노바 투마리스</div>
          </Intro>
          <GroupStyled
            displayProps='flex'
            justifyProps='flex-end'
            marginProps='0'
            widthProps='192px'
          >
            <Contact>Contact :</Contact>
            <ImageStyled
              src={email}
              widthProps='auto'
              heightProps='auto'
              marginProps='0 1.79% 0 0'
            />
            <ImageStyled src={insta} widthProps='auto' heightProps='auto' />
          </GroupStyled>
        </GroupStyled>
      </GuideLineStyled>
    </ContainerStyled>
  );
};

export default ViewFooter;
