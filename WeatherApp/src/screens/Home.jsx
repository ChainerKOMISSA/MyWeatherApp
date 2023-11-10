import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Appbar, Icon } from 'react-native-paper';
import { PRIMARY_COLOR, FIFTH_COLOR, FOURTH_COLOR, SECONDARY_COLOR, SIXTH_COLOR } from '../helpers/colors';


const Home = () => {
    return (
        <View style={{ backgroundColor: `${SIXTH_COLOR}`, flex: 1 }}>
            <StatusBar style='light' />
            <Appbar.Header style={{ backgroundColor: `${PRIMARY_COLOR}` }}>
                <Appbar.Content title="WeatherApp" color='#fff' />
                <Appbar.Action icon="magnify" color='#fff' onPress={() => { }} />
            </Appbar.Header>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.city}>London</Text>
                <Text style={styles.country}>, United Kingdom</Text>
            </View>
            <Image
                source={require('../../assets/images/partlycloudy.png')}
                style={styles.image}
            />
            <Text style={styles.degree}>23°</Text>
            <Text style={styles.weather}>Partly cloudy</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop : '10%' }}>
                <View style={{ flexDirection: 'colum', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin : '5%' }}>
                        <Icon source="weather-windy" size={20} />
                        <Text>22km</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'colum', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin : '5%' }}>
                        <Icon source="weather-rainy" size={20} />
                        <Text>22%</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'colum', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin : '5%' }}>
                        <Icon source="weather-sunny" size={20} />
                        <Text>06:10 AM</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '40%',
        height: '18%',
        alignSelf: "center",
        marginTop: '18%',
    },
    city: {
        alignSelf: "center",
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: '10%',
        color: `${PRIMARY_COLOR}`,
    },
    country: {
        fontSize: 18,
        marginTop: '10%',
        color: `${PRIMARY_COLOR}`,
    },
    degree: {
        fontSize: 48,
        marginTop: '10%',
        alignSelf: "center",
        fontWeight: 'bold',
        color: `${PRIMARY_COLOR}`,
    },
    weather: {
        fontSize: 18,
        alignSelf: "center",
        color: `${PRIMARY_COLOR}`,
    }
})

export default Home