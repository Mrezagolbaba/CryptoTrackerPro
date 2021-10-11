import {
  ADD_CRYPTO,
  ADD_CRYPTO_SUCCESS,
  GET_CRYPTO,
  GET_CRYPTO_SUCCESS,
  REMOVE_CRYPTO,
  REMOVE_CRYPTO_SUCCESS,
} from '../actions/type';

const initialState = [];

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CRYPTO_SUCCESS:
      return state.concat([action.payload.data]);
    case REMOVE_CRYPTO:
      return state.filter(crypto => crypto.id !== action.id);
    case GET_CRYPTO_SUCCESS:
      state = {
        ...state,
        crypto: action.payload,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
