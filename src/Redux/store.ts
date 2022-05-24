import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tabReducer from './tabs/TabActionReducer'
import postReducer from './posts/PostsActionReducer'

const rootReduser = combineReducers({
    tabReducer, postReducer
})
export const store = configureStore({
    reducer: rootReduser,
})




//{ tab: tabReducer, }
//{
//     tab: tabReducer,
//     // postReducer: postReducer
// },

// reducer:like,

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch