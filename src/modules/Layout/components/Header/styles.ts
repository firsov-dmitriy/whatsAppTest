import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    text-decoration: underline;
  }
`;
export const StyledAppBarWrapper = styled(Box)`
  display: flex;
  height: 61px;
`;
