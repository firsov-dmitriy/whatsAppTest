import { Container } from '@mui/material';
import React, { ReactNode } from 'react';

export type TMainProps = {
  children?: ReactNode;
};

const _Main = ({ children }: TMainProps) => {
  return <Container sx={{ paddingTop: '84px' }}>{children}</Container>;
};

export const Main = React.memo(_Main);
