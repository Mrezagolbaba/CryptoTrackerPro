import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
let windowSize = Dimensions.get('window');
function AddCrypto({navigation}) {
  // const category = useSelector(state => state.category);
  // const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // style={style}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back To list</Text>
      </TouchableOpacity>
      <View style={styles.formHolder}>
        <Text style={styles.titleInput}> Add a Cryptocurrency</Text>
        <TextInput
          style={styles.input}
          placeholder="Use a name or ticker symbol"
          // onChangeText={onChangeText}
          // value={text}
        />
        <View style={styles.holderButton}>
          <TouchableOpacity
            style={styles.addButton}
            // onPress={() => navigate('HomeScreen')}
          >
            <Text style={styles.textButtn}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 55,
  },
  formHolder: {
    marginVertical: '80%',
  },
  input: {
    width: windowSize.width - 50,
    color: '#555555',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    height: 50,
    borderColor: '#6E5BAA',
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  backButton: {
    color: '#5F7488',
  },
  titleInput: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  holderButton: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1BD45',
    width: 150,
    height: 50,
    borderRadius: 10,
    fontSize: 20,
    marginTop: 20,
  },
  textButtn: {
    fontSize: 18,
    fontWeight: '400',
  },
});
export default AddCrypto;
