import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, FlatList} from 'react-native';

import DoctorCard from "../components/DoctorCard";
import {getDoctorsBySearch} from "../api/Doctor";
import Header from "../components/Header";
import Menu from "../components/Menu";

const BrowseDoctors = ({ navigation }) => {
    // list of doctors to render
    const [doctors, setDoctors] = useState([])

    const renderCards = ({item }) => {
        return (
            <TouchableHighlight onPress={() => navigation.navigate('Doctor Profile', {item})}>
                <DoctorCard key={item.id} doctor={item} />
            </TouchableHighlight>
        )
    }

    const searchData = {
        'expertise[0]': 'Family Medicine',
        'walkin': 'True',
        'sourceAddress': 'Markham, Ontario',
        'maxDistance': 10,
        'sortBy': 'distance'
    }

    useEffect(() => {
        getDoctorsBySearch(searchData).then(res => setDoctors(res.data.doctors) )
    }, [])

    return (
        <View style={styles.mainView}>
            <Header navigation={navigation}/>
            <FlatList
                style = {{ marginTop: 50 }}
                removeClippedSubviews
                data={doctors}
                renderItem={renderCards}
            />
            <Menu navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
});

export default BrowseDoctors;
