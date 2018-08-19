// root reducer exported here
import { combineReducers } from 'redux';
// import other reducers
import timer from './timer';

export default combineReducers({ timer });
