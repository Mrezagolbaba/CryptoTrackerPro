/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/containers/Home';
import AddCrypto from './src/containers/AddCrypto';

import {fetchData} from './src/utils/actions/fetchData';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen component={AddCrypto} name={'AddCrypto'} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
