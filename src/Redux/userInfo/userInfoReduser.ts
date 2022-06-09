import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "components/Utils/CustomFetch";

const initialState = {
    user: '',
    isLoading: false,
};
export const getUserInfo: any = createAsyncThunk(
    "getUserInfo",


    async () => {
        const data = await customFetch('https://studapi.teachmeskills.by/auth/users/me/');

        return data;
    }
);

const userInfo = createSlice({
    name: "userInfo",
    initialState,
    reducers: {},
    extraReducers: {
        [getUserInfo.pending]: (state: any) => {
            state.isLoading = true;
        },
        [getUserInfo.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;

        },
        [getUserInfo.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});
export const { } = userInfo.actions

export default userInfo.reducer