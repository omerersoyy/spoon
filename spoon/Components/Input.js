import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default Input = (props) => {

    let { onChangeText, isHidden, icon, style, color } = props

    return (
        <View style={[styles.container, {borderBottomColor: color}, {...style} ]}>
            <Icon
                name={icon}
                size={26}
                color={color}
                style={styles.icon} />
            <TextInput
                onChangeText={onChangeText}
                style={[styles.text, {color: color}]}
                secureTextEntry={isHidden || false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 11,
        marginHorizontal: 17,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        flex: 1,
        marginTop: 3,
        fontSize: 12,
        letterSpacing: 1,
        fontWeight: "600"
    },

    icon: {
        marginRight: 15
    }
});