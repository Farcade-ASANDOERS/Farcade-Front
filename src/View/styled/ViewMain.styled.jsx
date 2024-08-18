import styled from 'styled-components';
import { FontStyled } from './common/Common.styled';

export const ServiceContainer = styled.div`
  background-color: ${(props) => props.bgColorProps};
  color: ${(props) => props.colorProps};
  /* background-color: var(--gray-color-90);
  color: var(--white-color); */
`;

export const Contents = styled.div`
  background-color: #597659;
  width: var(--inner-contents-width);
  margin: 0 auto;
`;

export const CustomFontStyled = styled(FontStyled)`
  color: ${(props) => props.colorProps};
`;
