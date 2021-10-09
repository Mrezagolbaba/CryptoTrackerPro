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
const Home = ({navigation}) => {
  const crypto = useSelector(state => state.crypto);
  const [data, setData] = useState(crypto);
  console.log(crypto);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.sectionContainer}>
        <Header />
        <View style={styles.CardItems}>
          {/* {data.length > 0 &&
            data.map(i => {
              return <Card data={i} />;
            })} */}
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
  CardItems: {},
});
export default Home;
