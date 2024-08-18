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

export const GuideLineStyled = styled.div`
  display: ${(props) => props.displayProps};
  flex-direction: ${(props) => props.dirProps || 'row'};
  justify-content: ${(props) => props.justifyProps};
  margin: ${(props) => props.marginProps};
  background-color: ${(props) => props.bgColorProps};
  width: ${(props) => props.widthProps}; // || 'var(--inner-contents-width)'
  margin: ${(props) => props.marginProps || '0 auto'};
  .intro > div:not(:last-child) {
    margin-right: 13.31px;
  }
  /* .intro > div:first-child {
    margin-left: 27.37%;
  } */
  #intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contact {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-right: 0.89%;
    background-color: aqua;
    width: 70px;
  }

  .email {
    margin-right: 1.79%;
  }
`;

export const ImageStyled = styled.img`
  width: ${(props) => props.widthProps};
  height: ${(props) => props.heightProps};
`;

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.bgColorProps};
  color: ${(props) => props.colorProps};
  width: ${(props) => props.widthProps};
  border-radius: ${(props) => props.radiusProps};
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
