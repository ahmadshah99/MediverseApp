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

const MedicineTranslator = ({ navigation }) => {

    const countries = ["United States", "Canada", "United Kingdom", "France", "Italy", "Greece", "United Arab Emirates", "India", "Peru", "Costa Rica", "Morocco", "China"];


    const [toggleState, setToggleState] = useState(0);
    const [medicineSearchValue, setMedicineSearchValue] = useState('');
    const [countrySearchValue, setCountrySearchValue] = useState('');

    const supportedMedications = JSON.stringify(translationList);

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

            <Text style = {{ fontSize: 14, marginBottom: 10, marginTop: -20, color: "blue", textDecorationLine: "underline" }} a onPress = {() => alert(supportedMedications)}>Click here to see supported medicines</Text>

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

            <TouchableHighlight>
                <View style = {{ flexDirection: "row", alignItems: "center" }}>
                    <Text style = {{ fontWeight: "bold" }}>Use my location? </Text>
                    <FontAwesome5 onPress={() => setToggleState(!toggleState)}  name = {(toggleState === true) ? "toggle-on" : "toggle-off"} size={24} color="black" />
                </View>
            </TouchableHighlight>
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
    },
    dropdown1BtnStyle: {
        width: "80%",
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444",
        marginBottom: 10
      },
      dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
      dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
      dropdown1RowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
      },
      dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
