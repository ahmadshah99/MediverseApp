import React, { useState, useEffect } from 'react';
import {StyleSheet, View, TouchableHighlight, FlatList} from 'react-native';
import {Text} from 'react-native-elements';

import DoctorCard from "../components/DoctorCard";
import {getDoctorsBySearch} from "../api/Doctor";
import Header from "../components/Header";
import Menu from "../components/Menu";

const BrowseDoctors = ({ route, navigation }) => {
    // list of doctors to render
    const [doctors, setDoctors] = useState([])
    const [formattedLocation, setFormattedLocation] = useState(route.params.location)

    const renderCards = ({item }) => {
        return (
            <TouchableHighlight onPress={() => navigation.navigate('Doctor Profile', {item})}>
                <DoctorCard key={item._id} doctor={item} />
            </TouchableHighlight>
        )
    }

    const searchData = {
        'expertise[0]': route.params.expertise,
        'languages[0]': route.params.language,
        'walkin': route.params.walkin,
        'sourceAddress': route.params.location,
        'maxDistance': route.params.maxDistance,
        'sortBy': 'distance'
    }

    useEffect(() => {
        console.log(searchData)
        getDoctorsBySearch(searchData).then(res => {
            console.log(res.data.doctors);
            setDoctors(res.data.doctors);
            setFormattedLocation(res.data.formattedSearchAddress)
        } )
    }, [])

    const emptyDoctorFlatList = () => {
        return (
            <View style={{ display: 'flex', alignItems: 'center'}}>
                <Text>No results found.</Text>
            </View>
        )
    }

    return (
        <View style={styles.mainView}>
            <Header navigation={navigation}/>
            <View style={{
                display: 'flex',
                justifySelf: 'flex-start'
            }}>
            </View>
            <FlatList
                style = {{ marginTop: 50 }}
                removeClippedSubviews
                data={doctors}
                renderItem={renderCards}
                ListHeaderComponent={
                    <Text>Showing results for <Text style={{ fontWeight: 'bold', fontStyle: 'italic'}}>{formattedLocation}</Text></Text>
                }
                ListEmptyComponent={emptyDoctorFlatList()}
            />
            <Menu navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
});

export default BrowseDoctors;
