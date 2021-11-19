import React, { useState } from 'react';
import {StyleSheet, View, ScrollView, Image, FlatList, TouchableHighlight} from 'react-native';
import {Text, Avatar, Icon, Rating} from 'react-native-elements';

import DoctorInfoTile from "../components/atoms/DoctorInfoTile";
import DoctorReview from "../components/DoctorReview";
import DoctorCard from "../components/DoctorCard";
import Header from '../components/Header';
import userItem from '../components/MockUserInfo';
import Menu from '../components/Menu';


//https://icons.expo.fyi/
import { Entypo } from '@expo/vector-icons'; 

const UserProfileNavBar = ({ currentTab, setCurrentTab }) => {
    return (
        <View style = {styles.userProfileNavBar}>
            <Text style={(currentTab === 0) ? styles.userProfileNavBarTextCurrentTab : styles.userProfileNavBarText} onPress={()=> setCurrentTab(0)}>ME </Text>
            <Text style={(currentTab === 1) ? styles.userProfileNavBarTextCurrentTab : styles.userProfileNavBarText} onPress={()=> setCurrentTab(1)}>MEDICAL </Text>
            <Text style={(currentTab === 2) ? styles.userProfileNavBarTextCurrentTab : styles.userProfileNavBarText} onPress={()=> setCurrentTab(2)}>PRESCRIPTIONS </Text>
        </View>
    )
}

{/*  */}

const BasicUserInfo = () => {
    return (
        <View>
            <Text h3 style={{ fontWeight: 'bold' }}>{ userItem.name }</Text>
            <View style={styles.userBasicInfo}>
                <Avatar
                    size={120}
                    rounded
                    containerStyle={{ marginLeft: 10, marginTop: 10}}
                    source={require('../assets/images/mock_profile_picture_user.png')}
                />
                <View style={{ marginTop: 10 }}>
                    <Text h4 style={styles.statusText}>Away from home</Text>
                    <View style={styles.locationMarkers}>
                        <View>
                            <Icon name='map-marker' style={{ marginRight: 20 }} type='font-awesome' size={50} color='#53D8C7'/>
                            <Text>New York, {"\n"} USA</Text>
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
                <Text style = {{ fontSize: 17, marginBottom: 10 }}>Planned medical itineracy</Text>
                <TouchableHighlight style={{ backgroundColor: "#035762", borderRadius: 15, padding: 20, width: 250 }}>
                    <View style = {{ flexDirection: "row" }}>
                      <Icon name='download' type='font-awesome' size={30} color='#53D8C7' style = {{ marginRight: 10 }} />
                      <Text style = {{ color: "#53D8C7" }}>DOWNLOAD MEDICAL ITINERACY</Text>
                    </View>
                </TouchableHighlight>
                {/* TODO: Expandable view */}
                <View style = {{ backgroundColor: "#fff", width: 200, marginTop: 20, paddingHorizontal: 10, paddingBottom: 10, borderRadius: 10, shadowColor: 'darkgrey', shadowRadius: 5, shadowOffset: 10, elevation: 5, alignItems: "center",  flexDirection: "row", justifyContent: "center" }}>
                    <Text style = {{ color: '#53D8C7', fontSize: 20, marginTop: 10 }}>Covid Vaccine Info</Text>
                    <Icon name="chevron-down" type='font-awesome' size={20} color="#53D8C7" />
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

                <Text h4 style={{ marginBottom: 5 }}>Bookings</Text>
                <View>
                    <View style = {{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="plus" type="font-awesome" size={25} />
                        <Text> BOOK WITH A DOCTOR</Text>
                    </View>

                    <View style = {{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="eye" type="font-awesome" size={25} />
                       <Text> VIEW DOCTOR BOOKING HISTORY</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const PrescriptionsInfo = () => {
    return (
        <View>
            <Text h1 style = {{ marginBottom: 20 }}>Prescriptions</Text>
            <View style = {{ borderColor: "#035762", borderWidth: 2, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 5, width: "70%", marginBottom: 15 }}>
                <Text h4>My Prescriptions</Text>
                <Text h4>Recently Prescribed</Text>
                <Text>Augmentine</Text>
                <Text h4>Interactions</Text>
                <Text>Claritin</Text>
            </View>

            <Text h4>Prescribed to me</Text>
            <View style = {{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="upload" type="font-awesome" size={25} />
                <Text> UPLOAD PAST PRESCRIPTIONS</Text>
            </View>
            <View style = {{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="eye" type="font-awesome" size={25} />
                <Text> VIEW PRESCRIPTIONS HISTORY</Text>
            </View>
            <View style = {{ flexDirection: "row", alignItems: "center" }}>
                {/* <Icon name="comment" type="font-awesome" size={25} />
                 */}
                 <Entypo name="message" size={25} color="black" />
                <Text> REQUEST PRESCRIPTIONS RENEWAL</Text>
            </View>
        </View>
    )
}

const UserProfile = ({navigation}) => {
    const [currentTab, setCurrentTab] = useState(0);


    return (
        <View>
            <ScrollView contentContainerStyle={styles.mainView}>
                <Header navigation={navigation} />
                <UserProfileNavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
                {(currentTab === 0) && <BasicUserInfo />}
                {(currentTab === 1) && <MedicalInfo />}
                {(currentTab === 2) && <PrescriptionsInfo />}
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
        backgroundColor: "lightgrey",
        paddingLeft: 20,
        marginVertical: 20
    },
    userProfileNavBarText: {
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 10,
        paddingLeft: 5,
    },
    userProfileNavBarTextCurrentTab: {
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 10,
        paddingLeft: 5,
        textDecorationLine: 'underline'
    },
    statusText: {
        color: '#09355C',
        fontWeight: 'bold',
    }
})

export default UserProfile;
