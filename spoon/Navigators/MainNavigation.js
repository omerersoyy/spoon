import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Restaurants from '../Screens/Restaurants'
import PastOrders from '../Screens/PastOrders'

const Stack = createStackNavigator();

const MainNavigation = ({route}) => (
  <Stack.Navigator headerMode={'screen'} initialRouteName={'Restaurants'}  >
    <Stack.Screen name={route.name} component={route.name === "Restaurants" ? Restaurants : PastOrders} />
  </Stack.Navigator>
);

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(MainNavigation);