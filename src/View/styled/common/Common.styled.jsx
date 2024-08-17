import styled from 'styled-components';

// global-common으로 생성
export const CommonStyled = styled.div`
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
  /* width: 100%;
  margin: 0 auto; */
`;

export const GuideLineStyled = styled.div`
  display: ${(props) => props.displayProps};
  flex-direction: ${(props) => props.dirProps || 'row'};
  justify-content: ${(props) => props.justifyProps};
  margin: ${(props) => props.marginProps};
  background-color: ${(props) => props.bgColorProps};
  width: var(--inner-contents-width);
  margin: 0 auto;
`;
