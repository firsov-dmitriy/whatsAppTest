import { useLocation } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import React from 'react';
import { Snackbar, Alert } from '@mui/material';

import { Main, TMainProps } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';

import { removeNotification } from '@/redux/reducers/notification';
import { useAppSelector } from '@/redux/hooks/useAppSelector';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';

// eslint-disable-next-line prettier/prettier
export interface LayoutProps extends TMainProps { }

const _Layout = ({ children, loading }: LayoutProps) => {
  const path = useState('');

  const { pathname } = useLocation();

  const notification = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  const onClose = React.useCallback(() => {
    dispatch(removeNotification());
  }, [dispatch]);

  useEffect(() => {
    if (pathname) {
      path[1]((prev) => {
        if (prev !== pathname) {
          onClose();
          return pathname;
        }
        return pathname;
      });
    }
  }, [onClose, path, pathname]);

  return (
    <>
      <Header />
      <Snackbar
        sx={{ top: '60px !important' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={!!notification.type}
        onClose={onClose}
        autoHideDuration={1000}
      >
        <div>
          {(notification.message as string) && (
            <Alert severity={notification.type || undefined}>
              {notification.message as string}
            </Alert>
          )}
        </div>
      </Snackbar>

      <Main loading={loading}>{children}</Main>
      <Footer />
    </>
  );
};
export const Layout = memo(_Layout);
