import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Icon } from 'react-native-elements';


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
    const MagnifyingGlassIcon = <Icon name='search' type='font-awesome' size={30} color='#000000' />;
    const UserIcon = <Icon name='user-o' type='font-awesome' size={30} color='#000000' />;
    const BellIcon = <Icon name='bell-o' type='font-awesome' size={30} color='#000000' />;
    const PhoneIcon = <Icon name='phone-plus-outline' type='material-community' size={30} color='#FF0000' />;
    const MedkitIcon = <Icon name='medkit' type='font-awesome' size={30} color='#000000' />;


    return (
        <View style={styles.footer}>
            <TouchableHighlight onPress={() => navigation.navigate('Search Doctors')}>
                <View>
                    {MagnifyingGlassIcon}
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('User Profile'), { item }}>
                <View>
                    {UserIcon}
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('')}>
                <View>
                    {BellIcon}
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Emergency Call')}>
                <View>
                    {PhoneIcon}
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Medicine Translator')}>
                <View>
                    {MedkitIcon}
                </View>
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