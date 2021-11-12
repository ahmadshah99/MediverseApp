import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from "./Pages/Landing";
import SearchDoctors from "./Pages/SearchDoctors";
import BrowseDoctors from "./Pages/BrowseDoctors";
import DoctorProfile from "./Pages/DoctorProfile";
import UserProfile from './Pages/UserProfile';

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
        </Stack.Navigator>
      </NavigationContainer>
    );
};
