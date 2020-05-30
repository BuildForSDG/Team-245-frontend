import React, { Fragment } from 'react';
import { Box } from '@chakra-ui/core';

const Container = ({ children }) => (
  <Box width={['95%', '80%']} margin="auto">
    {children}
  </Box>
);

export default Container;
