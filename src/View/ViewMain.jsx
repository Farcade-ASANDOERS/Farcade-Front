import {
  ServiceContainer,
  StyledContainer,
  ViewMainStyled,
  Contents,
} from './styled/ViewMain.styled';

const ViewMain = () => {
  return (
    <ViewMainStyled>
      <div style={{ border: '1px solid black' }}>header</div>
      Main 입니다.
      <StyledContainer>
        <Contents>banner</Contents>
        <ServiceContainer>
          <Contents>사용방법</Contents>
        </ServiceContainer>
        <Contents>인물 사진</Contents>
      </StyledContainer>
      <div
        style={{
          backgroundColor: 'var(--primary-color-500)',
          color: 'var(--white-color)',
        }}
      >
        CONTACT{' '}
        <button
          style={{
            backgroundColor: 'var(--gray-color-100)',
            color: 'var(--white-color)',
          }}
          onClick={() => {
            alert('sketch입니다.');
          }}
        >
          click
        </button>
      </div>
      <div style={{ backgroundColor: 'var(--gray-color-10)' }}>footer</div>
    </ViewMainStyled>
  );
};

export default ViewMain;
