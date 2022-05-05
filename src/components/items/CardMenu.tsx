import React from 'react';
import {  Text, TouchableOpacity, View} from 'react-native';

import { style } from '../../styles/stylesGlobal';

type Props = {
    navigation: any;
    title: string;
} 
export default function CardMenu({title, navigation}:Props) {
  return (
    <TouchableOpacity style={[style.card_touchableOpacity, {backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,}]}>
      <View  style={style.card_justifyContent} >
        <Text style={style.card_text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}