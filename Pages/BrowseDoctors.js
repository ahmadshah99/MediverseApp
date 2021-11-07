import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, FlatList} from 'react-native';
import { Card } from 'react-native-elements';

import DoctorCard from "../components/DoctorCard";

const BrowseDoctors = ({ navigation }) => {
    // list of doctors to render
    const doctors = [
        {
            id: 0,
            name: 'M. Gould',
            role: 'General Practitioner',
            distance: '1.5',
            language: 'ara',
            rating: 5
        },
        {
            id: 1,
            name: 'B. Fould',
            role: 'Cardiac Specialist',
            distance: '2.3',
            language: 'fre',
            rating: 4
        },
        {
            id: 2,
            name: 'A. Rould',
            role: 'General Practitioner',
            distance: '2.8',
            language: 'urd',
            rating: 5
        },
        {
            id: 3,
            name: 'V. Should',
            role: 'Pediatrician',
            distance: '3.3',
            language: 'ara',
            rating: 3
        },
        {
            id: 4,
            name: 'R. Bould',
            role: 'Pediatrician',
            distance: '6.5',
            language: 'ara',
            rating: 5
        },
        {
            id: 5,
            name: 'N. Nould',
            role: 'Pediatrician',
            distance: '13.8',
            language: 'ara',
            rating: 3
        },
        {
            id: 6,
            name: 'H. Kould',
            role: 'General Practitioner',
            distance: '15.7',
            language: 'man',
            rating: 2
        },
        {
            id: 7,
            name: 'I. Pould',
            role: 'Pediatrician',
            distance: '17.8',
            language: 'heb',
            rating: 5
        },
        {
            id: 8,
            name: 'U. Would',
            role: 'General Practitioner',
            distance: '19.9',
            language: 'fre',
            rating: 5
        },
        {
            id: 9,
            name: 'R. Sould',
            role: 'Psychiatrist',
            distance: '21.7',
            language: 'urd',
            rating: 4
        },
        {
            id: 10,
            name: 'J. Rould',
            role: 'General Practitioner',
            distance: '26.9',
            language: 'heb',
            rating: 1
        },
        {
            id: 11,
            name: 'J. Mihoff',
            role: 'General Practitioner',
            distance: '35.5',
            language: 'fre',
            rating: 5
        }
    ];

    const renderCards = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => navigation.navigate('Doctor Profile', {item})}>
                <DoctorCard key={item.id} doctor={item} />
            </TouchableHighlight>
        )
    }

    return (
        <View style={styles.mainView}>
            <FlatList
                data={doctors}
                renderItem={renderCards}
            />
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
