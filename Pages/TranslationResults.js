import React, { useState } from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableHighlight,} from 'react-native';
import { Text, Card, Icon, SearchBar, Button } from 'react-native-elements';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import TylenolImage from '../assets/images/Tylenol_Image.png';
import DolipraneImage from '../assets/images/Doliprane_Image.png';
import Morocco from '../assets/images/morocco.png';
import { AntDesign } from '@expo/vector-icons';
import TranslationList from '../components/TranslationList';

import CountryFlag from "react-native-country-flag";
import CountryNameToCode from '../components/CountryNameToCode';
import countriesList from '../components/countriesList';
import Menu from '../components/Menu';

const TranslationResults = ({ navigation, route }) => {
    //js code to find output of medcine given route.params.medicineName


    let equivMedicine = '';
    let tempCountry = countriesList.find(country => country.alternatives.includes(route.params.countryName));
    let targetCountry = '';
    if(tempCountry !== undefined){
        targetCountry = tempCountry.key;
    }
    const [medicineSearchValue, setMedicineSearchValue] = useState('');
    const doesMedicineExist = TranslationList.some(medID => medID.medicines.some(medicine => medicine.name === route.params.medicineName));

    if(TranslationList.some(medID => medID.medicines.some(medicine => medicine.name === route.params.medicineName) && medID.medicines.some(medicine => medicine.countries.includes(targetCountry)))){
        let potentialEquivMedicines = TranslationList.find(medID => medID.medicines.some(medicine => medicine.name === route.params.medicineName)).medicines.find(medicine => medicine.countries.includes(targetCountry));
        equivMedicine = potentialEquivMedicines.name;
    }



    return (
        <View>
        <ScrollView contentContainerStyle={styles.mainView}>
            <Header navigation={navigation} />
            <Text style = {{ marginTop: 10, color: "#035762" }}>Please consult a pharmacist or doctor {"\n"}if you intend to use any medication.</Text>
            <SearchBar
                placeholder="New Medicine Search"
                containerStyle={styles.searchBar}
                inputContainerStyle={{backgroundColor: '#fff'}}
                lightTheme
                value={medicineSearchValue}
                onChangeText={setMedicineSearchValue}
                round
            />

            <Button
                title="Translate My Medicine"
                buttonStyle={{ backgroundColor: "#035762", padding: 15, marginBottom: 25 }}
                onPress={() => navigation.navigate('Translation Results', {navigation: navigation, medicineName: medicineSearchValue, countryName: route.params.countryName}) }
            />

            <View style = {{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                <View style = {{ borderColor: "#53D8C7", borderWidth: 2, padding: 5, borderRadius: 5 }}>
                    <Text h4>Input Medicine Name</Text>
                    <Text style = {{ color: "#53D8C7", fontSize: 20, textDecorationLine: "underline" }}>{route.params.medicineName}</Text>
                    <Text><Text style={{ fontWeight: "bold" }}>Purpose: </Text> {doesMedicineExist ? TranslationList.find(medID => medID.medicines.some(medicine => medicine.name === route.params.medicineName)).purpose : "Not Found"}</Text>
                    <Text><Text style={{ fontWeight: "bold" }}>Active Ingredient: </Text> {doesMedicineExist ? TranslationList.find(medID => medID.medicines.some(medicine => medicine.name === route.params.medicineName)).activeIngredient : "Not Found"}</Text>
                    <View style = {{ flexDirection: "row", alignItems: "center" }}>
                        <Text style = {{ marginLeft: 130, fontSize: 12 }}>Full ingredient list</Text>
                        <Entypo name="chevron-down" size={20} color="black" />
                    </View>
                    {/* <Image source={TylenolImage} style = {{ width: 150, height: 150, resizeMode: 'contain' }} /> */}
                </View>

                <AntDesign name="arrowright" size={50} color="#53D8C7" />


            </View>

            {equivMedicine !== '' ?
            <View style = {{ borderColor: "#53D8C7", borderWidth: 2, padding: 5, borderRadius: 5 }}>
                    <View style = {{ flexDirection: "row", alignItems: "center" }}>
                        <Text h4>Known Equivalents </Text>
                        <View style = {{ marginTop: 15 }}>
                            <CountryFlag isoCode={CountryNameToCode.find(country => country.name === targetCountry).code} size={25} />
                            <Text>{targetCountry}</Text>
                        </View>
                    </View>
                    {/* <Text style = {{ fontSize: 22 }}>Accuracy: <Text style = {{ color: "#27AE60" }}>94%</Text></Text> */}
                    <Text style = {{ color: "#53D8C7", fontSize: 20, textDecorationLine: "underline" }}>{equivMedicine}</Text>
                    <Text><Text style={{ fontWeight: "bold" }}>Purpose: </Text> {TranslationList.find(medID => medID.medicines.some(medicine => medicine.name === route.params.medicineName)).purpose}</Text>
                    <Text><Text style={{ fontWeight: "bold" }}>Active Ingredient: </Text> {TranslationList.find(medID => medID.medicines.some(medicine => medicine.name === route.params.medicineName)).activeIngredient}</Text>
                    <View style = {{ flexDirection: "row", alignItems: "center" }}>
                        <Text style = {{ marginLeft: 130, fontSize: 12 }}>full Ingredient list</Text>
                        <Entypo name="chevron-down" size={20} color="black" />
                    </View>
                    {/* <Image source={DolipraneImage} style = {{ width: 150, height: 150, resizeMode: 'contain' }} /> */}
                </View>

                : <View><Text>No Known Equivalents Found.</Text></View>

            }
        </ScrollView>
            <Menu navigation={navigation} />
        </View>
      
    )
};

export default TranslationResults;

const styles = StyleSheet.create({
    mainView : {
        padding: 20,
        marginBottom: 250

    },
    searchBar: {
        marginBottom: 30,
        marginTop: 15,
        backgroundColor: '#fff',
    }
});
