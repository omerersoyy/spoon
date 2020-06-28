import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert
} from 'react-native';

import { connect } from 'react-redux';
import Colors from '../Utils/ColorPalette'
import { restaurants } from '../Api/QueryProvider'


Restaurants = ({dispatch}) => {

  const query = restaurants(0, 10)

  dispatch({type: "RESTAURANTS_REQUEST", query})

  return (
    <View style={styles.container}>

     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red[1]
  },
  input: {
    marginVertical: 17
  },
  line: {
    height: 1,
    width: '100%',
    zIndex: -99999,
  }
});

const mapStateToProps = (state) => {
  return {
      state
  }
}

export default connect(mapStateToProps)(Restaurants)