import styled from 'styled-components';

export const ContainerStyled = styled.div`
  color: var(--gray-color-60);
  display: flex;
  border-bottom: 1px solid var(--gray-color-60);
  font-weight: var(--font-weight-md);
  height: 77px;
  align-items: center;
`;

export const ImageStyled = styled.img``;

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 37px;
  div {
    display: flex;
    margin-right: 28px;
    align-items: center;
  }
  button {
    background-color: var(--primary-color-500);
    color: var(--white-color);
    width: 165px;
    border-radius: 12px;
  }
`;
