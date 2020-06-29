import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import Colors from '../Utils/ColorPalette'
import MainNavigation from '../Navigators/MainNavigation'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={[
                styles.tabBarLabel,
                {color: focused ?  Colors.gray[3] : Colors.white[3]},
              ]}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Restaurants') {
            iconName = 'restaurant';
          } else if (route.name === 'PastOrders') {
            iconName = 'av-timer';
          }

          return (
            <Icon
              name={iconName}
              size={22}
              color={focused ? Colors.gray[3] : Colors.white[1]}
              style={{paddingTop: 5}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: Colors.white[1],
        style: {
          backgroundColor: Colors.red[2],
        }
      }}>
      <Tab.Screen name={'Restaurants'} component={MainNavigation} />
      <Tab.Screen name={'PastOrders'} component={MainNavigation} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 10,
    paddingBottom: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(TabNavigation);
