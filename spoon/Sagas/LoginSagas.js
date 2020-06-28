import {call, put} from 'redux-saga/effects'
import LoginActions from './../Redux/Login'

const R = require('ramda')

export function* loginRequest (client, {query}) {

    const response = yield call(client.post, query)
    
    if(response.ok) {
        const token = R.pathOr("", ['data', 'data', 'loginWithEmail', 'token'], response)

        if(token) {
            client.setHeader(token)
            yield put(LoginActions.loginRequestSuccess(token))
        } else {
            yield put(LoginActions.loginRequestFailed('Something went wrong!'))
        }
    } else {
        yield put(LoginActions.loginRequestError('Something went wrong!'))
    }
}