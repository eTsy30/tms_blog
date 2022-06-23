import { createAsyncThunk } from '@reduxjs/toolkit';
export const changePassword: any = createAsyncThunk(
    'changePassword',
    async (email) => {

        try {
            const response = await fetch("https://studapi.teachmeskills.by/auth/users/reset_password_confirm/", {
                method: 'POST',
                body: JSON.stringify(email),
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                }
            })
            const responseFormat = await response.json()
            return responseFormat
        } catch (error) {
            return console.log(error);
        }

    }
)
