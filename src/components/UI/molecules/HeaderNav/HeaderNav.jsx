import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '<atoms>/Logo/Logo';
import Button from '<atoms>/Button/Button';
import { Flex } from '@chakra-ui/core';

const HeaderNav = () => (
  <Flex padding="4" justify="space-between" align="center">
    <Logo />
    <Link to="/report">
      <Button>Submit a Report</Button>
    </Link>
  </Flex>
);

export default HeaderNav;
