import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import Screen from '../../../../global/components/Screen'
import Title from '../../../../global/components/Title'
import Button from '../../../../global/components/Button'
import useForm from '../../../../hooks/useForm'
import { AuthContext } from '../../../../context/AuthContext'

const LoginScreen = () => {

    const {login} = useContext(AuthContext);

    const [error, setError] = useState({
        error: '',
    })

    const { values, onChange, onReset } = useForm({
        email: '',
        password: '',
        show_password: false
    })

    const handleLogin = () => {
        setError({
            error: '',
        })
        if (values.email === '' || values.password === '') {
            setError({ error: 'Ingrese todos los campos.' })
        } else {
            login(values);
            onReset();
        }
    }

    return (
        <Screen
            styleScreen={{
                backgroundColor: '#ebebeb'
            }}
        >
            <View
                style={{
                    height: 400,
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    elevation: 3,
                    padding: 20,
                    width: 300,
                    maxWidth: 400,
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                <Title
                    text={'Iniciar Sesion'}
                    styleText={{
                        fontSize: 25,
                        color: '#0059ec'
                    }}
                />
                <View
                    style={{
                        width: 230,
                    }}
                >
                    {/* Email */}
                    <View
                        style={{
                            marginVertical: 3,
                            borderWidth: 1.5,
                            borderRadius: 100,
                            borderColor: '#0066fc'
                        }}
                    >
                        <TextInput
                            value={values.email}
                            onChangeText={(v) => onChange('email', v)}
                            placeholder='Correo'
                            keyboardType={'email-address'}
                            selectionColor={'#0066fc'}
                            style={{
                                paddingLeft: 20
                            }}
                        />
                    </View>
                    {/* Password */}
                    <View
                        style={{
                            marginVertical: 3,
                            borderWidth: 1.5,
                            borderRadius: 100,
                            borderColor: '#0066fc',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <TextInput
                            value={values.password}
                            onChangeText={(v) => onChange('password', v)}
                            placeholder='Contraseña'
                            selectionColor={'#0066fc'}
                            secureTextEntry={!values.show_password}
                            style={{
                                paddingLeft: 20
                            }}

                        />
                        <TouchableOpacity
                            onPress={() => {
                                onChange('show_password', !values.show_password)
                            }}
                            style={{
                                height: 40,
                                width: 40,
                                backgroundColor: '#cecece',
                                marginRight: 5,
                                borderRadius: 100,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                        </TouchableOpacity>
                    </View>
                    {/* Error */}
                    <View
                        style={{
                            alignItems: 'center',
                        }}
                    >
                        {
                            error.error !== '' &&
                            <Text
                                style={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    fontSize: 13,
                                }}
                            >
                                {
                                    error.error
                                }
                            </Text>
                        }
                    </View>
                </View>
                <Button
                    action={handleLogin}
                    text={'Ingresar'}
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
        </Screen>
    )
}

export default LoginScreen