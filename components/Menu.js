import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { storeData, getData, removeItemValue } from '../utils/auth.js';


const Menu = ({ navigation }) => {
    const UserIcon = <Icon name='user-o' type='font-awesome' size={30} color='#000000' />;
    const BellIcon = <Icon name='bell-o' type='font-awesome' size={30} color='#000000' />;
    const MedkitIcon = <Icon name='medkit' type='font-awesome' size={30} color='#000000' />;
    const HeartIcon = <Icon name='heart-o' type='font-awesome' size={30} color='#000000' />;
    const StethoscopeIcon = <Icon name='stethoscope' type='font-awesome' size={30} color='#000000' />;
    const HomeIcon = <Icon name='home' type='font-awesome' size={30} color='#000000' />;

    const API_URL = 'http://localhost:5001';
    const [isPremium, setIsPremium] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSavedDoctorsNav(){
        fetch(`${API_URL}/user/isPremium`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await getData("jwt")}`
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
                        navigation.navigate('Saved Doctors');
                    }else{
                        alert("Become a premium user to see saved doctors!")
                    }
                } else {
                    setIsError(true);
                    setMessage(jsonRes.message);          
                }
            }catch(err){
                console.log(err);
            }
        });

    }


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
            <TouchableHighlight onPress={() => handleSavedDoctorsNav()}>
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
