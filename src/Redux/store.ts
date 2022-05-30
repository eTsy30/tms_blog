import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tabReducer from './tabs/TabActionReducer'
import postReducer from './posts/PostsActionReducer'
import authSlice from '../Redux/users/UsersActionReducer'
import singlepostReducer from '../Redux/singlePost/singePost'
import createSagaMiddleware from "redux-saga";
import signUpSaga from "./saga/signUpSagas";
const sagaMiddleware = createSagaMiddleware()

const rootReduser = combineReducers({
    tabReducer, postReducer, authSlice, singlepostReducer,
})
export const store = configureStore({
    reducer: {
        tabReducer: tabReducer,
        postReducer: postReducer,
        authSlice: authSlice,
        singlepostReducer: singlepostReducer,

    },
    middleware: getDefaultMiddleware => { return getDefaultMiddleware().concat(sagaMiddleware) }

})
sagaMiddleware.run(signUpSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

