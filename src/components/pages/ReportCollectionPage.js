import React from 'react';
import DefaultLayout from '<templates>/default';
import ReportsForm from '<molecules>/ReportsForm/ReportsForm';
import { Box } from '@chakra-ui/core';

const ReportCollectionPage = () => (
  <DefaultLayout>
    <Box marginY="16" margin="auto" width={{ md: '80%' }}>
      <ReportsForm />
    </Box>
  </DefaultLayout>
);

export default ReportCollectionPage;
