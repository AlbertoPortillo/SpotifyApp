import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

type Props = {
    navigation: {navigate:any, goBack: any, push: any};
    props: {name: string, id: string, artists: Array<Object>, images: Array<Object>}
}

const Cardalbum = ({props, navigation}: Props) => {

    const handleclick = () => {
        navigation.push('AlbumesDetalles', {id: props.id})
    }

    return (
        <Pressable onPress={handleclick} style={{ width: '100%', paddingHorizontal: '5%', height: 80, marginVertical: '2%' }} >
            <View style={{ width: '100%', height: '100%', flexDirection: 'row' }} >
                <Image 
                    source={{uri: props.images[0].url}}
                    style={{width: '20%', height: '100%'}}
                />
                <View style={{ height: '100%', width: '76%', justifyContent: 'center', paddingLeft: '5%' }} >
                    <Text style={{color: 'white', width: '100%', fontSize: 20 }} numberOfLines={1} >{props.name}</Text>
                    <Text style={{color: 'white'}} >Album</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Cardalbum