import React from 'react';
import { Stack, Icon } from '@chakra-ui/core';

const SocialIcons = () => (
  <Stack isInline>
    {['facebook', 'twitter', 'instagram', 'email'].map((social, key) => (
      <Icon name={social} size="16px" color="primary.500" key={key} />
    ))}
  </Stack>
);

export default SocialIcons;
