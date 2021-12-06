import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Text, Card, Icon, Button } from 'react-native-elements';

import landingPageMan3 from '../assets/images/landing-page-man-3.png'
import landingPageMan from '../assets/images/landing-page-man.png'
import logo from '../assets/images//logo/logo.png'
import largelogo from '../assets/images//logo/largelogo.png'
import Menu from "../components/Menu";
import AuthScreen from './AuthScreen';

const Landing2 = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.mainView}>
            <View style={styles.topImage}>
                <Image source={landingPageMan} style={{ height: 140, width: 140 }} />
            </View>
            <View style={styles.logoImage}>
                <Image source={largelogo} style={{ height: 130, width: 260 }} />
            </View>
            <View style={styles.titleText}>
                <Text h4 style={styles.titleText}>Go Global with the Travel Companion you need!</Text>
                <Text h4 style={styles.titleText2}>Put your health first.</Text>
            </View>
            <Button
                title="Login"
                titleStyle={{color: "#53D8C7", padding: 10}}
                buttonStyle={styles.goButton}
                color="#53D8C7"
                onPress={() => navigation.navigate("AuthScreen", {navigation: navigation, isLogin: true})} />
            <View style={styles.space} />
            <Button
                title="Sign Up"
                titleStyle={{color: "#53D8C7", padding: 10}}
                buttonStyle={styles.goButton}
                color="#53D8C7"
                onPress={() => navigation.navigate("AuthScreen", {navigation: navigation, isLogin: false})}
            />
            {/* <View style={styles.landingPageImages}>
                <Image source={landingPageMan3} style={{ height: 160, width: 123 }} />
            </View> */}
        </ScrollView>
    )
};

export default Landing2;

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
        //justifyContent: 'flex-end',
    },
    topImage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logoImage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        color: '#035762',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    titleText2: {
        color: '#53D8C7',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    goButton: {
        backgroundColor: '#035762',
        borderRadius: 100,

    },
    space: {
        width: 20,
        height: 20,
    },
});
