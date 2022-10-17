import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const globalStyles = StyleSheet.create({
    //Screen
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    //Title
    title: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    //Button
    button: {
        width: 200,
        height: 40,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 5,
        elevation: 5
    },
    buttonText: {
        fontSize: 14,
        color: '#ffffff',
    }
})