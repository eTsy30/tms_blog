import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const changePassword: any = createAsyncThunk(
    'changePassword',
    async (email) => {
        const response = await fetch("https://studapi.teachmeskills.by/auth/users/reset_password_confirm/", {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        })
        const responseFormat = await response.json()
        console.log('changePassword_response', responseFormat);

        return responseFormat
    }
)
const initialState: any = {
    email: null,
    isLoading: false

}
