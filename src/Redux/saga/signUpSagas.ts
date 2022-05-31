
import { put, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
    signUpFailure,
    SignUpPayload,
    signUpSuccess,
    SignUpSuccessPayload,
} from '../users/UsersActionReducer'
import { signUp } from '../../Redux/users/UsersActionReducer'


export function* signUpSaga(action: PayloadAction<SignUpPayload>): any {
    try {
        const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        const data: SignUpSuccessPayload = yield response.json()

        yield put(signUpSuccess(data))
    } catch (error: any) {
        yield put(signUpFailure(error.message))
    }
}


export default function* () {
    yield takeEvery(signUp, signUpSaga)
}