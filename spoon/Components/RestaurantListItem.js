import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../Utils/ColorPalette'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default RestaurantListItem = ({ name, open, types }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.types}>
                        {
                            types.length < 1 ? "..." :
                                types.map((val, idx) => val.name).reduce((pre, curr) => {
                                    return (
                                        pre + "," + curr
                                    )
                                })}
                    </Text>
                </View>

                <Icon
                    name={open ? 'event-available' : 'event-busy'}
                    size={30}
                    color={open ? Colors.green[2] : Colors.gray[2]}
                    style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 7,
        marginVertical: 3,
        borderRadius: 3,
        backgroundColor: Colors.white[3]
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: "600",
        fontSize: 13,
        marginBottom: 5
    },
    types: {
        fontWeight: "400",
        fontSize: 11,
        fontStyle: 'italic'
    },
    icon: {
       alignSelf: 'flex-end'
    }
});