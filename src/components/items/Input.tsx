import React from 'react'
import { View, TextInput, Text, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

type Props ={
    title: string;
    onText: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    placeholder: string;
    style: { title?: object, textInput: object, boxTextInput: object };
    value: string;
}

export default function Input({ placeholder, title, style, onText }:Props) {
  return (
    <View style={style.boxTextInput} >
        {title && <Text style={style.title} >{title}</Text>}
        <TextInput 
            placeholder={placeholder}
            onChange={onText}
            style={style.textInput}
        />
    </View>
  )
}