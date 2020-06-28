
import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    restaurantsRequest: ['query'],
})

const initialState = Immutable({
    query: "",
    fetching: false
})

export const RestaurantsTypes = Types
export default Creators

export const restaurantsRequest = (state, { query }) =>  {
    return state.merge({ fetching: true, query })
}


export const reducer = createReducer(initialState, {
    [Types.RESTAURANTS_REQUEST]: restaurantsRequest
})