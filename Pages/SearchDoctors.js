import React from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableHighlight, } from 'react-native';
import { Text, Switch, SearchBar, Button } from 'react-native-elements';

const SearchDoctors = ({ navigation }) => {
    return (
        <View style={styles.mainView}>
            <Text h1 style={styles.titleText}>Find a Doctor</Text>
            <View style={{ width: '100%' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text h5 style={{ color: '#000000', fontWeight: 'bold' }}>Show virtual doctors?</Text>
                    <Switch value={true} color="#035762" />
                </View>
                <SearchBar
                    placeholder="Doctor type..."
                    containerStyle={styles.searchBar}
                    inputContainerStyle={{backgroundColor: '#fff'}}
                    lightTheme
                    round
                />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text h5 style={{ color: '#000000', fontWeight: 'bold' }}>Use my location?</Text>
                    <Switch value={true} color="#035762" />
                </View>
                <SearchBar
                    placeholder="Your address..."
                    containerStyle={styles.searchBar}
                    inputContainerStyle={{backgroundColor: '#fff'}}
                    lightTheme
                    round
                />
            </View>
            <Button
                title="Search Doctors"
                buttonStyle={{ backgroundColor: "#035762", padding: 15 }}
                onPress={() => navigation.push('Browse Doctors') }
            />
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
        marginBottom: 30,
        marginTop: 15,
        backgroundColor: '#fff'
    }
});
