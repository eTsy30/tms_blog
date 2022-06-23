
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IThemeState {
    value: string,
}

const initialState: IThemeState = {
    value: 'light',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer