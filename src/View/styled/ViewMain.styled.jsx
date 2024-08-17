import styled from 'styled-components';

// global-common으로 생성
export const ViewMainStyled = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  /* align-items: center; */
`;
// global-common으로 생성 - 디자인 시스템 적용 된 여백 값
export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ServiceContainer = styled.div`
  background-color: var(--gray-color-90);
  color: var(--white-color);
`;

export const Contents = styled.div`
  background-color: #597659;
  width: var(--inner-contents-width);
  margin: 0 auto;
`;
