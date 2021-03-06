import {call, put} from 'redux-saga/effects'
import RestaurantsActions from './../Redux/Restaurants'

const R = require('ramda')

export function* restaurantsRequest (client, {query}) {

    const response = yield call(client.post, query)
    
    if(response.ok) {
        const list = R.pathOr([], ['data', 'data', 'restaurants'], response);
        yield put(RestaurantsActions.restaurantsRequestSuccess(list))
    }
}