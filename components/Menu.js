import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Icon } from 'react-native-elements';


const Menu = ({ navigation }) => {
    const UserIcon = <Icon name='user-o' type='font-awesome' size={30} color='#000000' />;
    const BellIcon = <Icon name='bell-o' type='font-awesome' size={30} color='#000000' />;
    const MedkitIcon = <Icon name='medkit' type='font-awesome' size={30} color='#000000' />;
    const HeartIcon = <Icon name='heart-o' type='font-awesome' size={30} color='#000000' />;
    const StethoscopeIcon = <Icon name='stethoscope' type='font-awesome' size={30} color='#000000' />;
    const HomeIcon = <Icon name='home' type='font-awesome' size={30} color='#000000' />;

    return (
        <View style={styles.footer}>
            <TouchableHighlight onPress={() => navigation.navigate('Search Doctors')}>
                <View>
                    {StethoscopeIcon}
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Medicine Translator')}>
                <View>
                    {MedkitIcon}
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Saved Doctors')}>
                <View>
                    {HeartIcon}
                </View>
        
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('User Profile')}>
                <View>
                    {UserIcon}
                </View>
            </TouchableHighlight>
        </View>
    )
};

export default Menu;

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        marginTop: 30,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        // width: 385,
        width: "100%",
        padding: 10,
    },

});
