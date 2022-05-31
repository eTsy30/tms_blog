import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

type AuthState = {
    user: SignUpSuccessPayload | null
    isLoading: string
    error: string | null
}

type User = {
    name: string
}

export type SignUpPayload = {
    username: string
    email: string
    password: string
}

export type SignUpSuccessPayload = {
    username: string
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
        signUp: (state, action: PayloadAction<SignUpPayload>) => {
            if (state.isLoading === 'idle') {
                state.isLoading = 'pending'
            }
        },
        signUpSuccess: (state, action: PayloadAction<SignUpSuccessPayload>) => {
            if (state.isLoading === 'pending') {
                state.isLoading = 'idle'
                state.user = action.payload
                console.log(state.user);

            }
        },
        signUpFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { signUpSuccess, signUp, signUpFailure } = authSlice.actions

export default authSlice.reducer