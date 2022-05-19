import React from 'react';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Fourth() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#e6f2fc'}}>
            <View style={{flex:1, padding:10}}>
                <WebView source={{ uri: 'https://ruz.fa.ru/ruz/main' }} />
            </View>
        </SafeAreaView>
    );
}
