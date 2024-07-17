import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Bored from './Screen/Bored';

import Programming from './Screen/Programming';
import Home from './Screen/Home';
import Quote from './Screen/Quote';
import Dog from './Screen/Dog';
import Cat from './Screen/Cat';
import BaconIpsum from './Screen/BaconIpsum';
import Bitcoin from './Screen/Bitcoin';
import AnimationScreen from './Screen/AnimationScreen';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimationScreen">
        <Stack.Screen
          name="Bored"
          options={{ headerShown: false }}
          component={Bored}></Stack.Screen>
        <Stack.Screen
          name="Dog"
          options={{ headerShown: false }}
          component={Dog}></Stack.Screen>
        <Stack.Screen
          name="Cat"
          options={{ headerShown: false }}
          component={Cat}></Stack.Screen>
        <Stack.Screen
          name="Bitcoin"
          options={{ headerShown: false }}
          component={Bitcoin}></Stack.Screen>
             <Stack.Screen
          name="AnimationScreen"
          options={{ headerShown: false }}
          component={AnimationScreen}></Stack.Screen>

        <Stack.Screen
          name="BaconIpsum"
          options={{ headerShown: false }}
          component={BaconIpsum}></Stack.Screen>
        <Stack.Screen
          name="Programming"
          options={{ headerShown: false }}
          component={Programming}></Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}></Stack.Screen>
        <Stack.Screen
          name="Quote"
          options={{ headerShown: false }}
          component={Quote}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
