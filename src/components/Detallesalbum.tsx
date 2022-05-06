import React from 'react'

import { View, FlatList, Image, Text } from 'react-native'
import Header from './items/Header';
import { getAlbumID } from '../core/presentation/AlbumPresenter';
import { style } from '../styles/stylesGlobal';

type Props = {
    route: {name: string, params: any};
    navigation: {navigate:any, goBack: any};
}

const Detallesalbum = ({navigation, route}: Props) => {

    const {id} = route.params
    const [album, setAlbum] = React.useState(null)
    React.useEffect(() => {
        getInfoAlbum()
    }, [id])

    async function getInfoAlbum(){
        const album = await getAlbumID(id);
        setAlbum(album)
    }
    

    return (
        <View style={[style.main_background, style.main_screen]}>
            <Header navigation={navigation} title='Detalles del Album' goBack={true} />
            <View style={{ width: '100%', paddingHorizontal: '10%', height: '90%' }} >
                <Image 
                    source={{uri: album?.images[0]?.url}}
                    style={{ width: '100%', height: '60%' }}
                    resizeMode='contain'
                />

                <FlatList
                    style={{ height: '35%' }}
                    data={album?.tracks?.items}
                    renderItem={({item, index})=> <Text style={{color: 'white', fontSize: 20, marginVertical: 5}} >{index+1}.-{item.name}</Text>}
                />

            </View>
        </View>
    )
}

export default Detallesalbum