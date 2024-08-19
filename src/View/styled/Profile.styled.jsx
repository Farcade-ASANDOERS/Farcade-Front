import styled from 'styled-components';
import { FontStyled } from '../styled/common/Common.styled';

export const Container = styled.div`
  background-color: var(--gray-color-10);
  border-radius: 12px;
  width: 193px;
  height: 354px;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
`;

export const CustomStyled = styled(FontStyled)`
  color: ${(props) => props.colorProps};
`;
