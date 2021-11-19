import React, { useState } from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableHighlight,} from 'react-native';
import { Text, Card, Icon, SearchBar, Button } from 'react-native-elements';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Menu from '../components/Menu';

const MedicineTranslator = ({ navigation }) => {
    const [toggleState, setToggleState] = useState(0);
    const [medicineSearchValue, setMedicineSearchValue] = useState('');
    const [countrySearchValue, setCountrySearchValue] = useState('');

    return (
        <View>
            <ScrollView contentContainerStyle={styles.mainView}>
            <Header navigation={navigation} />
            <Text h3 style = {{ marginTop: 10, color: "#035762" }}>Translate My Medicine</Text>
            <SearchBar
                placeholder="Medication name"
                containerStyle={styles.searchBar}
                inputContainerStyle={{backgroundColor: '#fff'}}
                value={medicineSearchValue}
                onChangeText={setMedicineSearchValue}
                lightTheme
                round
            />

            <View style = {{ flexDirection: "row", alignItems: "center" }}>
                <View style = {{ flexDirection: "row", alignItems: 'center', marginRight: 10, marginTop: -20, backgroundColor: "#035762", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 8 }}>
                    <FontAwesome5 name="camera" size={24} color="#53D8C7" />
                    <Text style = {{ color: "#53D8C7" }}> IMAGE {"\n"} SEARCH</Text>
                </View>

                <View style = {{ flexDirection: "row", alignItems: 'center', marginBottom: 20, backgroundColor: "#035762", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 8 }}>
                    <AntDesign name="upload" size={24} color="#53D8C7" />
                    <Text style = {{ color: "#53D8C7" }}> SUBMIT NEW {"\n"} MEDICATION</Text>
                </View>
            </View>

            <TouchableHighlight onPress={() => setToggleState(!toggleState)}>
                <View style = {{ flexDirection: "row", alignItems: "center" }}>
                    <Text style = {{ fontWeight: "bold" }}>Use my location? </Text>
                    <FontAwesome5  name = {(toggleState === true) ? "toggle-on" : "toggle-off"} size={24} color="black" />
                </View>
            </TouchableHighlight>
            <SearchBar
                placeholder="Country"
                containerStyle={styles.searchBar}
                inputContainerStyle={{backgroundColor: '#fff'}}
                lightTheme
                value={countrySearchValue}
                onChangeText={setCountrySearchValue}
                round
            />
            <Button
                title="Translate My Medicine"
                buttonStyle={{ backgroundColor: "#035762", padding: 15 }}
                onPress={() => navigation.navigate('Translation Results', {navigation: navigation, medicineName: medicineSearchValue, countryName: countrySearchValue}) }
            />

        </ScrollView>
        <Menu navigation={navigation} /> 
        </View>

    )
};

export default MedicineTranslator;

const styles = StyleSheet.create({
    mainView : {
        padding: 20,
        marginBottom: 250
    },
    searchBar: {
        marginBottom: 30,
        marginTop: 15,
        backgroundColor: '#fff' 
    }
});
