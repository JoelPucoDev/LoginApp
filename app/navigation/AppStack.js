import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/app/home/containers/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = () => {
    
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default AppStack