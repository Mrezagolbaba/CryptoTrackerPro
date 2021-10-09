/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Home from './src/containers/Home';
import AddCrypto from './src/containers/AddCrypto';

const Stack = createNativeStackNavigator();
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://data.messari.io/api/v2/assets/btc/profile')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }, []);

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
};
export default App;
