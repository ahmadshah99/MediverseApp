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
import { storeData, getData, removeItemValue } from '../utils/auth.js';
import DialogInput from 'react-native-dialog-input';

const MedicineTranslator = ({ navigation }) => {
    const API_URL = 'http://localhost:5001';
    const countries = ["United States", "Canada", "United Kingdom", "France", "Italy", "Greece", "United Arab Emirates", "India", "Peru", "Costa Rica", "Morocco", "China"];


    const [toggleState, setToggleState] = useState(false);
    const [medicineSearchValue, setMedicineSearchValue] = useState('');
    const [countrySearchValue, setCountrySearchValue] = useState('');
    const [homeCountry, setHomeCountry] = useState('');
    const [medicinesRelatedToCountry, setMedicineRelatedToCountry] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState(''); 
    const [isNewMedDialog, setIsNewMedDialog] = useState(false);

    const supportedMedications = JSON.stringify(translationList);

    function handleNavigationToTranslationResults(){
        if(toggleState === true && medicineSearchValue !== '' && countrySearchValue !== ''){
            navigation.navigate('Translation Results', {navigation: navigation, medicineName: medicineSearchValue, countryName: countrySearchValue});
        }else if(toggleState === false){
            alert("Please enable location to continue");
        }else{
            alert("Please fill medicine and country information to continue.")
        }
    }

    async function handleTokenChange(){
        setToggleState(!toggleState);
        fetch(`${API_URL}/user/findOne`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${await getData("jwt")}`
            }
        }).then(async res => {
            try{
                const jsonRes = await res.json();
                console.log("Response: \n" + JSON.stringify(jsonRes));   
                if (res.status === 200) {
                    setIsError(false);
                    setMessage("Home country fetched successfully");
                    const homeCountry = JSON.parse(JSON.stringify(jsonRes)).country;
                    setHomeCountry(homeCountry);

                    //set medicines data
                    let medicinesArr = [];
                    translationList.forEach(med => {
                    let cur = med.medicines.find(medInCountry => medInCountry.countries.includes(homeCountry));
                    if(cur !== undefined){
                        console.log(cur);
                        medicinesArr.push(cur.name);
                    }
                });
                setMedicineRelatedToCountry(medicinesArr);
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
        <View>
            <ScrollView contentContainerStyle={styles.mainView}>
            <Header navigation={navigation} />
            <Text h3 style = {{ marginTop: 10, color: "#035762" }}>Translate My Medicine</Text>


            <TouchableHighlight>
                <View style = {{ flexDirection: "row", alignItems: "center" }}>
                    <Text style = {{ fontWeight: "bold" }}><Text style={{ color: "red" }}>* </Text>Use home country's location? </Text>
                    <FontAwesome5 onPress={() => handleTokenChange()}  name = {(toggleState === true) ? "toggle-on" : "toggle-off"} size={24} color="black" />
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

<View style={{ flexDirection: "row" }}>
<Text style={{ fontWeight: 'bold', color: 'red', marginTop: 15, fontSize: 18 }}>* </Text>
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
    defaultButtonText={"Destination country"}
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



            <View style = {{ flexDirection: "row", alignItems: "center" }}>
                <View style = {{ flexDirection: "row", alignItems: 'center', marginRight: 10, marginTop: -20, backgroundColor: "#035762", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 8 }}>
                    <FontAwesome5 name="camera" size={24} color="#53D8C7" />
                    <Text style = {{ color: "#53D8C7" }}> IMAGE {"\n"} SEARCH</Text>
                </View>

                <View style = {{ flexDirection: "row", alignItems: 'center', marginBottom: 20, backgroundColor: "#035762", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 8 }}>
                    <AntDesign onPress={() => {
                        if(toggleState){
                            setIsNewMedDialog(true);
                        }else{
                            alert("Please enable location first before submitting a new medicine.")
                        }

                        }} name="upload" size={24} color="#53D8C7" />
                    <Text style = {{ color: "#53D8C7" }}> SUBMIT NEW {"\n"} MEDICATION</Text>
                    <DialogInput 
                        isDialogVisible={isNewMedDialog}
                        title={"Submit new medicine for " + homeCountry}
                        message={"We will use your suggestion to improve our app!"}
                        hintInput ={"Input Medicine"}
                        dialogStyle={{ justifyContent: 'space-between', backgroundColor: "#fff", paddingHorizontal: 10, paddingVertical: 100, borderRadius: 5, width: "90%", height: "50%", justifyContent: 'space-around' }}
                        cancelText={"Cancel  "}
                        submitInput={() => setIsNewMedDialog(false)}
                        closeDialog={() => setIsNewMedDialog(false)}>
                    </DialogInput>
                </View>
            </View>

<Text style = {{ fontSize: 15, marginBottom: 10, fontWeight: 'bold'}}>Please enable location first before selecting a medicine.</Text>
<View style = {{ flexDirection: 'row' }}>
<Text style={{ fontWeight: 'bold', color: 'red', marginTop: 15, fontSize: 18 }}>* </Text>
<SelectDropdown
	data={medicinesRelatedToCountry}
	onSelect={(selectedItem, index) => {
		setMedicineSearchValue(selectedItem);
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
    defaultButtonText={"Select medicine"}
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
                title="Translate My Medicine"
                buttonStyle={{ backgroundColor: "#035762", padding: 15 }}
                onPress={() => handleNavigationToTranslationResults() }
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
