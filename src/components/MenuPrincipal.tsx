import { View, Text } from 'react-native'
import React from 'react';

import { style } from '../styles/stylesGlobal'

import UserContext from '../context/UserContext';
import Header from './items/Header';

type Props = {
    navigation: {navigate:any, dispatch: any}
}

export default function MenuPrincipal({navigation}:Props) {
    const user =  React.useContext(UserContext)

    var __style ={
        
    }

    return (
        <View style={[style.main_background, style.main_screen]} >
            <Header navigation={navigation} title='Menu Principal'/>      
            <Text>MenuPrincipal</Text>
        </View>
    )
}