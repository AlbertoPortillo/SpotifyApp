import { View, Text, Image, TouchableOpacity } from 'react-native'
import { style } from '../../styles/stylesGlobal';
import React from 'react'
type Props={
  navigation: {navigate:any, dispatch: any, goBack: any};
  title: string;
  goBack: boolean;
}
export default function Header({navigation, title, goBack=false}:Props) { 



  return (
    <View style={style.header_main}>
      { goBack &&
        <TouchableOpacity onPress={navigation.goBack} style={style.header_touchableOpacity}>
          <Image  
              source={require('../../styles/imgs/5d74eedd0c265c2934c23a6fbf725e7d.png')}
              style={style.header_arrowImg}
              resizeMode='contain'
          />
        </TouchableOpacity>
      }
      <Text  style={style.header_textTitle}>{title}</Text>
    </View>
  )
}