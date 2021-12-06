import React, { useState, useEffect } from 'react';
import {StyleSheet, View, TouchableHighlight, FlatList} from 'react-native';
import {Text} from 'react-native-elements';

import DoctorCard from "../components/DoctorCard";
import {getDoctorsBySearch} from "../api/Doctor";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Ionicons } from '@expo/vector-icons';
import { storeData, getData } from '../utils/auth.js';
import { AntDesign } from '@expo/vector-icons';


const BrowseDoctors = ({ route, navigation }) => {
    // list of doctors to render
    const [doctors, setDoctors] = useState([])
    const [formattedLocation, setFormattedLocation] = useState(route.params.location)
    const [filterBy, setFilterBy] = useState(0) //0 - nothing, 1 - rating, 2 - distance


    const API_URL = 'http://localhost:5001';
    const [isPremium, setIsPremium] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const renderCards = ({ item }) => {
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

    useEffect(async () => {
        console.log(searchData)
        getDoctorsBySearch(searchData).then(res => {
            console.log(res.data.doctors);
            setDoctors(res.data.doctors);
            setFormattedLocation(res.data.formattedSearchAddress)
        } ).catch(e => alert(e));

        fetch(`${API_URL}/user/isPremium`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${await getData("jwt")}`
            }
        }).then(async res => {
            try{
                const jsonRes = await res.json();
                console.log("Response: \n" + JSON.stringify(jsonRes));
                if (res.status === 200) {
                    setIsError(false);
                    setMessage("User profile data fetched successfully.");
                    const isPrem = JSON.parse(JSON.stringify(jsonRes)).isPremium;
                    setIsPremium(isPrem);
                    if(isPrem){
                        setLanguagesList(premiumLanguagesList);
                        setExpertiseList(premiumExpertiseList);
                    }else{
                        setLanguagesList(basicLanguagesList);
                        setExpertiseList(basicExpertiseList);
                    }
                } else {
                    setIsError(true);
                    setMessage(jsonRes.message);
                }
            }catch(err){
                console.log(err);
            }
        });
    }, [])

    const emptyDoctorFlatList = () => {
        return (
            <View style={{ display: 'flex', alignItems: 'center'}}>
                <Text>No results found.</Text>
            </View>
        )
    }

    function handleFilterByRating(){
        setFilterBy(1);
        setDoctors(doctors.sort((a, b) => b.rating.avg.$numberDecimal - a.rating.avg.$numberDecimal));
    }

    function handleFilterByDistance(){
        setFilterBy(2);
        getDoctorsBySearch(searchData).then(res => {
            console.log(res.data.doctors);
            setDoctors(res.data.doctors);
            setFormattedLocation(res.data.formattedSearchAddress)
        } ).catch(e => alert(e))
    }


    return (
        <View style={styles.mainView}>
            <Header navigation={navigation}/>


            <FlatList
                style = {{ marginTop: 50 }}
                removeClippedSubviews
                data={doctors}
                renderItem={renderCards}
                ListHeaderComponent={
                    <View style={{paddingLeft: 30 }}>
                        <Text>Showing results for <Text style={{ fontWeight: 'bold', fontStyle: 'italic'}}>{formattedLocation}</Text></Text>
                        {isPremium ?
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 10 }}>Sort Search Results By: </Text>
                                    <Text style={{ fontWeight: "bold", marginTop: 10 }}>Rating </Text>
                                    <Ionicons onPress={() => handleFilterByRating()} style = {{ marginTop: 10 }} name={filterBy === 1 ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                                    <Text style={{ fontWeight: "bold", marginTop: 10 }}>  Distance </Text>
                                    <Ionicons onPress={() => handleFilterByDistance()} style = {{ marginTop: 10 }} name={filterBy === 2 ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                                </View>
                                :
                                <View style={{ flexDirection: "row" }}>
                                    <AntDesign name="star" size={24} color="#53D8C7" />
                                    <Text>To filter doctors by rating and distance, {'\n'} consider becoming a premium user.</Text>
                                </View>
                        }

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
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
});

export default BrowseDoctors;
