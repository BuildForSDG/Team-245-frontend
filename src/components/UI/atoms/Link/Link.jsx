import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLink = ({ to, children }) => <Link to={to}>{children}</Link>;

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

StyledLink.defaultProps = {
  to: '/'
};

export default StyledLink;
