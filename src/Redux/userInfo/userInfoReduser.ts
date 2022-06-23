import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "components/Utils/CustomFetch";

const initialState = {
    user: '',
    isLoading: false,
};
export const getUserInfo: any = createAsyncThunk(
    "getUserInfo",


    async (item) => {


        if (item === null) { return null } else {
            const data = await customFetch('https://studapi.teachmeskills.by/auth/users/me/');
            return data;
        }

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


export default userInfo.reducer