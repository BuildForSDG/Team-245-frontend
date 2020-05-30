import React from 'react';
import Logo from '<atoms>/Logo/Logo';
import Button from '<atoms>/Button/Button';
import Link from '<atoms>/Link/Link';
import { Flex } from '@chakra-ui/core';

const HeaderNav = () => (
  <Flex padding="4" justify="space-between" align="center">
    <Logo />
    <Button>
      <Link to="/report">Submit a Report</Link>
    </Button>
  </Flex>
);

export default HeaderNav;
