import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

const initialState = {
    user: null,
    isLoading: 'idle',
    error: null
}
type SingUpPayload = {
    name: string,
    email: string,
    password: any
}
const userReducer = createSlice({
    name: 'user',
    initialState,


    reducers: {
        singUp(state, action: any) {
            if (state.isLoading === 'idle') {
                state.isLoading = 'pending'
            }

        },
        singUpSuccess(state, action: any) {
            if (state.isLoading === 'pending') {
                state.isLoading = 'idle'
                state.user = action.payload
            }

        },
        singUpFailure(state, action: any) {
            state.isLoading = 'idle'
            state.user = action.payload

        }
    }
})
export default userReducer.reducer
export const { singUp, singUpFailure, singUpSuccess } = userReducer.actions