import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import Colors from '../Utils/ColorPalette'

export default Busy = () => {
    return (
        <View style={{
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
            backgroundColor: Colors.white[3]
        }}>
            <ActivityIndicator
                size={"large"}
                color={Colors.gray[3]}
                animating={true} />
        </View>
    )
}