import {call, put} from 'redux-saga/effects'
import UserActions from './../Redux/User'

const R = require('ramda')

export function* usersPastOrdersRequest (client, {query}) {

    const response = yield call(client.post, query)
    
    if(response.ok) {
        const list = R.pathOr({}, ['data', 'data', 'pastOrders'], response);
        yield put(UserActions.usersPastOrdersRequestSuccess(list))
    } else {
        console.log(response)
    }
}

export function* userDetailRequest (client, {query}) {

    const response = yield call(client.get, query)
    
    if(response.ok) {
        const user = R.pathOr({}, ['data', 'data', 'user'], response);
        yield put(UserActions.userDetailRequestSuccess(user))
    }
}