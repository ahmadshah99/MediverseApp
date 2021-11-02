import React from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';

import landingPageMan from '../assets/images/landing-page-man.png'
import landingPageMan2 from '../assets/images/landing-page-man-2.png'

import CardButton from "./atoms/CardButton";


const Landing = ({ navigation }) => {
    const doctorButtonIcon = <Icon name='doctor' type='fontisto' size={50} color='#fff'/>;
    const medicineButtonIcon = <Icon name='heartbeat' type='font-awesome' size={50} color='#f50'/>;

    return (
        <ScrollView contentContainerStyle={styles.mainView}>
            <View style={styles.landingPageImages}>
                <Image source={landingPageMan} style={{ height: 200, width: 173 }}/>
                <Image source={landingPageMan2} style={{ height: 171, width: 190 }}/>
            </View>
            <Text h1 style={styles.titleText}>All you need medical travel companion</Text>
            <Text h4>What can we do for you?</Text>
            <TouchableHighlight
                underlayColor="#0a94a6"
                onPress={() => navigation.navigate('Browse Doctors')}
            >
                <CardButton
                    title="Find a doctor"
                    icon={doctorButtonIcon}
                />
            </TouchableHighlight>
            <CardButton title="Translate my medicine" icon={medicineButtonIcon} />
        </ScrollView>
    )
};

export default Landing;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        padding: 25
    },
    landingPageImages: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        color: '#035762',
        fontWeight: 'bold'
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
