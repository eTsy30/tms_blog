
import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
    signUpFailure,
    SignUpPayload,
    signUpSuccess,
} from '../users/UsersActionReducer'
import { signUp } from '../../Redux/users/UsersActionReducer'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* signUpSaga(action?: PayloadAction<SignUpPayload>): any {
    try {
        yield call(delay, 2000)
        console.log('call');
        const data = {
            name: 'Evgeny',
            email: '1213@gmail.com',
            password: '123123123',
        }
        yield put(signUpSuccess(data))
    } catch (error: any) {
        yield put(signUpFailure(error.message))
    }
}

export default function* () {
    yield takeEvery(signUp, signUpSaga)
}