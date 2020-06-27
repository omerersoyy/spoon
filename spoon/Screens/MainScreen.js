import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert
} from 'react-native';

import Input from '../Components/Input';
import Button from '../Components/Button'
import Busy from '../Components/Busy'
import { connect } from 'react-redux';
import Colors from '../Utils/ColorPalette'
import { loginWithEmail } from '../Api/QueryProvider'


MainScreen = () => {



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

export default connect(mapStateToProps)(MainScreen)