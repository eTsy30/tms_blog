import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// interface ITokenState {
//     value: any,
//     isLoading: boolean
// }
// const initialState: ITokenState = {
//     value: null,
//     isLoading: false
// }
// export const getToken: any = createAsyncThunk(
//     'getToken',
//     async (tokenParam) => {
//         const response = await fetch('https://studapi.teachmeskills.by/auth/users/activation/',
//             {
//                 method: 'POST',
//                 body: JSON.stringify(tokenParam),
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             })
//         return response.ok
//     }


// )
// const tokenReduser = createSlice({
//     name: 'tokenReducer',
//     initialState,
//     extraReducers: {
//         [getToken.pending]: (state: any) => {
//             state.isLoading = true;
//             console.log('pending', getToken.pending);
//         },
//         [getToken.fulfilled]: (state, action) => {
//             state.value = action.payload;
//             state.isLoading = false;

//         },
//         [getToken.rejected]: (state) => {
//             state.isLoading = false;
//         }
//     },
//     reducers: {}
// })
// export default tokenReduser.reducer
// export const { } = tokenReduser.actions