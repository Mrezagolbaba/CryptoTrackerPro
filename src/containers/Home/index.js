import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import {useSelector} from 'react-redux';
const Home = ({navigation}) => {
  const crypto = useSelector(state => state.cryptoReducer);
  console.log('home', crypto);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.sectionContainer}>
        <Header />
        {!crypto.length > 0 && (
          <View>
            <Text>There is no data Please add crypto </Text>
          </View>
        )}
        <View style={styles.CardItems}>
          {crypto.length > 0 &&
            crypto.map((i, index) => {
              return <Card key={index} data={i} />;
            })}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AddCrypto')}>
            <Text>Add a Cryptocurrency</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  CardItems: {
    display: 'flex',
    alignItems: 'center',
  },
});
export default Home;
