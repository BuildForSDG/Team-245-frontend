import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';

const TButton = ({ children, ...props }) => (
  <Button bg="primary.500" {...props}>
    {children}
  </Button>
);

TButton.propTypes = {
  buttonType: PropTypes.oneOf(['button', 'submit', 'search']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

const handleClick = (event) => {
  event.preventDefault();
};

TButton.defaultProps = {
  buttonType: 'button',
  onClick: handleClick,
  color: 'white',
  type: 'button'
};

export default TButton;
