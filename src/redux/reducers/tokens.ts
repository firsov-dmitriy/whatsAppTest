import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TokensInitialState = {
  idInstance: string;
  apiTokenInstance: string;
};

const initialState: TokensInitialState = {
  idInstance: '',
  apiTokenInstance: '',
};

export const tokens = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Required<TokensInitialState>>) {
      const { idInstance, apiTokenInstance } = action.payload;
      localStorage.setItem('tokens', JSON.stringify(action.payload));

      state.idInstance = idInstance;
      state.apiTokenInstance = apiTokenInstance;
    },
    removeTokens(state) {
      state = initialState;
      localStorage.removeItem('tokens');
    },
  },
});

export const { setTokens, removeTokens } = tokens.actions;
