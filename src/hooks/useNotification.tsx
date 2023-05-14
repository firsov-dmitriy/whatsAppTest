import React from 'react';

import { setNotification } from '@/redux/reducers/notification';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';

export const useNotification = () => {
  const dispatch = useAppDispatch();

  const createNotificationMethods = React.useMemo(() => {
    return {
      createNotificationSuccess: (message?: string) => {
        return dispatch(setNotification({ type: 'success', message: message || 'Success' }));
      },

      createNotificationError: (message?: string | unknown) => {
        return dispatch(setNotification({ type: 'error', message: message || 'Error' }));
      },

      createNotificationWarning: (message?: string) => {
        return dispatch(setNotification({ type: 'warning', message: message || 'Warning' }));
      },
      createNotificationInfo: (message?: string) => {
        return dispatch(setNotification({ type: 'info', message: message || 'Info' }));
      },
    };
  }, [dispatch]);

  return createNotificationMethods;
};
