import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

import tabReducer from './tabs/TabActionReducer'
import postReducer from './posts/PostsActionReducer'
import userReducer from "./users/userReducer";
import { singUpSaga } from '../Redux/users/singUpSagas';
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware()
const rootReduser = combineReducers({
    tabReducer, postReducer, userReducer
})
export const store = configureStore({
    reducer: rootReduser,
    middleware: getDefaultMiddleware => { return getDefaultMiddleware().concat(sagaMiddleware) }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

