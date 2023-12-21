import { all } from 'redux-saga/effects'
import Auth from './authSaga'

const sagas = function* sagas() {
    yield all([Auth()])
}

export default sagas
