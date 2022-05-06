import React from 'react'
import { View, Text, Image } from 'react-native'

import UserContext from '../context/UserContext';
import NetInfo from "@react-native-community/netinfo";

import { style } from '../styles/stylesGlobal';

type Props = {
    navigation: {navigate:any}

};

const Disconneted = (props: Props) => {
    const {user} =  React.useContext(UserContext)
    React.useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state)=>{
          const offline = !(state.isConnected && state.isInternetReachable);
          if(!offline && user){
            props.navigation.navigate('Menu');
          }else if(!offline && !user){
            props.navigation.navigate('Login');
          }
        });
        return () => removeNetInfoSubscription();
    }, []);

    return (
        <View style={[style.main_background, style.main_login_screen]} >
            <Image
                source={require('../styles/imgs/1561405.png')}
                style={style.disconnect_img}
                resizeMode="contain"
            />
            <View style={style.disconnect_box} >
                <Text  style={style.disconnect_title} >Disconneted</Text>
                <Text  style={style.disconnect_text_body} >
                    Por favor, revise 
                    su conexion a internet.
                </Text>
            </View>
        </View>
    )
}

export default Disconneted