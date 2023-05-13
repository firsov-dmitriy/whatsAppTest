import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface TNotificationState {
  type: 'error' | 'warning' | 'info' | 'success' | null;
  message: string | unknown | null;
}

const intitalState = {
  type: null,
  message: null,
} as TNotificationState;

const notificationSlice = createSlice({
  name: 'notification',
  initialState: intitalState,
  reducers: {
    setNotification(state, action: PayloadAction<TNotificationState>) {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    removeNotification(state) {
      (state.message = null), (state.type = null);
    },
  },
});

export const { setNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
