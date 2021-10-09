import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import UserImage from '../../assets/images.jpeg';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArear}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>CryptoTracker Pro</Text>
        <Image style={styles.userImage} source={UserImage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#324E69',
    height: 110,
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingLeft: 25,
  },
  safeArear: {
    backgroundColor: '#324E69',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});

export default Header;
