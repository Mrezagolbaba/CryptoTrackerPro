import {
  ADD_CRYPTO,
  REMOVE_CRYPTO,
  GET_CRYPTO,
  GET_CRYPTO_SUCCESS,
} from './type';

export const addCrypto = data => ({
  type: ADD_CRYPTO,
  data,
});

export const deleteCrypto = id => ({
  type: REMOVE_CRYPTO,
  id: id,
});
export const getCrypto = (data, id) => ({
  type: GET_CRYPTO_SUCCESS,
  data,
  id,
});
