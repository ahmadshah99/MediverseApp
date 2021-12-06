import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight, FlatList, Text } from 'react-native';

import DoctorCard from "../components/DoctorCard";
import { getDoctorById } from "../api/Doctor";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { getUserById } from '../api/User';
import { storeData, getData, removeItemValue } from '../utils/auth.js';
import axios from 'axios';


const SavedDoctors = ({ navigation }) => {

    // list of doctors to render
    const [savedDoctors, setSavedDoctors] = useState([])
    const API_URL = 'http://localhost:5001';


    const renderCards = async ({ item }) => {
        console.log(item)
        axios.get(`${API_URL}/doctor/findOne/${item}`, {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${await getData("jwt")}`
            }
        }).then((res) => {
            console.log(res.data, "HELLO")
            return (
                <TouchableHighlight onPress={() => navigation.navigate('Doctor Profile', res.data)}>
                    <DoctorCard key={res.data._id} doctor={res.data} />
                </TouchableHighlight>
            )
        })

    }


    useEffect(async () => {
        axios.get(`${API_URL}/user/findOne`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${await getData("jwt")}`
            }

        }).then((res) => {
            console.log(res.data.savedDoctors)
            setSavedDoctors(res.data.savedDoctors)
        })
    }, [])


    const emptyDoctorFlatList = () => {
        return (
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <Text>No results found.</Text>
            </View>
        )
    }

    return (
        <View style={styles.mainView}>
            <Header navigation={navigation} />
            <FlatList
                style={{ marginTop: 50 }}
                removeClippedSubviews
                data={savedDoctors}
                renderItem={renderCards}
                ListHeaderComponent={
                    <View style={{ paddingLeft: 30 }}>
                        <Text style={{ fontWeight: 'bold' }}>Showing Saved Doctors </Text>
                    </View>
                }
                ListEmptyComponent={emptyDoctorFlatList()}
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

export default SavedDoctors;
