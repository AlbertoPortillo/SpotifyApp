import React from 'react'
import { style } from '../styles/stylesGlobal'
import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

import Input from './items/Input'
import Button from './items/Button'

export default function LoginScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    var __style = {
        button:{button_fondo: style.main_login_button_fondo, button_texto: style.main_login_button_texto,  button_fondo_color: username && password ?style.button_background_white :style.button_background_gray },
        input: {  title: style.main_login_inputs_title, textInput: style.main_login_inputs, boxTextInput: style.main_login_inputs_box}
    };
    
    function clickButton(){
        console.log('Boton presionado', username, password, Date.now())
    }

    const onChangeUsername = (e: NativeSyntheticEvent<TextInputChangeEventData>): void =>{
        const value = e.nativeEvent.text;
        setUsername(value);
    }

    const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void =>{
        const value = e.nativeEvent.text;
        setPassword(value);
    }

    return (
        <View style={[style.main_background, style.main_login_screen]} >
            <Text style={style.main_login_text} >Login</Text>
            <Input title='Correo Electronico o nombre de usuario' style={__style.input} placeholder='Usuario' onText={onChangeUsername} value={username} />
            <Input title='Contraseña' style={__style.input} placeholder='Contraseña' onText={onChangePassword} value={password} />
            <Button active={username && password ?false :true} title='Iniciar Sesion' onPress={() => clickButton()} style={__style.button} />
        </View>
    )
}