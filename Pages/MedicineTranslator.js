import React, { useState } from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableHighlight,} from 'react-native';
import { Text, Card, Icon, SearchBar, Button } from 'react-native-elements';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Menu from '../components/Menu';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import translationList from '../components/TranslationList';
import {Switch } from 'react-native-elements';
import { Linking } from "react-native";



const MedicineTranslator = ({ navigation }) => {

    const countries = ["United States", "Canada", "United Kingdom", "France", "Italy", "Greece", "United Arab Emirates", "India", "Peru", "Costa Rica", "Morocco", "China"];


    const [toggleState, setToggleState] = useState(0);
    const [medicineSearchValue, setMedicineSearchValue] = useState('');
    const [countrySearchValue, setCountrySearchValue] = useState('');

    const supportedMedications = JSON.stringify(translationList);

    return (
        <View style={styles.mainView}>
            <Text h1 style={styles.titleText}>Translate My Medicine</Text>
            <View style={{ width: '100%' }}>
            <SearchBar
                placeholder="Medication name"
                containerStyle={styles.searchBar}
                inputContainerStyle={{backgroundColor: '#fff'}}
                value={medicineSearchValue}
                onChangeText={setMedicineSearchValue}
                lightTheme
                round
            />

            <Text style = {{ fontSize: 12, marginBottom: 10, marginTop: -20, color: "blue", textDecorationLine: "underline", textAlign: "right"}} a onPress = {() => alert(supportedMedications)}>view supported medicines</Text>

            <View style = {{ flexDirection: "row", alignItems: "center" }}>
                <View style = {{ flexDirection: "row", alignItems: 'center', marginRight: 10, marginTop: -20, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 8 }}>
                    {/* <FontAwesome5 name="camera" size={16} color="#53D8C7" /> */}
                    {/* <Text style = {{ color: "#53D8C7" }}> IMAGE {"\n"} SEARCH</Text> */}
                </View>
    
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text h5 style={{ color: '#000000', fontWeight: 'bold', paddingRight: 10}}>Use my location?</Text>
                <Switch value={true} color="#035762" />
            </View>

            {/* <SearchBar
                placeholder="Country"
                containerStyle={styles.searchBar}
                inputContainerStyle={{backgroundColor: '#fff'}}
                lightTheme
                value={countrySearchValue}
                onChangeText={setCountrySearchValue}
                round
            /> */}

<SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
		setCountrySearchValue(selectedItem);
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
    defaultButtonText={"Select country"}
    buttonStyle={styles.dropdown1BtnStyle}
    buttonTextStyle={styles.dropdown1BtnTxtStyle}
    renderDropdownIcon={() => {
        return (
          <FontAwesome name="chevron-down" color={"#444"} size={18} />
        );
      }}
      dropdownIconPosition={"right"}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
    />
    </View>



            <Button
             icon={ <FontAwesome5 name="arrow-right" size={16} color="#53D8C7"/>}
                title="Go!"
                titleStyle={{color: "#53D8C7", padding: 10}}
                buttonStyle={{backgroundColor: "#035762", padding: 15, borderRadius: 100, width: 100, alignItems: 'center'}}
                onPress={() => navigation.navigate('Translation Results', {navigation: navigation, medicineName: medicineSearchValue, countryName: countrySearchValue}) }
            />
            <Button
                        icon={ <FontAwesome5 name="map" size={16} color="#53D8C7"/>}
                        title="Derb Sidi Messaoud 40, Marrakesh, Morocco"
                        titleStyle={{color: "#53D8C7", padding: 10}}
                        buttonStyle={{backgroundColor: "#fff", width: 250, height: 50, alignItems: 'center'}}
                        onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=Derb Sidi Messaoud 40, Marrakesh, Morocco')}
                    />
    

        <Menu navigation={navigation} />
        </View>

    )
};

export default MedicineTranslator;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    searchBar: {
        width: "100%",
        marginBottom: 30,
        marginTop: 15,
        backgroundColor: '#fff',
        // boxShadow:"0px 2px 20px rgba(0, 0, 0, 0.25)",
        borderRadius:50},

    titleText: {
        color: '#035762',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: '5%'
    },
    dropdown1BtnStyle: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFF",
        marginBottom: 10,
        marginTop: 15,
        backgroundColor: '#fff',
        // boxShadow:"0px 2px 20px rgba(0, 0, 0, 0.25)",
        borderRadius:50}
      ,
      dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
      dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
      dropdown1RowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
      },
      dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
