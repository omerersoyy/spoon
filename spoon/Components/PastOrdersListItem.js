import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../Utils/ColorPalette'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default PastOrdersListItem = ({ restaurant, order, userCanReOrder }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <View>
                    <Text style={styles.restaurant}>{restaurant.name}</Text>
                    <Text style={styles.order}>
                        {
                            order.length < 1 ? "..." :
                                order.map((val, idx) => val.name).reduce((pre, curr) => {
                                    return (
                                        pre + "," + curr
                                    )
                                })}
                    </Text>
                </View>

                {userCanReOrder &&
                    <TouchableOpacity>
                        <Icon
                            name={'replay'}
                            size={30}
                            color={Colors.green[2]}
                            style={styles.icon} />
                    </TouchableOpacity>
                }
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
    restaurant: {
        fontWeight: "600",
        fontSize: 13,
        marginBottom: 5
    },
    order: {
        fontWeight: "400",
        fontSize: 11,
        fontStyle: 'italic'
    },
    icon: {
        alignSelf: 'flex-end'
    }
});