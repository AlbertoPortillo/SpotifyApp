import React from 'react'
import { Pressable, Text } from 'react-native'

type Props = {
    title: string;
    onPress: () => void;
    style: {button_fondo: object, button_texto: object, button_fondo_color: object};
    active: boolean;
}

export default function Button({title = "", onPress, style, active}: Props) {
  return (
    <Pressable disabled={active} style={[style.button_fondo, style.button_fondo_color]} onPress={onPress}>
      <Text style={style.button_texto} >{title}</Text>
    </Pressable>
  )
}