import { ServiceContainer, Contents } from '../styled/ViewMain.styled';
import { CommonStyled, GuideLineStyled } from '../styled/common/Common.styled';
import { ViewHeader } from '../Header/ViewHeader';
const ViewMain = () => {
  return (
    <CommonStyled>
      <ViewHeader />
      Main 입니다.
      {/* <StyledContainer> */}
      <GuideLineStyled>banner</GuideLineStyled>
      <ServiceContainer>
        <GuideLineStyled>사용방법</GuideLineStyled>
      </ServiceContainer>
      <GuideLineStyled>인물 사진</GuideLineStyled>
      {/* </StyledContainer> */}
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
    </CommonStyled>
  );
};

export default ViewMain;
