import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBarWrapper, StyledNavLink } from './styles';

export type THeaderProps = {};

const drawerWidth = 240;
const navItems: Array<{ title: ReactNode; link: string }> = [
  { title: 'Main', link: '/' },
  { title: 'Chat', link: '/chat' },
];

const _Header = ({}: THeaderProps) => {
  return (
    <StyledAppBarWrapper>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Whats App Test
          </Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            {navItems.map(({ title, link }) => (
              <StyledNavLink key={link} to={link}>
                {title}
              </StyledNavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </StyledAppBarWrapper>
  );
};

export const Header = React.memo(_Header);
