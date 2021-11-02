import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from "./components/Landing";
import BrowseDoctors from "./components/BrowseDoctors";

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
                name="Browse Doctors"
                component={BrowseDoctors}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
