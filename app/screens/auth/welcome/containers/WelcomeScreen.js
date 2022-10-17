import { View, Text } from 'react-native'
import React from 'react'

import Screen from '../../../../global/components/Screen'
import Title from '../../../../global/components/Title'
import Button from '../../../../global/components/Button'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    }

    const handleRegister = () => {
        navigation.navigate('RegisterScreen');
    }

    return (
        <Screen
            styleScreen={{
                backgroundColor: '#fff'
            }}
        >
            <View
                style={{
                    height: 400,
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                <Title
                    styleText={{
                        fontSize: 25,
                        color: '#0059ec'
                    }}
                    text={'¡Bienvenido!'}
                />
                <View>
                    <Button
                        action={handleLogin}
                        text={'Login'}
                        styleText={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}
                        styleButton={{
                            marginVertical: 15,
                            height: 50,
                            backgroundColor: '#0066fc'
                        }}
                    />
                    <Button
                        action={handleRegister}
                        text={'Registro'}
                        styleText={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}
                        styleButton={{
                            marginVertical: 15,
                            height: 50,
                            backgroundColor: '#0066fc'
                        }}
                    />
                </View>
            </View>
        </Screen>
    )
}

export default WelcomeScreen