import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Screen from '../../../../global/components/Screen'
import Title from '../../../../global/components/Title'
import Button from '../../../../global/components/Button'
import { AuthContext } from '../../../../context/AuthContext'

const HomeScreen = () => {

  const { logOut, users, user } = useContext(AuthContext);

  return (
    <Screen
      styleScreen={{
        backgroundColor: '#fff',
        paddingTop: 20,
      }}
    >
      <Title
        text={`¡ Hola ${user.name} !`}
      />
      <ScrollView>
        {
          users.map(u => {
            return (
              <View
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  marginVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  paddingVertical: 5
                }}
                key={u.email}
              >
                <Text>
                  {u.name}
                </Text>
                <Text>
                  {u.email}
                </Text>
              </View>
            )
          })
        }
      </ScrollView>
      <Button
        action={logOut}
        styleButton={{
          position: 'absolute',
          bottom: 10,
          backgroundColor: '#000',
          height: 45
        }}
        text={'Cerrar Sesion'}
      />
    </Screen>
  )
}

export default HomeScreen