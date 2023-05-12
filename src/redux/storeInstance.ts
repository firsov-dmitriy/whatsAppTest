import { configureStore } from "@reduxjs/toolkit";
import tokens from "./reducers/tokens";

export const store = configureStore({
    reducer: {
        tokens
    }
})


export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
