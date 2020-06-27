import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default Button = (props) => {

    let { text, onPress, colorScheme, textColor } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: colorScheme[2], borderColor: colorScheme[3]}]}>
                <Text style={[styles.text, {color: textColor}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 17,
        borderRadius: 3
    },
    button: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 12,
        height: 15,
        letterSpacing: 1.2,
        fontWeight: "600",
        color: '#324c94'
    }
});