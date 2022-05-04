import React from 'react'
import { NativeSyntheticEvent } from 'react-native'
import { WebView, WebViewNavigation } from 'react-native-webview';

var client_id = '4b50f832cc374ca29901df6f4df73c46';
var client_secret = 'f94f529e173345c3870b41ed15de4b77';
var redirect_uri = 'http://localhost:8888/callback';
var state = Math.random().toString(36).substring(2,7);
var scope = 'user-read-private user-read-email';

type Props ={
    onChangeLink: (e: NativeSyntheticEvent<WebViewNavigation>) => void;
}

export default function WebViewToken({ onChangeLink }: Props) {
    const [reponseSpotify, setResponseSpotify] = React.useState(null)    
    return (
        <WebView 
            source={{ uri: `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=${state}`}} 
            onNavigationStateChange={onChangeLink}
        />
    )
}