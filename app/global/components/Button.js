import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

const Button = ({
    action,
    text,
    styleButton,
    styleText,
}) => {
    return (
        <TouchableOpacity
            onPress={action}
            style={[globalStyles.button, { ...styleButton }]}
        >
            <Text
                style={[globalStyles.buttonText, { ...styleText }]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button