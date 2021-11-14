import React from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';

import landingPageMan from '../assets/images/landing-page-man.png'
import landingPageMan2 from '../assets/images/landing-page-man-2.png'

import CardButton from "../components/atoms/CardButton";


const Landing = ({ navigation }) => {
    const doctorButtonIcon = <Icon name='doctor' type='fontisto' size={50} color='#fff'/>;
    const medicineButtonIcon = <Icon name='heartbeat' type='font-awesome' size={50} color='#f50'/>;

    return (
        <ScrollView contentContainerStyle={styles.mainView}>
            <View style={{ margin: 5 }}>
                <Text h1 style={styles.titleText}>The All-You-Need Medical Travel Companion</Text>
                <Text h4>What can we do for you?</Text>
            </View>
            <TouchableHighlight
                underlayColor="#0a94a6"
                onPress={() => navigation.navigate('Search Doctors')}
            >
                <CardButton
                    title="Find a doctor"
                    icon={doctorButtonIcon}
                />
            </TouchableHighlight>

            <TouchableHighlight underlayColor="#0a94a6" onPress={() => navigation.navigate('Medicine Translator')}>
                <CardButton title="Translate my medicine" icon={medicineButtonIcon} />
            </TouchableHighlight>
            
            <View style={styles.landingPageImages}>
                <Image source={landingPageMan} style={{ height: 200, width: 173 }}/>
                <Image source={landingPageMan2} style={{ height: 171, width: 190 }}/>
            </View>
        </ScrollView>
    )
};

export default Landing;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    landingPageImages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleText: {
        color: '#035762',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15
    },
    buttonView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardButton: {
        width: '85%',
        height: 200,
        backgroundColor: '#035762',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
