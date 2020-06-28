import { LoginTypes } from './../Redux/Login'
import {RestaurantsTypes} from './../Redux/Restaurants'
import Client from './../Api/Client'
import { loginRequest } from './../Sagas/LoginSagas'
import { restaurantsRequest } from './../Sagas/RestaurantsSagas'
import { all, takeLatest } from 'redux-saga/effects'

const client = Client.createClient();


export default function* root() {
    yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest, client),
        takeLatest(RestaurantsTypes.RESTAURANTS_REQUEST, restaurantsRequest, client)
    ])
}
