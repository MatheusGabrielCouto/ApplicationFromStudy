import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

import Home from "./src/pages/Home"
import Cliente from "./src/pages/Cliente" 
import Worker from './src/pages/Worker'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Cliente" component={Cliente} options={{ headerShown: false }} />
        <Stack.Screen name="Worker" component={Worker} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


