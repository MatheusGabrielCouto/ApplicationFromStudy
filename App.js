import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from "./src/pages/Home";
import Cliente from "./src/pages/Cliente";
import Worker from './src/pages/Worker';
import Services from './src/pages/Services';
import Request from './src/pages/Request';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Cliente" component={Cliente} options={{ headerShown: false }} />
        <Stack.Screen name="Worker" component={Worker} options={{ headerShown: false }} />
        <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
        <Stack.Screen name="Request" component={Request} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}