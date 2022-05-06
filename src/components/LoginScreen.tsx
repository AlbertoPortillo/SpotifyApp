import React from 'react'
import { style } from '../styles/stylesGlobal'
import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import UserContext from '../context/UserContext'
import Button from './items/Button'
import {  WebViewNavigation } from 'react-native-webview';
import { Api } from '../core/Api/Conexiones'
import WebViewToken from './WebViewToken'
import NetInfo from "@react-native-community/netinfo";

type Props = {
    navigation: {navigate:any, reset: any}
}

export default function LoginScreen({navigation}:Props) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [auth, setAuth] = React.useState(false);
    const {setUsuario} = React.useContext(UserContext)

    var __style = {
        button:{button_fondo: style.main_login_button_fondo, button_texto: style.main_login_button_texto,  button_fondo_color: style.button_background_white },
        input: {  title: style.main_login_inputs_title, textInput: style.main_login_inputs, boxTextInput: style.main_login_inputs_box}
    };
    
    function clickButton(){
        setAuth(!auth)
        console.log('Boton presionado', username, password, Date.now())
    }

    React.useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state)=>{
          const offline = !(state.isConnected && state.isInternetReachable);
          if(offline){
            navigation.navigate('Disconnect');
          }
        });
        
        return () => removeNetInfoSubscription();
    }, []);

    const onLinkChanged = (e: WebViewNavigation): void => {
        var success = e.url.indexOf('#access_token=')
        console.log('token', success, e)
        if(success > 0){
            var code = e.url.indexOf('token=')
            var codefin = e.url.indexOf('&')
            var code_full = e.url.slice(code+6, codefin)
            setAuth(!auth)
            setUsuario(code_full)
            Api.defaults.headers.common['Authorization'] = 'Bearer '+code_full;
            navigation.reset({
                index: 0,
                routes: [{ name: 'Menu' }],
            })
        }
     
    }
    return (
        <>
        {
            !auth
                ?<View style={[style.main_background, style.main_login_screen]} >
                    <Text style={style.main_login_text} >Login</Text>
                    <Button active={false} title='Iniciar Sesion' onPress={() => clickButton()} style={__style.button} />
                </View>
                :<WebViewToken onChangeLink={onLinkChanged} />   
        }   
        </>
    )
}