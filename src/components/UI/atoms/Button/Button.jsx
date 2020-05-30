import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';

const TButton = ({ buttonType, onClick, className, children }) => (
  <Button type={buttonType} bg="primary.500" color="white" onClick={onClick} className={className}>
    {children}
  </Button>
);

TButton.propTypes = {
  buttonType: PropTypes.oneOf(['button', 'submit', 'search']),
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired
};

const handleClick = (event) => {
  event.preventDefault();
};

TButton.defaultProps = {
  buttonType: 'button',
  onClick: handleClick
};

export default TButton;
