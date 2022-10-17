import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from '../context/AuthContext'

const Navigation = () => {

    const { auth } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {
                auth ?
                    <AppStack />
                    :
                    <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Navigation