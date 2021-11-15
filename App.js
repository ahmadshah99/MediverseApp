import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from "./Pages/Landing";
import SearchDoctors from "./Pages/SearchDoctors";
import BrowseDoctors from "./Pages/BrowseDoctors";
import DoctorProfile from "./Pages/DoctorProfile";
import UserProfile from './Pages/UserProfile';
import MedicineTranslator from './Pages/MedicineTranslator';
import TranslationResults from './Pages/TranslationResults';
import Booking from './Pages/Booking';

const Stack = createNativeStackNavigator();

export default function App() {


    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Landing}
            />
            <Stack.Screen
                name="Search Doctors"
                component={SearchDoctors}
            />
            <Stack.Screen
                name="Browse Doctors"
                component={BrowseDoctors}
            />
            <Stack.Screen
                name="Doctor Profile"
                component={DoctorProfile}
            />
            <Stack.Screen
                name="User Profile"
                component={UserProfile}
            />
            <Stack.Screen
                name="Medicine Translator"
                component={MedicineTranslator}
            />
            <Stack.Screen
                name = "Translation Results"
                component={TranslationResults}
            />
            <Stack.Screen
                name = "Booking"
                component={Booking}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
