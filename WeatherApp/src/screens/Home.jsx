import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Appbar, Icon, Searchbar } from 'react-native-paper';
import { PRIMARY_COLOR, FIFTH_COLOR, FOURTH_COLOR, SECONDARY_COLOR, SIXTH_COLOR } from '../helpers/colors';


const Home = () => {
    const [showSearch, toogleSearch] = useState(false);
    const [locations, SetLocations] = useState([1, 2, 3]);
    const [searchQuery, setSearchQuery] = useState('');


    const onChangeSearch = query => setSearchQuery(query);

    const handleLocation = (loc) => {
        console.log('Location : ', loc);
    }

    return (
        <View style={{ backgroundColor: `${SIXTH_COLOR}`, flex: 1 }}>
            <StatusBar style='light' />
            <Appbar.Header style={{ backgroundColor: `${PRIMARY_COLOR}` }}>
                <Appbar.Content title="WeatherApp" color='#fff' />
                <Appbar.Action icon="magnify" color='#fff' onPress={() => toogleSearch(!showSearch)} />
            </Appbar.Header>
            {
                showSearch ? (<Searchbar
                    placeholder="Rechercher"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ marginTop: '2%', width: '95%', marginLeft: '2%' }}
                />) : null
            }
            {
                locations.length > 0 && showSearch ? (
                    <View style={styles.search}>
                        {
                            locations.map((loc, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => handleLocation(loc)}
                                        key={index}
                                        style={styles.searchitem}>
                                        <Icon
                                            source="map-marker-outline"
                                            size={20}
                                        />
                                        <Text style={styles.searchtext}>London, United Kingdom</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                ) : null
            }
            {/* Forecast section */}
            {/* Country and city */}
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.city}>London</Text>
                <Text style={styles.country}>United Kingdom</Text>
            </View>
            {/*   Image */}
            <Image
                source={require('../../assets/images/partlycloudy.png')}
                style={styles.image}
            />
            {/* Degree */}
            <Text style={styles.degree}>23&#176;</Text>
            <Text style={styles.weather}>Partly cloudy</Text>
            {/* Stats */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: '4%' }}>
                <View style={{ flexDirection: 'colum', alignItems: 'center', justifyContent: 'center', backgroundColor: `${SECONDARY_COLOR}`, margin: '2%', borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '5%' }}>
                        <Icon source="weather-windy" size={20} />
                        <Text>22km</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'colum', alignItems: 'center', justifyContent: 'center', backgroundColor: `${SECONDARY_COLOR}`, margin: '2%', borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '5%' }}>
                        <Icon source="weather-rainy" size={20} />
                        <Text>22%</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'colum', alignItems: 'center', justifyContent: 'center', backgroundColor: `${SECONDARY_COLOR}`, margin: '2%', borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '5%' }}>
                        <Icon source="weather-sunny" size={20} />
                        <Text>06:10 AM</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        position: 'relative',
        width: '90%',
        backgroundColor: '#fff',
        top: 8,
        borderRadius: 10,
        margin: '5%',
        marginTop: '0%',
    },
    searchitem: {
        flexDirection: 'row',
        margin: '4%',
        marginBottom: '5%',
        border: '1px',
        borderColor: '#E3E3E3',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    searchtext: {
        color: '#000',
        marginLeft: '2%',
        fontSize: 16,
    },
    image: {
        width: '40%',
        height: '18%',
        alignSelf: "center",
        marginTop: '18%',
    },
    city: {
        alignSelf: "center",
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: '5%',
        color: `${PRIMARY_COLOR}`,
    },
    country: {
        fontSize: 24,
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
    },
})

export default Home