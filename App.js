import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

import Home from "./src/pages/Home"
import Cliente from "./src/pages/Cliente" 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Cliente" component={Cliente} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


