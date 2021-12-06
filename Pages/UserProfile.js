import React, { useState, useEffect } from 'react';
import {StyleSheet, View, ScrollView, Image, FlatList, TouchableHighlight} from 'react-native';
import {Text, Avatar, Icon, Rating} from 'react-native-elements';

import DoctorInfoTile from "../components/atoms/DoctorInfoTile";
import DoctorReview from "../components/DoctorReview";
import DoctorCard from "../components/DoctorCard";
import Header from '../components/Header';
import Menu from '../components/Menu';
import { storeData, getData, removeItemValue } from '../utils/auth.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Landing2 from './Landing2';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import {getUserById} from ''

//https://icons.expo.fyi/
import { Entypo } from '@expo/vector-icons'; 
const API_URL = 'http://localhost:5001';
const UserProfileNavBar = ({ currentTab, setCurrentTab }) => {
    return (
        <View style = {styles.userProfileNavBar}>
            <Text style={(currentTab === 0) ? styles.userProfileNavBarTextCurrentTab : styles.userProfileNavBarText} onPress={()=> setCurrentTab(0)}>ME </Text>
            <Text style={(currentTab === 1) ? styles.userProfileNavBarTextCurrentTab : styles.userProfileNavBarText} onPress={()=> setCurrentTab(1)}>MEDICAL </Text>
        </View>
    )
}

{/*  */}

