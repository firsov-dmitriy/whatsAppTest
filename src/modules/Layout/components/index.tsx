import { memo, useEffect, useState } from 'react';
import { Header, THeaderProps } from './Header';
import { Footer, TFooterProps } from './Footer';
import { Main, TMainProps } from './Main';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { useAppSelector } from '@/redux/hooks/useAppSelector';
import { removeNotification } from '@/redux/reducers/notification';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

export interface LayoutProps extends THeaderProps, TFooterProps, TMainProps {}

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
