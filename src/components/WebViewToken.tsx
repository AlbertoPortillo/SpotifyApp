import React from 'react'
import { NativeSyntheticEvent } from 'react-native'
import { WebView, WebViewNavigation } from 'react-native-webview';

var client_id = '4b50f832cc374ca29901df6f4df73c46';
var redirect_uri = 'https://example.com/callback';
var state = Math.random().toString(36).substring(2,7);
var scope = 'user-read-private user-read-email';

type Props ={
    onChangeLink: (e: WebViewNavigation) => void;
}

export default function WebViewToken({ onChangeLink }: Props) {
    return (
        <WebView 
            source={{ uri: `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&scope=${scope}&state=${state}`}} 
            onNavigationStateChange={onChangeLink}
        />
    )
}