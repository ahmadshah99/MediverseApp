import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import { storeData, getData } from '../utils/auth.js';
import Landing from './Landing';

//const API_URL = Platform.OS === 'ios' ? 'http://localhost:5001' : 'http://10.0.2.2:5001';
const API_URL = 'http://localhost:5001';
const AuthScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [countryofresidence, setCountry] = useState('');
    const [nativelang, setLang1] = useState('');


    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const onSubmitHandler = () => {
        console.log("Submitted Request")
        const payload = {
            firstName,
            lastName,
            email,
            languages: [nativelang],
            medicalConditions: [],
            country: countryofresidence,
            password
        };
        console.log("Payload:\n" + JSON.stringify(payload));
        fetch(`${API_URL}/auth/${isLogin ? 'userLogin' : 'userSignup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(async res => {
                try {
                    const jsonRes = await res.json();
                    console.log("Response: \n" + JSON.stringify(jsonRes));
                    if (res.status === 200) {
                        await storeData("jwt", jsonRes.token);
                        console.log("Retrieved Token: \n" + (await getData("jwt")));
                        //navigation.navigate(Landing);
                        setIsError(false);
                        setMessage("Session token has been stored"); 
                    } else {
                        //onLoggedIn(jsonRes.token);
                        setIsError(true);
                        setMessage(jsonRes.message);          
                    }
                } catch (err) {
                    console.log(err);
                };
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    return (
        <ImageBackground source={require('../assets/images/backgrounds/loggedout.png')} style={styles.image}>
            <View style={styles.card}>
                <Text style={styles.heading}>{isLogin ? 'LOGIN' : 'JOIN US'}</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail}></TextInput>
                        {!isLogin && <TextInput style={styles.input} placeholder="First Name" onChangeText={setFirstName}></TextInput>}
                        {!isLogin && <TextInput style={styles.input} placeholder="Last Name" onChangeText={setLastName}></TextInput>}
                        {!isLogin && <TextInput style={styles.input} placeholder="Country of Residence" onChangeText={setCountry}></TextInput>}
                        {!isLogin && <TextInput style={styles.input} placeholder="Native Language" onChangeText={setLang1}></TextInput>}
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={setPassword}></TextInput>
                        <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => {onSubmitHandler(navigation)}}>
                            <Text style={styles.buttonText}>TO THE MEDIVERSE!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAlt} onPress={onChangeHandler}>
                            <Text style={styles.buttonAltText}>{isLogin ? 'Sign Up' : 'Log In'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        marginTop: '50%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '-10%',
        marginBottom: '30%',
        color: '#035762',
        textAlign: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%',
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#53D8C7',
        paddingTop: 10,
        fontSize: 16,
        minHeight: 40,
    },
    button: {
        width: '80%',
        backgroundColor: '#035762',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
});

export default AuthScreen;