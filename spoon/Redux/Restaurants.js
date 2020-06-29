
import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    restaurantsRequest: ['query'],
    restaurantsRequestSuccess: ['list']
})

const initialState = Immutable({
    query: "",
    fetching: false,
    list: []
})

export const RestaurantsTypes = Types
export default Creators

export const restaurantsRequest = (state, { query }) =>  {
    return state.merge({ fetching: true, query })
}

export const restaurantsRequestSuccess = (state, { list }) => {
    return state.merge({fetching: initialState.fetching, list})
}


export const reducer = createReducer(initialState, {
    [Types.RESTAURANTS_REQUEST]: restaurantsRequest,
    [Types.RESTAURANTS_REQUEST_SUCCESS]: restaurantsRequestSuccess
})