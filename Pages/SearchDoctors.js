import React, { useState, useEffect } from 'react';
import {StyleSheet, View } from 'react-native';
import { Text, Switch, SearchBar, Button, Input } from 'react-native-elements';
import Menu from '../components/Menu';
import RNPickerSelect from 'react-native-picker-select';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Constants from 'expo-constants';

const SearchDoctors = ({ navigation }) => {
    const [location, setLocation] = useState('')
    const [walkin, setWalkin] = useState(true)
    const [expertise, setExpertise] = useState('')
    const [language, setLanguage] = useState('')
    const [maxDistance, setMaxDistance] = useState(10)
    const distanceList = [
        {
            label: 'Any distance',
            value: 2000
        },
        {
            label: '2 km',
            value: 2
        },
        {
            label: '5 km',
            value: 5
        },
        {
            label: '10 km',
            value: 10
        },
        {
            label: '15km',
            value: 15
        },
        {
            label: '25 km',
            value: 20
        },
        {
            label: '50 km',
            value: 50
        }]

    const languagesList = [
        {
            label: 'Any language',
            value: ''
        },
        {
        label: 'English',
        value: 'English'
        },
        {
            label: 'Mandarin',
            value: 'Mandarin'
        },
        {
            label: 'Hindi',
            value: 'Hindi'
        },
        {
            label: 'Spanish',
            value: 'Spanish'
        },
        {
            label: 'French',
            value: 'French'
        },
        {
            label: 'Arabic',
            value: 'Arabic'
        },
        {
            label: 'Bengali',
            value: 'Bengali'
        },
        {
            label: 'Russian',
            value: 'Russian'
        },
        {
            label: 'Portuguese',
            value: 'Portuguese'
        },
        {
            label: 'Indonesian',
            value: 'Indonesian'
        }];

    const expertiseList = [
        {
            label: 'Any expertise',
            value: ''
        },
        {
            label: 'Family Medicine',
            value: 'Family Medicine'
        },
        {
            label: 'Geriatric Medicine',
            value: 'Geriatric Medicine'
        },
        {
            label: 'Gynecology',
            value: 'Gynecology'
        },
        {
            label: 'Ophthalmology',
            value: 'Ophthalmology'
        },
        {
            label: 'Pediatric',
            value: 'Pediatric'
        },
        {
            label: 'Cardiology',
            value: 'Cardiology'
        },
        {
            label: 'Dermatology',
            value: 'Dermatology'
        },
        {
            label: 'Gastroenterology',
            value: 'Gastroenterology'
        },
        {
            label: 'Neurology',
            value: 'Neurology'
        },
        {
            label: 'Respirology',
            value: 'Respirology'
        },
        {
            label: 'Urology',
            value: 'Urology'
        }];

    return (
        <View style={styles.mainView}>
            <Text h1 style={styles.titleText}>Find a Doctor</Text>
            <View style={{width: '100%'}}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text h5 style={{ color: '#000000', fontWeight: 'bold' }}>Show walk-in only?</Text>
                    <Switch value={walkin} onValueChange={() => setWalkin(walkin => !walkin)} color="#035762" />
                </View>
                <View>
                    <SearchBar
                        placeholder="Where do you want to search?"
                        containerStyle={styles.searchBar}
                        inputContainerStyle={{backgroundColor: '#fff'}}
                        onChangeText={val => setLocation(val)}
                        value={location}
                        lightTheme
                        round
                    />
                </View>
                <View style={styles.picker}>
                    <Text h5 style={{ color: '#000000', fontWeight: 'bold' }}>Select language</Text>
                    <RNPickerSelect
                        onValueChange={value => setLanguage(value)}
                        items={languagesList}
                    />
                </View>
                <View style={styles.picker}>
                    <Text h5 style={{ color: '#000000', fontWeight: 'bold' }}>Select expertise</Text>
                    <RNPickerSelect
                        onValueChange={value => setExpertise(value)}
                        items={expertiseList}
                    />
                </View>
                <View style={styles.picker}>
                    <Text h5 style={{ color: '#000000', fontWeight: 'bold' }}>Max search distance:</Text>
                    <RNPickerSelect
                        onValueChange={value => setMaxDistance(value)}
                        items={distanceList}
                    />
                </View>
            </View>
            <Button
                title="Search Doctors"
                buttonStyle={{ backgroundColor: "#035762", padding: 15, marginTop: 20 }}
                onPress={() => navigation.push('Browse Doctors', {
                    language,
                    expertise,
                    walkin: walkin ? 'True': 'False',
                    location,
                    maxDistance
                }) }
                disabled={!location}
            />
            <Menu navigation={navigation} />
        </View>
    );
};

export default SearchDoctors;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    titleText: {
        color: '#035762',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: '20%'
    },
    searchBar: {
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 15,
        marginBottom: 30
    },
    picker: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    }
});
