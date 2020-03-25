import React from 'react';

import PropTypes from 'prop-types';
import { Avatar } from './styles';

export default function ColoredAvatar({ color, children }) {
  return <Avatar color={color}>{children}</Avatar>;
}

ColoredAvatar.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
};

ColoredAvatar.defaultProps = {
  color: '#ddd',
  children: () => 'FF',
};
