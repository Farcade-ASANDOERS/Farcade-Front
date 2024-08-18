import PropTypes from 'prop-types';
import { Container, CustomStyled } from '../../styled/Profile.styled';
import { ImageStyled } from '../../styled/common/Common.styled';
const Profile = ({ imageProps, typeProps, nameProps, emailProps }) => {
  return (
    <Container>
      <ImageStyled src={imageProps} marginProps='20px 0 20px 0' />
      <CustomStyled
        colorProps='var(--primary-color-500)'
        fontSizeProps='var(--font-title-sm)'
        LHProps='var(--font-title-LH-sm)'
        fontWeightProps='var(--font-weight-bold)'
        marginProps='0 auto'
      >
        {typeProps}
      </CustomStyled>
      <CustomStyled
        colorProps='var(--gray-color-90)'
        fontSizeProps='var(--font-body-md)'
        LHProps='var(--font-body-LH-md)'
        fontWeightProps='var(--font-weight-medium)'
        marginProps='0 auto'
      >
        {nameProps}
      </CustomStyled>
      <CustomStyled
        colorProps='var(--gray-color-60)'
        fontSizeProps='var(--font-body-sm)'
        LHProps='var(--font-body-LH-sm)'
        fontWeightProps='var(--font-weight-regular)'
        marginProps='8px auto 20px auto'
      >
        {emailProps}
      </CustomStyled>
    </Container>
  );
};

Profile.propTypes = {
  imageProps: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  typeProps: PropTypes.string.isRequired,
  nameProps: PropTypes.string.isRequired,
  emailProps: PropTypes.string.isRequired,
};

export default Profile;
