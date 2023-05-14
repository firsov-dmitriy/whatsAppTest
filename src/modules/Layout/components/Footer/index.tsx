import React from 'react';
import { Box } from '@mui/material';

const _Footer = () => {
  return (
    <Box sx={{ flex: '0 0 auto', height: '60px', marginTop: 4, backgroundColor: '#6f9196' }}>
      Footer
    </Box>
  );
};

export const Footer = React.memo(_Footer);
