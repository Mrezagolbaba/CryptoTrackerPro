import {Alert} from 'react-native';
import axios from '../../helpers/axios';
import {ADD_CRYPTO_SUCCESS, ADD_CRYPTO} from './type';
export const fetchData = data => {
  return dispatch => {
    axios
      .get(`${data}/metrics`)
      .then(response => {
        return response.data;
      })
      .then(data => {
        dispatch({
          type: ADD_CRYPTO_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        if (error) {
          Alert.alert('Somthing went Wront', 'Can not find your coin!', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
      });
  };
};
