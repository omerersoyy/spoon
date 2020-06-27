
import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    loginRequest: ['email', 'password'],
    loginRequestSuccess: ['token'],
    loginRequestError: ['error'],
    loginRequestFailed: ['message']
})

const initialState = Immutable({
    email: "",
    password: "",
    token: "",
    error: "",
    message: "",
    fetching: false
})

export const LoginTypes = Types
export default Creators

export const loginRequest = (state, { query }) =>  {
    return state.merge({ fetching: true, query, message: initialState.message })
}

export const loginRequestSuccess = (state, {token}) => {
    return state.merge({token, error: initialState.error, message: initialState.message, fetching: initialState.fetching})
}

export const loginRequestError = (state, {error}) => {
    return state.merge({error, fetching: initialState.fetching, message: initialState.message})
}

export const loginRequestFailed = (state, {message}) => {
    return state.merge({message, fetching: initialState.fetching, message})
}

export const reducer = createReducer(initialState, {
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_REQUEST_SUCCESS]: loginRequestSuccess,
    [Types.LOGIN_REQUEST_ERROR]: loginRequestError,
    [Types.LOGIN_REQUEST_FAILED]: loginRequestFailed
})