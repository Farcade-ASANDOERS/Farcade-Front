import {
  ContainerStyled,
  GuideLineStyled,
  ImageStyled,
} from '../styled/common/Common.styled';
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
        <GuideLineStyled
          className='intro'
          displayProps='flex'
          justifyProps='space-evenly'
          widthProps='68.85%'
          // 895px
          marginProps='0'
        >
          <div>Copyright ⓒ FARCADE</div>
          <div id='intro'>
            <div>대표자 : 손우주</div>
            <div>팀원 : 형주희, 탄기르베르게노바 투마리스</div>
          </div>
          <GuideLineStyled displayProps='flex' marginProps='0'>
            <div className='contact'>Contact :</div>
            <ImageStyled
              className='email'
              src={email}
              widthProps='50px'
              heightProps='50px'
            />
            <ImageStyled src={insta} widthProps='50px' heightProps='50px' />
          </GuideLineStyled>
        </GuideLineStyled>
      </GuideLineStyled>
    </ContainerStyled>
  );
};

export default ViewFooter;
