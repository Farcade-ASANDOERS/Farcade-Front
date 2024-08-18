import PropTypes from 'prop-types';
import { Container, CustomStyled } from '../../styled/Contents.styled';

const Contents = ({ titleProps, descriptionProps }) => {
  return (
    <Container>
      <CustomStyled
        colorProps='var(--primary-color-300)'
        fontSizeProps='var(--font-title-xs)'
        LHProps='var(--font-title-LH-xs)'
        fontWeightProps='var(--font-weight-semi-bold)'
        marginProps='0 0 14px 0'
      >
        {titleProps}
      </CustomStyled>
      <CustomStyled
        colorProps='var(--gray-color-20)'
        fontSizeProps='var(--font-body-md)'
        LHProps='var(--font-body-LH-md)'
        fontWeightProps='var(--font-weight-medium)'
      >
        {descriptionProps}
      </CustomStyled>
    </Container>
  );
};

Contents.propTypes = {
  titleProps: PropTypes.string.isRequired,
  descriptionProps: PropTypes.string.isRequired,
};

export default Contents;
