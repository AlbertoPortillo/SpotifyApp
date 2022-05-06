import React from 'react';
import { NativeSyntheticEvent, Pressable, Text, TextInputChangeEventData, View, FlatList } from 'react-native';
import {getSampleAlbumData} from '../core/presentation/AlbumPresenter';
import { getSampleArtistData } from '../core/presentation/ArtistaPresenter';
import { style } from '../styles/stylesGlobal';

import NetInfo from "@react-native-community/netinfo";
import CardArtist from './items/CardArtist';
import Cardalbum from './items/Cardalbum';
import Header from './items/Header';
import Input from './items/Input';

type Props = {
    navigation: {navigate:any, goBack: any, push: any, reset: any};
    route: {name: string, params: any}
}

export default function ListView({navigation, route}:Props) {
    const [find, setFind]= React.useState('');
    const [list, setList] = React.useState([]);

    const handleChangeText = (e: NativeSyntheticEvent<TextInputChangeEventData>) =>{
        setFind(e.nativeEvent.text);
    }

    const getSampleAlbumDataHandler = async () => {
        if(route.name == "Artistas"){ 
            if(find){
                const artist = await getSampleArtistData(find);
                setList(artist)
                console.log(artist)
            }
        }else if(route.name == "Albumes"){
            if(find){
                const album = await getSampleAlbumData(find);
                setList(album)
            }
        }
    };

    React.useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state)=>{
          const offline = !(state.isConnected && state.isInternetReachable);
          if(offline){
            navigation.reset({
                index: 0,
                routes: [{ name: 'Disconnect' }],
            });
          }
        });
        
        return () => removeNetInfoSubscription();
    }, []);

    return (
        <View style={[style.main_background, style.main_screen]}>
            <Header navigation={navigation} title={route.name} goBack={true} />
            <View style={{width: '100%', flexDirection: 'row', height: '9%', marginTop: '5%'}} >
                <Input placeholder={`Buscar ${route.name}`} value={find} onText={handleChangeText} style={{ textInput: style.main_login_inputs, boxTextInput: style.main_login_inputs_box }}/>
                <Pressable onPress={getSampleAlbumDataHandler} style={{ borderColor: 'white', borderWidth: 1, borderRadius: 10, width: '20%'  }}>
                    <Text style={{color: 'white', width: '100%', height: '100%', textAlign: 'center', textAlignVertical: 'center'}}>Buscar</Text>
                </Pressable>
            </View> 
            <Text>ListView</Text>
            <FlatList
                data={list}
                renderItem={({item})=> route.name == "Albumes" ?<Cardalbum props={item} navigation={navigation} /> :<CardArtist props={item} navigation={navigation} />}
            />
        </View>
    )
}