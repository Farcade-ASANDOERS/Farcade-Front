import { GuideLineStyled } from '../styled/common/Common.styled';
import {
  ContainerStyled,
  BoxStyled,
  ImageStyled,
} from '../styled/ViewHeader.styled';
import logoA from '../../Assets/image/main/logo-A.svg';
export const ViewHeader = () => {
  return (
    <ContainerStyled>
      <GuideLineStyled
        displayProps='flex'
        justifyProps='space-between'
        // bgColorProps='#597659'
      >
        <ImageStyled src={logoA} />
        <BoxStyled>
          <div>Our Service</div>
          <div>Team</div>
          <div>Contact</div>
          <button>GET LAUNCH ALERTS</button>
        </BoxStyled>
      </GuideLineStyled>
    </ContainerStyled>
  );
};
