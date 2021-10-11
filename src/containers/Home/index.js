import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../components/Header';
import Card from '../../components/Card';
import {deleteCrypto} from '../../utils/actions';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const crypto = useSelector(state => state.cryptoReducer);
  const handleDelete = id => {
    dispatch(deleteCrypto(id));
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.sectionContainer}>
        <Header />
        {!crypto.length > 0 && (
          <View style={styles.holderNoItem}>
            <Text style={styles.noItem}>
              There is no data Please add crypto{' '}
            </Text>
          </View>
        )}
        <View>
          <ScrollView>
            <View style={styles.CardItems}>
              {crypto.length > 0 &&
                crypto.map((i, index) => {
                  return (
                    <Card handleDelete={handleDelete} key={index} data={i} />
                  );
                })}
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('AddCrypto')}>
              <Icon name="plus" size={20} color="#546A81" />
              <Text style={styles.textButton}>Add a Cryptocurrency</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {},
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  CardItems: {
    display: 'flex',
    alignItems: 'center',
  },
  textButton: {
    color: '#546A81',
  },
  holderNoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  noItem: {
    color: 'black',
    fontSize: 18,
  },
});
export default Home;
