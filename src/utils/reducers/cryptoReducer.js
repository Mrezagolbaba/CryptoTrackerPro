import {ADD_CRYPTO, GET_CRYPTO, REMOVE_CRYPTO} from '../actions/type';

const INITIAL_DATA = [];

const cryptoReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_CRYPTO:
      return state.concat([action.data]);
    case REMOVE_CRYPTO:
      return state.filter(crypto => crypto.id !== action.id);
    case GET_CRYPTO:
      return (state = {
        ...state,
        items: action.payload?.crypto,
      });
    default:
      return state;
  }
};

export default cryptoReducer;
