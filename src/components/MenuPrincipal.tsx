import { View, Text } from 'react-native'
import React from 'react';

import { style } from '../styles/stylesGlobal'

import UserContext from '../context/UserContext';
import CardMenu from './items/CardMenu';
import Header from './items/Header';
type Props = {
    navigation: {navigate:any, goBack: any}
}

export default function MenuPrincipal({navigation}:Props) {
    const user =  React.useContext(UserContext)

    return (
        <View style={[style.main_background, style.main_screen]} >
            <Header navigation={navigation} title='Menu Principal'/>      
            <View style={{width: '100%', paddingHorizontal: '5%', flexWrap: 'wrap', flexDirection: 'row', height: '60%', paddingTop: '10%'}}>
                <CardMenu title='Albumes' navigation={() => navigation.navigate('Albumes')} />
                <CardMenu title='Artistas' navigation={() => navigation.navigate('Artistas')} />
            </View>
        </View>
    )
}