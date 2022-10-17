import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

const Title = ({
    text,
    styleText,
}) => {
    return (
        <Text style={[globalStyles.title, { ...styleText }]}>{text}</Text>
    )
}

export default Title