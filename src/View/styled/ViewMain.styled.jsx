import styled from 'styled-components';
import { FontStyled } from './common/Common.styled';

export const ServiceContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColorProps};
  color: ${(props) => props.colorProps};
  /* background-color: var(--gray-color-90);
  color: var(--white-color); */
  margin: 0 auto;
`;

export const Contents = styled.div`
  background-color: #597659;
  width: var(--inner-contents-width);
  margin: 0 auto;
`;

export const HeaderFixedStyled = styled.div`
  position: fixed; /* 헤더를 상단에 고정 */
  top: 0;
  width: 100%; /* 화면 전체 너비 */
  z-index: 1000; /* 다른 요소보다 위에 위치 */
  background-color: white; /* 배경색을 추가해서 가독성 확보 */
`;

export const CustomFontStyled = styled(FontStyled)`
  color: ${(props) => props.colorProps};
`;
