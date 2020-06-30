import { LoginTypes } from './../Redux/Login'
import {RestaurantsTypes} from './../Redux/Restaurants'
import {UserTypes, userDetailRequestError} from './../Redux/User'
import Client from './../Api/Client'
import { loginRequest } from './../Sagas/LoginSagas'
import { restaurantsRequest } from './../Sagas/RestaurantsSagas'
import {usersPastOrdersRequest, userDetailRequest} from './../Sagas/UserSagas'
import { all, takeLatest } from 'redux-saga/effects'

const client = Client.createClient();


export default function* root() {
    yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest, client),
        takeLatest(RestaurantsTypes.RESTAURANTS_REQUEST, restaurantsRequest, client),
        takeLatest(UserTypes.USERS_PAST_ORDERS_REQUEST, usersPastOrdersRequest, client), 
        takeLatest(UserTypes.USER_DETAIL_REQUEST, userDetailRequest, client)
    ])
}
