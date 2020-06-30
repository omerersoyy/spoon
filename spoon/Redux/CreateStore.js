import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

export default (rootReducer, rootSaga) => {

  const middleware = []
  const sagaMonitor =  null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)


  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login'] 
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, applyMiddleware(...middleware))
  const persistor = persistStore(store)

  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    persistor,
    sagasManager,
    sagaMiddleware
  }
}