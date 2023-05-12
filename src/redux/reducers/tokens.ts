import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TokensInitialState = {
    idInstance ?: string;
    apiTokenInstance? : string
}

const initialState:TokensInitialState = {
    idInstance: undefined,
    apiTokenInstance: undefined
}

export const tokensSlice = createSlice({
    name: "tokensSlice",
    initialState,
    reducers: {
        setTokens(state, action: PayloadAction<Required<TokensInitialState>>){
            state = action.payload
        },
        removeTokens(state){
            state
            = {}
        }
    }
})

export const {setTokens, removeTokens} = tokensSlice.actions

export default tokensSlice.reducer