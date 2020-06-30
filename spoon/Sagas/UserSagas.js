import {call, put} from 'redux-saga/effects'
import UserActions from './../Redux/User'

const R = require('ramda')

export function* usersPastOrdersRequest (client, {query, token}) {

    client.setHeader(token)

    const response = yield call(client.post, query)
    
    if(response.ok) {
        const list = R.pathOr({}, ['data', 'data', 'pastOrders'], response);
        yield put(UserActions.usersPastOrdersRequestSuccess(list))
    } else {
        yield put(UserActions.usersPastOrdersRequestError('Something went wrong!'))
    }
}

export function* userDetailRequest (client, {query, token}) {

    client.setHeader(token)

    const response = yield call(client.post, query)
    
    if(response.ok) {
        console.log(response)
        const user = R.pathOr({}, ['data', 'data', 'user'], response);
        yield put(UserActions.userDetailRequestSuccess(user))
    } else {
        yield put(UserActions.userDetailRequestError('Something went wrong!'))
    }
}