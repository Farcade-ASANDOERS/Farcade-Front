import styled from 'styled-components';
import { FontStyled } from '../styled/common/Common.styled';

export const Container = styled.div`
  text-align: left;
  /* background-color: var(--gray-color-20); */
  border: 1px solid var(--primary-color-200);
  border-radius: 12px;
  width: 416px;
  height: 151px;
  padding: 24px;
  margin-right: 26px;

  &:last-child {
    margin-right: 0;
  }
`;

export const CustomStyled = styled(FontStyled)`
  color: ${(props) => props.colorProps}; //300
`;
