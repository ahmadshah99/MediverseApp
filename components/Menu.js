import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Card, Icon, Avatar } from 'react-native-elements';
import { color } from 'react-native-reanimated';


const Menu = ({ navigation }) => {
    const item =
    {
        id: 0,
        name: 'Terry Day',
        role: 'General Practitioner',
        distance: '1.5',
        language: 'ara',
        rating: 5
    };

    return (
        <View style={styles.footer}>
            <TouchableHighlight onPress={() => navigation.navigate('Search Doctors')}>
                <Image source={require('../assets/images/menu/MagnifyingGlass.png')} style={{ height: 40, width: 40 }} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('User Profile'), { item }}>
                <Image source={require('../assets/images/menu/User.png')} style={{ height: 40, width: 40 }} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('')}>
                <Image source={require('../assets/images/menu/Bell.png')} style={{ height: 40, width: 35 }} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Emergency Call')}>
                <Image source={require('../assets/images/menu/FirstAid.png')} style={{ height: 40, width: 40 }} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Medicine Translator')}>
                <Image source={require('../assets/images/menu/FirstAidKit.png')} style={{ height: 40, width: 40 }} />
            </TouchableHighlight>
        </View>
    )
};

export default Menu;

const styles = StyleSheet.create({
    footer: {

        flex: 1,
        marginTop: 15,
        flexDirection: 'row',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100 %',
        padding: 10,
    },

});