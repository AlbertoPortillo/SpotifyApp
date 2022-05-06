import React from 'react';
import {  Text, Pressable, View} from 'react-native';

import { style } from '../../styles/stylesGlobal';

type Props = {
    navigation: any;
    title: string;
} 
export default function CardMenu({title, navigation}:Props) {
  return (
    <Pressable onPress={navigation} style={[style.card_touchableOpacity, {backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,}]}>
      <View  style={style.card_justifyContent} >
        <Text style={style.card_text}>{title}</Text>
      </View>
    </Pressable>
  )
}