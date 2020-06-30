import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import { connect } from 'react-redux';
import Colors from '../Utils/ColorPalette'
import { pastOrders, restaurants } from '../Api/QueryProvider'
import PastOrdersListItem from '../Components/PastOrdersListItem'
import Busy from '../Components/Busy'


PastOrders = ({ dispatch, list, fetching }) => {

  const [index, setIndex] = useState(0)
  const [limit, setLimit] = useState(15)
  const [pastOrdersList, setPastOrdersList] = useState([])
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const query = pastOrders(index, limit)

    dispatch({ type: "USERS_PAST_ORDERS_REQUEST", query })
  }, [])

  useEffect(() => {
    const query = pastOrders(index, limit)

    dispatch({ type: "USERS_PAST_ORDERS_REQUEST", query })

  }, [index])

  useEffect(() => {
    setBusy(fetching)
  }, [fetching])

  useEffect(() => {
    setPastOrdersList(pastOrdersList.concat(list))
  }, [list])

  const renderRow = ({restaurant, items, userCanReOrder}) => {
    return (
      <PastOrdersListItem restaurant={restaurant} order={items} userCanReOrder={userCanReOrder} />
    )
  }

  const handleEndReached = () => {
    setIndex(index + limit)
  }

  return (
    <View style={styles.container}>

      {busy && <Busy />}

      <FlatList
          style={styles.list}
          data={pastOrdersList}
          renderItem={({item}) => renderRow(item)}
          keyExtractor={item => item.uid}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.9}
          initialNumToRender={15}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.red[2]
  },
  list: {
    width: '100%',
    paddingHorizontal: 9
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
    list: state.user.list,
    fetching: state.user.fetching
  }
}

export default connect(mapStateToProps)(PastOrders)