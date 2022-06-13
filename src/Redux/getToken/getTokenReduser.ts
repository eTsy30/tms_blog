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
export const getJwt: any = createAsyncThunk(
    'getToken',
    async (dataForJwt) => {
        try {
            const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/',
                {
                    method: 'POST',
                    body: JSON.stringify(dataForJwt),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            const data = await response.json()

            console.log('tokenReduser', data);
            if (response.ok) {
                localStorage.setItem("access", JSON.stringify(data.access));
                localStorage.setItem("refresh", JSON.stringify(data.refresh));
            }

            return data
        } catch (error
        ) {
            return console.log(error);

        }
    }


)
const tokenReduser = createSlice({
    name: 'tokenReducer',
    initialState,
    extraReducers: {
        [getJwt.pending]: (state: any) => {
            state.isLoading = true;

        },
        [getJwt.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.isLoading = false;



        },
        [getJwt.rejected]: (state) => {
            state.isLoading = false;
        }
    },
    reducers: {}
})
export default tokenReduser.reducer
export const { } = tokenReduser.actions