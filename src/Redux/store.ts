import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tabReducer from './tabs/TabActionReducer'
import postReducer from './posts/PostsActionReducer'
import authSlice from '../Redux/users/UsersActionReducer'

import createSagaMiddleware from "redux-saga";
import signUpSaga from "./saga/signUpSagas";
const sagaMiddleware = createSagaMiddleware()

const rootReduser = combineReducers({
    tabReducer, postReducer, authSlice
})
export const store = configureStore({
    reducer: {
        tabReducer: tabReducer,
        postReducer: postReducer,
        authSlice: authSlice,
    },
    middleware: getDefaultMiddleware => { return getDefaultMiddleware().concat(sagaMiddleware) }

})
sagaMiddleware.run(signUpSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

