import React from 'react';

import PropTypes from 'prop-types';
import { Container, Content } from './styles';

export default function Modal({ children, handleModal }) {
  return (
    <Container
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        handleModal();
      }}
    >
      <Content>{children}</Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
  handleModal: PropTypes.func,
};
Modal.defaultProps = {
  children: () => <div />,
  handleModal: () => {},
};
