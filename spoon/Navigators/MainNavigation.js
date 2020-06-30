import React from 'react';
import {Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Restaurants from '../Screens/Restaurants'
import PastOrders from '../Screens/PastOrders'
import Profile from '../Screens/Profile'

const Stack = createStackNavigator();
const Screens = {
  "Past Orders": {
    component: PastOrders
  },
  "Restaurants" : {
    component: Restaurants
  },
  "Profile": {
    component: Profile
  }
}

const MainNavigation = ({route}) => (
  <Stack.Navigator headerMode={'screen'} initialRouteName={'Restaurants'} >
    <Stack.Screen name={route.name} component={Screens[route.name].component} initialParams={route.params}/>
  </Stack.Navigator>
);

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(MainNavigation);