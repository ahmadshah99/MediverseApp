import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Icon, Avatar} from 'react-native-elements'; 

const Header = ({ navigation }) => {
    const rightArrow = <Icon name='arrowright' type='antdesign' color='#53D8C7'/>;


    return (
        <View style={styles.header}>
            <Avatar
                size="medium"
                source={require('../assets/images/logo/logo.png')}
                containerStyle={styles.mediverseLogo}
                onPress = {() => navigation.navigate('Browse Doctors')}
            />
            <Avatar
                size="medium"
                containerStyle={styles.headerProfilePicture}
                rounded
                source={require('../assets/images/mock_profile_picture_user.png')}
                onPress = {() => navigation.navigate('User Profile')}
            />
        </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginBottom: 10,
        flexDirection: 'row',        
    },
    headerProfilePicture: {
    },
    mediverseLogo: {
        width: 240,
        paddingRight: 150
    }
});