import React from 'react';
import Button from '<atoms>/Button/Button';
import Link from '<atoms>/Link/Link';
import heroImage from '<images>/hero_image.svg';
import { Image, Box, Text } from '@chakra-ui/core';

const Hero = () => (
  <Box
    my="16"
    px="4"
    display={{ md: 'flex' }}
    justifyContent="space-between"
    alignItems="center"
    flexDirection={{ md: 'row-reverse' }}
  >
    <Image src={heroImage} width={['100%', '50%']} my={[16, 2, 2, 4]} />
    <Box maxWidth="xl">
      <Text as="h1" fontSize="2rem">
        Tired of the Corruption?
      </Text>
      <Text as="h2" fontSize="2rem">
        Want it to stop?
      </Text>
      <Text as="h6" fontSize="1.3rem" marginY="8" color>
        Take advantage of our safe and anonymous platform, submit a report along with your evidences and let us do the
        rest
      </Text>
      <Button>
        <Link to="/report">Submit a Report</Link>
      </Button>
    </Box>
  </Box>
);

export default Hero;
