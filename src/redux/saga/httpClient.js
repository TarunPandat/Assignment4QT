import {call, select, put, delay} from 'redux-saga/effects'
import AxiosInstance from '../../services/axios'
import { getErrorMsgs } from '../../utils/func'

function* HttpClient(payload, authorization = false) {
  const data = {...payload}

  if (authorization) {
    const authToken = yield select(({auth: {token}}) => token)

    if (authToken) {
      data.headers = {'x-authorization': authToken}
    } else {
      return {
        error: true,
        result: null,
      }
    }
  }

  try {
    const {data: result} = yield call(AxiosInstance, data)

    if(result?.data) {
        return {
            error: null,
            result,
          }
    }
    return {
        error: result,
        result: null
    }

  } catch (error) {
    return {
      error: e,
      result: null,
    }
  }
}

export default HttpClient
