import React from 'react'

import { View, FlatList, Image, Text } from 'react-native'
import Header from './items/Header';
import NetInfo from "@react-native-community/netinfo";
import { getArtistID } from '../core/presentation/ArtistaPresenter';
import { style } from '../styles/stylesGlobal';

type Props = {
    route: {name: string, params: any};
    navigation: {navigate:any, goBack: any, params: any, reset: any};
}

const Detallesartista = ({navigation, route}: Props) => {

    const {id} = route.params
    const [artist, setArtist] = React.useState(null)
    React.useEffect(() => {
        getInfoArtist()
    }, [id])

    async function getInfoArtist(){
        const artist = await getArtistID(id);
        console.log(artist)
        setArtist(artist)
    }
    
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
            <Header navigation={navigation} title='Detalles del Artista' goBack={true} />
            <View style={{ width: '100%', paddingHorizontal: '10%', height: '90%' }} >
                <Text style={{width: '100%', color: 'white', fontSize: 30, marginBottom: 10, textAlign:'center'}} >{artist?.name}</Text>
                <Image 
                    source={{uri: artist?.images[0]?.url}}
                    style={{ width: '100%', height: '60%' }}
                    resizeMode='contain'
                />                
                <Text style={{width: '100%', color: 'white', fontSize: 30, marginBottom: 10, textAlign:'center'}} >Seguidores: {artist?.followers?.total}</Text>
                <Text style={{width: '100%', color: 'white', fontSize: 30, marginBottom: 10, textAlign:'center'}} >Generos:</Text>
                <Text style={{width: '100%', color: 'white', fontSize: 30, marginBottom: 10, textAlign:'center'}} >
                    {artist?.genres.map(gen=> ' '+gen+' ')}
                </Text>
            </View>
        </View>
    )
}

export default Detallesartista