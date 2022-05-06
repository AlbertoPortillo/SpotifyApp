import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'

type Props = {
    navigation: {navigate:any, goBack: any, push: any};
    props: {name: string, id: string, followers: Object, images: Array<Object>}
}

const CardArtist = ({props, navigation}: Props) => {
    const handleclick = () => {
        navigation.navigate('ArtistaDetalles', {id: props.id})
    }
  return (
    <Pressable onPress={handleclick} style={{ width: '100%', paddingHorizontal: '5%', height: 80, marginVertical: '2%' }} >
            <View style={{ width: '100%', height: '100%', flexDirection: 'row' }} >
                <Image 
                    source={{uri: props?.images[0]?.url}}
                    style={{width: '20%', height: '100%'}}
                />
                <View style={{ height: '100%', width: '76%', justifyContent: 'center', paddingLeft: '5%' }} >
                    <Text style={{color: 'white', width: '100%', fontSize: 20 }} numberOfLines={1} >{props?.name}</Text>
                    <Text style={{color: 'white'}} >Artista</Text>
                </View>
            </View>
        </Pressable>
  )
}

export default CardArtist