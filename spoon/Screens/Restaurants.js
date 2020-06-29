import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import { connect } from 'react-redux';
import Colors from '../Utils/ColorPalette'
import { restaurants } from '../Api/QueryProvider'
import RestaurantListItem from '../Components/RestaurantListItem'
import Busy from '../Components/Busy'


Restaurants = ({ dispatch, list, fetching }) => {

  const [index, setIndex] = useState(0)
  const [limit, setLimit] = useState(15)
  const [restaurantsList, setRestaurantsList] = useState([])
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const query = restaurants(index, limit)

    dispatch({ type: "RESTAURANTS_REQUEST", query })
  }, [])

  useEffect(() => {
    const query = restaurants(index, limit)

    dispatch({ type: "RESTAURANTS_REQUEST", query })

  }, [index])

  useEffect(() => {
    setBusy(fetching)
  }, [fetching])

  useEffect(() => {
    setRestaurantsList(restaurantsList.concat(list))
    console.log(list)
  }, [list])

  const renderRow = ({name, types, open}) => {

    return (
      <RestaurantListItem  name={name} types={types} open={open} />
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
          data={restaurantsList}
          renderItem={({item}) => renderRow(item)}
          keyExtractor={item => item.name}
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
    list: state.restaurants.list,
    fetching: state.restaurants.fetching
  }
}

export default connect(mapStateToProps)(Restaurants)