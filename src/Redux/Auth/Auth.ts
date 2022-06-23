
import { AsyncThunkPayloadCreator, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";


const initialState = {
    auth: true,
}

const AuthReducer = createSlice({
    name: 'AuthReducer',
    initialState,
    reducers: {

        IsAuth: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload
        }
    }
})

export default AuthReducer.reducer
export const { IsAuth, } = AuthReducer.actions

