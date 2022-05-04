import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
type Props={
  navigation: {navigate:any, dispatch: any};
  title: string;
}
export default function Header({navigation, title}:Props) {
  return (
    <View style={{ flexDirection: 'row', width: '100%', height: '7%', justifyContent: 'center', alignItems:'center', paddingVertical: '1%'}}>
        <Image  
            source={require('../../styles/imgs/5d74eedd0c265c2934c23a6fbf725e7d.png')}
            style={{tintColor:'white', width: '10%', height: '70%', transform: [{ rotateZ: "180deg" }], marginVertical: '15%', alignSelf: 'center'}}
            resizeMode='contain'
        />
      <Text  style={{ color: 'white', width: '90%', textAlign: 'center', fontSize: 25 }}>{title}</Text>
    </View>
  )
}