import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

const initialState = {
    name: null
}
type SingUpPayload = {
    name: string,
    email: string,
    password: string
}
const userReducer = createSlice({
    name: 'user',
    initialState,


    reducers: {
        singUp(state, action: any) {
            state.name = action.payload

        }
    }
})
export default userReducer.reducer
export const { singUp } = userReducer.actions