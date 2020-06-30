import { combineReducers } from 'redux'
import rootSaga from '../Sagas/'
import configureStore from './CreateStore'

export const reducers = combineReducers({
  login: require('./Login').reducer,
  restaurants: require('./Restaurants').reducer,
  user: require('./User').reducer
})

export default () => {
  let finalReducers = reducers

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}