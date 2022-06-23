import { configureStore } from "@reduxjs/toolkit";

import tabReducer from './tabs/TabActionReducer'
import postReducer from './posts/PostsActionReducer'
import authSlice from '../Redux/users/UsersActionReducer'
import singlepostReducer from '../Redux/singlePost/singePost'
import createSagaMiddleware from "redux-saga";
import signUpSaga from "./saga/signUpSagas";
import tokenReduser from './getToken/getTokenReduser'
import userInfo from './userInfo/userInfoReduser'
import searchReducer from './searchPosts/SearchPosts'
import themeSlice from "./Theme/ThemeReduser";
import likeReducer from './Like/Like'
import AuthReducer from './Auth/Auth'
const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    reducer: {
        tabReducer: tabReducer,
        postReducer: postReducer,
        authSlice: authSlice,
        singlepostReducer: singlepostReducer,
        tokenReduser: tokenReduser,
        userInfo: userInfo,
        searchReducer: searchReducer,
        theme: themeSlice,
        likeReducer: likeReducer,
        AuthReducer: AuthReducer



    },
    middleware: getDefaultMiddleware => { return getDefaultMiddleware().concat(sagaMiddleware) }

})
sagaMiddleware.run(signUpSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

