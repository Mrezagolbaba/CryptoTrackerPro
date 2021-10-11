import React, {useState} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {fetchData} from '../../utils/actions/fetchData';
let windowSize = Dimensions.get('window');
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
function AddCrypto({navigation}) {
  const [name, setName] = useState(null);
  const dispatch = useDispatch();
  const getCryptoData = async () => {
    dispatch(fetchData(name));
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? '' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 20 : 20}
      enabled={Platform.OS === 'ios'}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={20} />
        <Text style={styles.backButton}>Back To list</Text>
      </TouchableOpacity>
      <View style={styles.formHolder}>
        <Text style={styles.titleInput}> Add a Cryptocurrency</Text>
        <TextInput
          style={styles.input}
          placeholder="Use a name or ticker symbol"
          onChangeText={text => setName(text)}
          value={name}
          autoCapitalize="none"
        />
        <View style={styles.holderButton}>
          <TouchableOpacity style={styles.addButton} onPress={getCryptoData}>
            <Text style={styles.textButtn}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  backButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  backButton: {
    color: '#5F7488',
  },
  titleInput: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
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
