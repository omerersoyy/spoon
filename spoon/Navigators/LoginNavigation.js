import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen'
import MainNavigation from '../Navigators/MainNavigation'
import BottomNavigation from '../Navigators/BottomNavigation'

const Stack = createStackNavigator();

export default LoginNavigation = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);
  
  if (loggedIn) {
    return (
      <BottomNavigation />
    );
  } else {
    return (
      <Stack.Navigator headerMode={'none'} initialRouteName={'Login'}>
        <Stack.Screen name='Login' component={LoginScreen} initialParams={{login: setLoggedIn}} />
      </Stack.Navigator>
    );
  }
};
