import { configureStore } from '@reduxjs/toolkit';
import tokens from './reducers/tokens';
import notification from './reducers/notification';

export const store = configureStore({
  reducer: {
    tokens,
    notification,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
