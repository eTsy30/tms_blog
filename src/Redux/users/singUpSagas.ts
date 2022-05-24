
import { put, call, takeEvery } from 'redux-saga/effects'
import {
    singUpSuccess, singUpFailure, singUp
} from './userReducer'
import { mainModule } from 'process';

const delay = (ms: number) => new Promise(res => {
    setTimeout(res, ms)
})


export function* SingUp() {
    try {
        yield call(delay, 2000)
        const data = {
            name: 'Evgen',
            email: '123@mainModule.com',
            password: '12345Dv.!'
        }
        yield put(singUpSuccess(data))
    } catch (error: any) {
        yield put(singUpFailure(error.message))
    }

}
export function* singUpSaga() {
    yield takeEvery('auth/singUp', singUp)
}