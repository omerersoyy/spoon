import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import Busy from '../Components/Busy'
import { connect } from 'react-redux';
import Colors from '../Utils/ColorPalette'
import { user } from '../Api/QueryProvider'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../Components/Button'


Profile = ({ dispatch, token, profile, fetching, route }) => {

  const [busy, setBusy] = useState(false)

  const {login} = route.params

  useEffect(() => {
    const query = user()

    dispatch({ type: 'USER_DETAIL_REQUEST', query, token })
  }, [])

  useEffect(() => {
    setBusy(fetching)
  }, [fetching])

  const handlePressLogin = () => {
    dispatch({type: 'LOGOUT'})
    setBusy(true)
    setTimeout(() => {
      setBusy(false)
      login(false)
    }, 1000)
  }

  if (profile == null) return null

  const { firstName, lastName, email, profilePicture, mobileNumber, addresses } = profile

  return (
    <View style={styles.container}>
      {busy && <Busy />}
      <View style={styles.header}>
        <View style={styles.profilePicture}>
          {profilePicture ?

            <Image source={profilePicture.url} />
            :
            <Icon
              name={'person-outline'}
              size={50}
              color={Colors.white[1]}
              style={{ paddingTop: 5 }} />
          }
        </View>
        <Text style={styles.name}>{firstName + " " + lastName}</Text>
      </View>
      <View style={styles.otherInfo}>
        <View style={styles.row}>
          <Text>{'Email'}</Text>
          <Text>{email}</Text>
        </View>
      </View>

      <View style={styles.otherInfo}>
        <View style={styles.row}>
          <Text>{'Mobile Number'}</Text>
          <Text>{mobileNumber}</Text>
        </View>
      </View>


      {addresses.map((val, idx) => {
        return (
          <View style={styles.otherInfo}>
            <View style={styles.row}>
              <View style={styles.row}>
                <Text>{`Address${idx + 1}`}</Text>
                <Text>{val.addressLine1}</Text>
              </View>
            </View>
          </View>
        )
      })}

      <Button text={'Log Out'} textColor={Colors.white[3]} colorScheme={Colors.red} onPress={() => handlePressLogin()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 7,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white[3],
  },
  header: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: Colors.red[3],
    alignItems: 'center',
    justifyContent: 'center'
  },
  profilePicture: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    borderColor: Colors.white[3],
    borderWidth: 3,
    backgroundColor: Colors.gray[1]
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    color: Colors.white[3],
    fontSize: 17,
    fontWeight: "500",
    marginTop: 9
  },
  otherInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 9,
    paddingHorizontal: 19
  }
})

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
    fetching: state.user.fetching,
    profile: state.user.user
  }
}

export default connect(mapStateToProps)(Profile)