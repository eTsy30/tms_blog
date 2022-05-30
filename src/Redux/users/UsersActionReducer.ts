import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

type AuthState = {
    user: User | null
    isLoading: string
    error: string | null
}

type User = {
    name: string
}

export type SignUpPayload = {
    name: string
    email: string
    password: string
}

const initialState: AuthState = {
    user: null,
    isLoading: 'idle',
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: state => {
            console.log('signUp');

            if (state.isLoading === 'idle') {
                state.isLoading = 'pending'
            }
        },
        signUpSuccess: (state, action: PayloadAction<SignUpPayload>) => {
            console.log('signUpSuccess');

            if (state.isLoading === 'pending') {
                state.isLoading = 'idle'
                state.user = action.payload
            }
        },
        signUpFailure: (state, action: PayloadAction<string>) => {
            console.log('signUpFailure');

            state.isLoading = 'idle'
            state.error = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { signUpSuccess, signUp, signUpFailure } = authSlice.actions

export default authSlice.reducer