import React from 'react';
import {StyleSheet, View } from 'react-native';
import { Text, Switch, SearchBar, Button } from 'react-native-elements';
import Menu from '../components/Menu';
import { FontAwesome5 } from '@expo/vector-icons';


const SearchDoctors = ({ navigation }) => {
    return (
        <View style={styles.mainView}>
            <Text h1 style={styles.titleText}>Find a Doctor</Text>
            <View style={{ width: '100%' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text h5 style={{ color: '#000000', fontWeight: 'bold', paddingRight: 10 }}>Show virtual doctors?</Text>
                    <Switch value={true} color="#035762" />
                </View>
                <SearchBar
                    placeholder="Doctor type..."
                    containerStyle={styles.searchBar}
                    inputContainerStyle={{backgroundColor: '#fff'}}
                    lightTheme
                    round
                /> 
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text h5 style={{ color: '#000000', fontWeight: 'bold', paddingRight: 10 }}>Use my location?</Text>
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
             icon={ <FontAwesome5 name="arrow-right" size={16} color="#53D8C7"/>}
                title="Go!"
                titleStyle={{color: "#53D8C7", padding: 10}}
                buttonStyle={{backgroundColor: "#035762", padding: 15, borderRadius: 100, width: 100, alignItems: 'center'}}
                onPress={() => navigation.push('Browse Doctors') }
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
        marginBottom: '5%'
    },
    searchBar: {
        marginBottom: 30,
        marginTop: 15,
        backgroundColor: '#fff',
        // boxShadow:"0px 2px 20px rgba(0, 0, 0, 0.25)",
        borderRadius:50}
});
