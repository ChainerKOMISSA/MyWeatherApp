import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import { PRIMARY_COLOR } from '../helpers/colors';


const Home = () => {
    return (
        <View>
            <StatusBar style='light' />
            <Appbar.Header style={{backgroundColor:`${PRIMARY_COLOR}`}}>
                <Appbar.Content title="WeatherApp" color='#fff'/>
                <Appbar.Action icon="magnify" color='#fff' onPress={() => { }} />
            </Appbar.Header>
        </View>
    )
}

export default Home