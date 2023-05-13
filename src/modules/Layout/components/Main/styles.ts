import { Box, Container } from '@mui/material';
import { styled } from 'styled-components';

export const StyledContainer = styled(Container)`
  flex: 1 0 auto;
  padding: 20px;
`;
export const StyledProgressWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 80px !important;
    height: 80px !important;
  }
`;
