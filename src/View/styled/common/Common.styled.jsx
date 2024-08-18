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

export const ContainerStyled = styled.div`
  background-color: ${(props) => props.bgColorProps};
  color: ${(props) => props.colorProps};
  border-bottom: ${(props) => props.borderBottomProps};

  font-size: ${(props) => props.fontSizeProps};
  line-height: ${(props) => props.LHProps};
  font-weight: var(--font-weight-md);

  display: flex;
  align-items: center;
  height: ${(props) => props.heightProps};
`;

export const GuideLineStyled = styled.div`
  display: ${(props) => props.displayProps || 'flex'};
  flex-direction: ${(props) => props.dirProps || 'row'};
  justify-content: ${(props) => props.justifyProps || 'center'};
  background-color: ${(props) => props.bgColorProps}; //|| 'green'
  color: ${(props) => props.colorProps};
  width: ${(props) => props.widthProps || 'var(--inner-contents-width)'};

  max-width: 1300px;
  min-width: 925.09px;
  margin: ${(props) => props.marginProps || '0 auto'};
`;

export const GroupStyled = styled.div`
  display: ${(props) => props.displayProps};
  flex-direction: ${(props) => props.dirProps || 'row'};
  justify-content: ${(props) => props.justifyProps};
  background-color: ${(props) => props.bgColorProps};
  width: ${(props) => props.widthProps};
  height: ${(props) => props.heightProps};
  margin: ${(props) => props.marginProps || '0 auto'};

  //클래스 지정한 곳은 footer 컴포넌트로 이동
  /* .intro > div:not(:last-child) { */
  /* background-color: blueviolet; */
  /* margin-right: 13.31%; */
  //
  /* } */
  /* .intro > div:first-child {
    margin-left: 27.37%;
  } */
`;

export const ImageStyled = styled.img`
  width: ${(props) => props.widthProps};
  height: ${(props) => props.heightProps};
  margin: ${(props) => props.marginProps};
`;

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.bgColorProps};
  color: ${(props) => props.colorProps};

  font-size: ${(props) => props.fontSizeProps || 'var(--font-button-sm)'};
  line-height: ${(props) => props.LHProps || 'var(--font-button-LH-sm)'};
  font-weight: ${(props) =>
    props.fontWeightProps || 'var(--font-weight-medium)'};

  width: ${(props) => props.widthProps};
  height: ${(props) => props.heightProps};
  border-radius: ${(props) => props.radiusProps};
  margin: ${(props) => props.marginProps};
`;

export const FontStyled = styled.div`
  font-size: ${(props) => props.fontSizeProps || 'var(--font-headline-lg)'};
  line-height: ${(props) => props.LHProps || 'var(--font-headline-LH-lg)'};
  font-weight: ${(props) =>
    props.fontWeightProps || 'var(--font-weight-extra-bold)'};
  margin: ${(props) => props.marginProps};
`;
