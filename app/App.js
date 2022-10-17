import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './navigation/Navigation'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
    return (
        <AuthContextProvider>
            <Navigation />
        </AuthContextProvider>
    )
}

export default App