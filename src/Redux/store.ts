import { configureStore } from "@reduxjs/toolkit";

import tabReducer from './tabs/TabActionReducer'


export const store = configureStore({

    reducer: tabReducer,
    // reducer:post,
    // reducer:like,
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch