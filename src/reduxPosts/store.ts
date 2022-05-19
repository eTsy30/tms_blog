
import { configureStore, combineReducers } from "@reduxjs/toolkit";//1
import postSlise from "./reduser";


export const store = configureStore({
    reducer: {
        posts: postSlise
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch

