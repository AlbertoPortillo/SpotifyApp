import { View, Text } from 'react-native'
import React from 'react';

import { style } from '../styles/stylesGlobal'

import UserContext from '../context/UserContext';
import CardMenu from './items/CardMenu';
import Header from './items/Header';
type Props = {
    navigation: {navigate:any, dispatch: any, goBack: any}
}

export default function MenuPrincipal({navigation}:Props) {
    const user =  React.useContext(UserContext)

    var __style ={
        
    }

    return (
        <View style={[style.main_background, style.main_screen]} >
            <Header navigation={navigation} title='Menu Principal'/>      
            <View style={{width: '100%', paddingHorizontal: '5%', flexWrap: 'wrap', flexDirection: 'row', height: '60%', paddingTop: '10%'}}>
                <CardMenu title='Albumes' navigation='asadad' />
                <CardMenu title='Canciones' navigation='asadad' />
                <CardMenu title='Artistas' navigation='asadad' />
            </View>
        </View>
    )
}