import { configureStore } from '@reduxjs/toolkit';

import { tokens } from './reducers/tokens';
import notification from './reducers/notification';

import { chatApi } from '@/modules/Chat';

export const store = configureStore({
  reducer: {
    tokens: tokens.reducer,
    notification,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(chatApi.middleware);
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
