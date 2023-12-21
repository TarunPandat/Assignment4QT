import { all, call, put, takeLatest } from 'redux-saga/effects'


import {
    loginFailure,
    loginSuccess,
    setLoader
} from '../actions/authActions'
import { LOGIN } from '../actionTypes/authActionTypes'
import { API } from '../../config/config'
import HttpClient from './httpClient'

export function* login(data: any) {

    yield put(setLoader(true))

    try {
        const { error, result } = yield call(HttpClient, {
            data: data.payload,
            method: 'post',
            url: API.login,
            headers: {
                ekey: data?.payload?.ekey
            }
        })

        if(result) {
            yield put(loginSuccess(result?.data))
        }
        else {
            yield put(loginFailure(error))
        }
        yield put(setLoader(false))

    } catch (error) {
        yield put(loginFailure(error))
        yield put(setLoader(false))
    }
}

function* Auth() {
    yield all([takeLatest(LOGIN, login)])
}

export default Auth
