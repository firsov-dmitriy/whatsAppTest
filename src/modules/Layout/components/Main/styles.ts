import { styled } from 'styled-components';
import { Box, Container } from '@mui/material';

export const StyledContainer = styled(Container)`
  flex: 1 0 auto;
  padding: 20px;
  background-color: #d1d7db;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
export const StyledProgressWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d1d7db;
  span {
    width: 80px !important;
    height: 80px !important;
  }
`;
