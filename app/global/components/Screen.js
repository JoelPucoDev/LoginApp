import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

const Screen = ({
    styleScreen,
    children
}) => {
    return (
        <View
            style={[globalStyles.screen, { ...styleScreen}]}
        >
            {
                children
            }
        </View>
    )
}


export default Screen