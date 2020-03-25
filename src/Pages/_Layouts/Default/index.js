import React from 'react';

import PropTypes from 'prop-types';
import { Wrapper, Content, Container } from './styles';
import Header from '~/Components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
