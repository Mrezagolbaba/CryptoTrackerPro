import {combineReducers} from 'redux';
import cryptoReducer from './cryptoReducer';

const MainReduces = combineReducers({
  cryptoReducer,
});
export default MainReduces;
