import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
interface ITokenState {
    value: any,
    isLoading: boolean
}
const initialState: ITokenState = {
    value: null,
    isLoading: false
}
export const getToken: any = createAsyncThunk(
    'getToken',
    async (tokenParam) => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=70',
            {
                method: 'POST',
                body: JSON.stringify(tokenParam),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
        const responseFormat = await response.json()
        console.log(responseFormat);

        return responseFormat
    }


)
const tokenReduser = createSlice({
    name: 'tokenReducer',
    initialState,
    extraReducers: {
        [getToken.pending]: (state: any) => {


            state.isLoading = true;
        },
        [getToken.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.isLoading = false;

        },
        [getToken.rejected]: (state) => {

            state.isLoading = false;
        }
    },
    reducers: {}
})
export default tokenReduser.reducer
export const { } = tokenReduser.actions