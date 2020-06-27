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


LoginScreen = ({ dispatch, fetching, token, message, route }) => {

  const [busy, setBusy] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {login} = route.params

  useEffect(() => {

    setBusy(fetching)

    if(message) {
      Alert.alert(
        "Error!",
        message
      )
    }

    if(token) {
      login(true)
    }

  }, [token, fetching, message])


  const handlePressLogin = () => {

    if(!email || !password) {
      Alert.alert(
        "Warning!",
        "Please fill in all the required fields!"
      )
      return;
    }

    const query = loginWithEmail(email, password)

    dispatch({ type: 'LOGIN_REQUEST', query })
  }


  const handleChangeText = (field, text) => {
    if (field === "email") {
      setEmail(text)
    } else if (field === "password") {
      setPassword(text)
    }
  }

  

  return (
    <View style={styles.container}>

      {busy && <Busy />}

      <Input style={styles.input} icon={'mail-outline'} color={Colors.white[3]} onChangeText={(text) => handleChangeText("email", text)} />
      <Input style={styles.input} icon={'lock-outline'} color={Colors.white[3]} isHidden={true} onChangeText={(text) => handleChangeText("password", text)} />

      <Button text={'Log In'} textColor={Colors.gray[3]} colorScheme={Colors.white} onPress={() => handlePressLogin()} />

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
    token: state.login.token,
    fetching: state.login.fetching,
    message: state.login.message
  }
}

export default connect(mapStateToProps)(LoginScreen)