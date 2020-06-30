/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'
import createStore from './Redux'
import { NavigationContainer } from '@react-navigation/native'
import LoginNavigation from './Navigators/LoginNavigation'
import { PersistGate } from 'redux-persist/integration/react'


const {store, persistor} = createStore()

const Root = () => (
  <NavigationContainer>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoginNavigation />
      </PersistGate>
    </Provider>
  </NavigationContainer>
);

export default Root;
