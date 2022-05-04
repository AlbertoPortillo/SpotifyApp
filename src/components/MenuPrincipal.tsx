import { View, Text } from 'react-native'
import React from 'react'
import UserContext from '../context/UserContext';

export default function MenuPrincipal() {
    const user =  React.useContext(UserContext)

    console.log(user)

    return (
        <View>
        <Text>MenuPrincipal</Text>
        </View>
    )
}