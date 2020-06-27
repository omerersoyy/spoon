import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import BottomNavigation from './BottomNavigation';
import MainScreen from '../Screens/MainScreen';

const Stack = createStackNavigator();

export default LoginNavigation = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);
  
  if (loggedIn) {
    return (
      <MainScreen />
    );
  } else {
    return (
      <Stack.Navigator headerMode={'none'} initialRouteName={'Login'}>
        <Stack.Screen name='Login' component={LoginScreen} initialParams={{login: setLoggedIn}} />
      </Stack.Navigator>
    );
  }
};
