import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background-color: ${(props) => props.bgColorProps};
  color: var(--gray-color-60);
  border-bottom: ${(props) => props.borderBottomProps};

  font-weight: var(--font-weight-md);

  display: flex;
  align-items: center;
  height: ${(props) => props.heightProps};

  /* position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; */
`;

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 37px;
  div {
    display: flex;
    margin-right: 28px;
    align-items: center;
  }
`;

export const ContentStyled = styled.div`
  cursor: pointer;
`;
