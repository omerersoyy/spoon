import { LoginTypes } from './../Redux/Login'
import Client from './../Api/Client'
import { loginRequest } from './../Sagas/LoginSagas'
import { all, takeLatest } from 'redux-saga/effects'

const client = Client.createClient();


export default function* root() {
    yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest, client)
    ])
}
