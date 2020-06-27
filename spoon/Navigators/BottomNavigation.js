import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';

const Tab = createBottomTabNavigator();

const TabNavigagion = () => {
  return (
    null 
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 10,
    paddingBottom: 5,
  },
});

const mapStateToProps = ({themeReducer}) => {
  return {
    themeReducer
  }
}

export default connect(mapStateToProps)(TabNavigagion);
