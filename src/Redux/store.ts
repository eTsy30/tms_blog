import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tabReducer from './tabs/TabActionReducer'
import postReducer from './posts/PostsActionReducer'
import userReducer from "./users/userReducer";

const rootReduser = combineReducers({
    tabReducer, postReducer, userReducer
})
export const store = configureStore({
    reducer: rootReduser,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch