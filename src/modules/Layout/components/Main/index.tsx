import { Box, CircularProgress, Container } from '@mui/material';
import React, { ReactNode } from 'react';
import { StyledContainer, StyledProgressWrapper } from './styles';

export type TMainProps = {
  children?: ReactNode;
  loading?: boolean;
};

const _Main = ({ children, loading }: TMainProps) => {
  return (
    <>
      {!loading ? (
        <StyledContainer>{children}</StyledContainer>
      ) : (
        <StyledProgressWrapper>
          <CircularProgress />
        </StyledProgressWrapper>
      )}
    </>
  );
};

export const Main = React.memo(_Main);
