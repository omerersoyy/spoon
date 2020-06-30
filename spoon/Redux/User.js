
import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    userDetailRequest: ['query'],
    userDetailRequestSuccess: ['user'],
    userDetailRequestError: ['error'],
    usersPastOrdersRequest: ['query', 'token'],
    usersPastOrdersRequestSuccess: ['list'],
    usersPastOrdersRequestError: ['error']
})

const initialState = Immutable({
    query: "",
    fetching: false,
    user: null,
    list: [],
    error: ""
})

export const UserTypes = Types
export default Creators

export const userDetailRequest = (state, { query }) =>  {
    return state.merge({ fetching: true, query })
}

export const userDetailRequestSuccess = (state, { user }) => {
    return state.merge({fetching: initialState.fetching, user})
}

export const userDetailRequestError = (state, { error }) => {
    return state.merge({fetching: initialState.fetching, error})
}

export const usersPastOrdersRequest = (state, { query, token }) => {
    return state.merge({fetching: true, query})
}

export const usersPastOrdersRequestSuccess = (state, { list }) => {
    return state.merge({fetching: initialState.fetching, list})
}

export const usersPastOrdersRequestError = (state, { error }) => {
    return state.merge({fetching: initialState.fetching, error})
}



export const reducer = createReducer(initialState, {
    [Types.USER_DETAIL_REQUEST]: userDetailRequest,
    [Types.USER_DETAIL_REQUEST_SUCCESS]: userDetailRequestSuccess,
    [Types.USER_DETAIL_REQUEST_ERROR]: userDetailRequestError,
    [Types.USERS_PAST_ORDERS_REQUEST]: usersPastOrdersRequest,
    [Types.USERS_PAST_ORDERS_REQUEST_SUCCESS]: usersPastOrdersRequestSuccess,
    [Types.USERS_PAST_ORDERS_REQUEST_ERROR]: usersPastOrdersRequestError,
})