const BasicUserInfo = ({ navigation }) => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [country, setCountry] = useState("");
    const [isPremium, setIsPremium] = useState(false);

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    function handleLogout(){
        console.log("Logging out");
        removeItemValue(getData("jwt"));
        navigation.navigate("Landing2");
    }



    async function hadnlePremiumIconPress(){
        console.log("Changing premium status to " + !isPremium);
        let newPremVal = !isPremium;
        const payLoad = {
            newPremiumStatus: newPremVal.toString()
        };
        fetch(`${API_URL}/user/changePremiumStatus`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await getData("jwt")}`
                },
                body: JSON.stringify(payLoad)
        }).then(async res => {
            try{
                const jsonResPremium = await res.json();
                console.log("Response: \n" + JSON.stringify(jsonResPremium)); 
            }catch(e){
                console.log(e);
            }
        });
        setIsPremium(!isPremium);

    }
    

    useEffect(async () => {
        fetch(`${API_URL}/user/findOne`, {
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
                    const firstName = JSON.parse(JSON.stringify(jsonRes)).firstName;
                    const lastName = JSON.parse(JSON.stringify(jsonRes)).lastName;
                    const homeCountry = JSON.parse(JSON.stringify(jsonRes)).country;
                    const isPrem = JSON.parse(JSON.stringify(jsonRes)).isPremium;
                    setFName(firstName);
                    setLName(lastName);
                    setCountry(homeCountry);
                    setIsPremium(isPrem);
                } else {
                    setIsError(true);
                    setMessage(jsonRes.message);          
                }
            }catch(err){
                console.log(err);
            }
        });
    }, [])

    return (
        <View>
            <Text h3 style={{ fontWeight: 'bold' }}>{ fName } { lName }</Text>
            <View style={styles.userBasicInfo}>
                 <MaterialCommunityIcons name="account-question" size={80} color="black" style={{ marginLeft: 10, marginRight: 20, marginTop: 10}} />
                <View style={{ marginTop: 10 }}>
                    <Text h4 style={styles.statusText}>Away from home</Text>
                    <View style={styles.locationMarkers}>
                        <View>
                            <Icon name='map-marker' style={{ marginRight: 20 }} type='font-awesome' size={50} color='#53D8C7'/>
                            <Text>{ country }</Text>
                        </View>
                        <Icon name='plane' type='font-awesome' size={30} color='#53D8C7' />
                        <View>
                            <Icon name='map-marker' type='font-awesome' size={50} color='#53D8C7'/>
                            <Text>Marrakech, {"\n"} Morocco</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {{ marginTop: 20 }}>
                <View style = {{ flexDirection: "row" }}>
                    <Icon name='download' type='font-awesome' size={30} color='#53D8C7' style = {{ marginRight: 10 }} />
                    <Text style = {{ color: "#53D8C7" }}>MEDICAL ITINERARY</Text>
                </View>
                {/* TODO: Expandable view */}
                <View style = {{ backgroundColor: "#fff", width: 250, marginTop: 20, paddingHorizontal: 10, paddingBottom: 10, borderRadius: 10, boxShadow:"0px 2px 20px rgba(0, 0, 0, 0.25)",
        borderRadius:50, alignItems: "center",  flexDirection: "row", justifyContent: "center" }}>
                    <Text style = {{ color: '#53D8C7', fontSize: 20, marginTop: 10 }}>Covid Vaccine Info</Text>
                    <Icon name="chevron-down" type='font-awesome' size={20} color="#53D8C7" />
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <Text style={{ color: "#0a94a6", fontSize: 18, fontWeight: 'bold' }}>Premium? </Text>
                    <FontAwesome5 onPress={() => hadnlePremiumIconPress()}  name = {(isPremium) ? "toggle-on" : "toggle-off"} size={24} color="black" />

                </View>


                    <View style={{ flexDirection: 'row', alignItems: "center", marginVertical: 20 }}>
                        <MaterialIcons onPress={()=> handleLogout()} style={{ color: "#0a94a6", marginRight: 10, marginTop: 20 }} name="logout" size={20} color="black" />
                        <Text style={{ color: "#0a94a6", fontSize: 18, marginTop: 20 }}>Sign Out</Text>
                    </View>
            </View>
        </View>
    )
}

const MedicalInfo = () => {
    return (
        <View>
            <Text h1>Meidcal</Text>
            <Text h5><Text style={{ fontWeight: "bold" }}>Current Insurance:</Text> Cigna</Text>
            <Text h5 style = {{ marginBottom: 20 }}><Text style={{ fontWeight: "bold" }}>Bloodtype:</Text> A++</Text>
            <View style = {{ flexDirection: "row", marginBottom: 15 }}>
                <View style= {{ marginRight: 10, borderColor: "#035762", borderWidth: 2, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10 }}>
                    <Text h3>Conditions</Text>
                    <Text h4>Ongoing</Text>
                    <Text h5>Fur allergy</Text>
                    <Text h4>Current</Text>
                    <Text h5>Fractured arm</Text>
                </View>

                <View style= {{ borderColor: "#035762", borderWidth: 2, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 5 }}>
                    <Text h3>Medications</Text>
                    <Text h4>Taking now</Text>
                    <Text h5>Augmentin</Text>
                    <Text h4>Occasional</Text>
                    <Text h5>Claritin</Text>
                </View>
            </View>

            <View>
                <Text h4 style={{ marginBottom: 5 }}>Medical Records</Text>
                <View style={{ marginBottom: 20 }}>
                    <View style = {{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="upload" type="font-awesome" size={25} />
                        <Text> UPLOAD NEW MEDICAL RECORD</Text>
                    </View>

                    <View style = {{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="eye" type="font-awesome" size={25} />
                        <Text> VIEW MEDICAL RECORD HISTORY</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

// const PrescriptionsInfo = () => {
//     return (
//         <View>
//             <Text h1 style = {{ marginBottom: 20 }}>Prescriptions</Text>
//             <View style = {{ borderColor: "#035762", borderWidth: 2, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 5, width: "70%", marginBottom: 15 }}>
//                 <Text h4>My Prescriptions</Text>
//                 <Text h4>Recently Prescribed</Text>
//                 <Text>Augmentine</Text>
//                 <Text h4>Interactions</Text>
//                 <Text>Claritin</Text>
//             </View>

//             <Text h4>Prescribed to me</Text>
//             <View style = {{ flexDirection: "row", alignItems: "center" }}>
//                 <Icon name="upload" type="font-awesome" size={25} />
//                 <Text> UPLOAD PAST PRESCRIPTIONS</Text>
//             </View>
//             <View style = {{ flexDirection: "row", alignItems: "center" }}>
//                 <Icon name="eye" type="font-awesome" size={25} />
//                 <Text> VIEW PRESCRIPTIONS HISTORY</Text>
//             </View>
//             <View style = {{ flexDirection: "row", alignItems: "center" }}>
//                 {/* <Icon name="comment" type="font-awesome" size={25} />
//                  */}
//                  <Entypo name="message" size={25} color="black" />
//                 <Text> REQUEST PRESCRIPTIONS RENEWAL</Text>
//             </View>
//         </View>
//     )
// }

const UserProfile = ({navigation}) => {
    const [currentTab, setCurrentTab] = useState(0);


    return (
        <View>
            <ScrollView contentContainerStyle={styles.mainView}>
                <Header navigation={navigation} />
                <UserProfileNavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
                {(currentTab === 0) && <BasicUserInfo navigation={navigation} />}
                {(currentTab === 1) && <MedicalInfo />}
                {/* {(currentTab === 2) && <PrescriptionsInfo />} */}
            </ScrollView>
            <Menu navigation={navigation} />
        </View>

    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: 20,
        marginBottom: 200
    },
    userBasicInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    doctorProfileMainInformation: {
        alignItems: 'center',
        marginTop: 30,
        flexGrow: 1
    },
    infoTitle: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontSize: 24
    },
    infoText: {
        fontStyle: 'italic',
        fontSize: 20,
        marginTop: 10
    },
    doctorInfoCard: {
        display: 'flex',
        flexDirection: 'column',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#53D8C7',
        minHeight: 300,
        borderRadius: 20,
        justifyContent: 'space-between',
        padding: 40,
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    locationMarkers: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    reviewSection: {
        marginTop: 20
    },
    userProfileNavBar: {
        flexDirection: 'row',
        backgroundColor: "#035762",
        paddingLeft: 20,
        marginVertical: 20
    },
    userProfileNavBarText: {
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 10,
        paddingLeft: 5,
        color: '#F4F4F4'

    },
    userProfileNavBarTextCurrentTab: {
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 10,
        paddingLeft: 5,
        color: '#53D8C7'
    },
    statusText: {
        color: '#09355C',
        fontWeight: 'bold',
    }
})

export default UserProfile;
