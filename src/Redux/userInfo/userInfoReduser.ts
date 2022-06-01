import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    isLoading: false,
};
export const getUserInfo: any = createAsyncThunk(
    "getUserInfo",
    async (access) => {
        const response = await fetch(
            "https://studapi.teachmeskills.by/auth/users/me/",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        );
        const responseFormat = await response.json();


        return responseFormat;
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