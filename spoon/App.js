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

const store = createStore()

const Root = () => (
  <NavigationContainer>
    <Provider store={store}>
      <LoginNavigation />
    </Provider>
  </NavigationContainer>
);

export default Root;
