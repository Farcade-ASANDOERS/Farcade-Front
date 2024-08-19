import { GuideLineStyled as template } from './common/Common.styled';
import styled from 'styled-components';

export const GuideLineStyled = styled(template)`
  align-items: center;
  color: var(--gray-color-80);
  font-size: var(--font-body-md);
  line-height: var(--font-body-LH-md);
`;

export const ContentsStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 169px;
  margin-right: 120px;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 291px;
  margin-right: 120px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* background-color: aqua; */
  width: 192px;
`;

export const Element = styled.div`
  margin-right: ${(props) => props.marginRProps};
`;
