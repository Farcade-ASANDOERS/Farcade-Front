import {
  GuideLineStyled,
  ImageStyled,
  ButtonStyled,
  ContainerStyled,
  FontStyled,
} from '../styled/common/Common.styled';
import { BoxStyled } from '../styled/ViewHeader.styled';
import logoA from '../../Assets/image/main/logo-A.svg';
export const ViewHeader = () => {
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
        <ImageStyled src={logoA} />
        <BoxStyled>
          <div>Our Service</div>
          <div>Team</div>
          <div>Contact</div>
          <ButtonStyled
            bgColorProps='var(--primary-color-500)'
            colorProps='var(--white-color)'
            widthProps='197px'
            radiusProps='12px'
            onClick={() => {
              alert('test');
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
