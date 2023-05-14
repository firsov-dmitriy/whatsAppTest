import { Box } from '@mui/material';
import React from 'react';

export type TFooterProps = {};

const _Footer = () => {
  return (
    <Box sx={{ flex: '0 0 auto', height: '60px', marginTop: 4, backgroundColor: '#6f9196' }}>
      Footer
    </Box>
  );
};

export const Footer = React.memo(_Footer);
