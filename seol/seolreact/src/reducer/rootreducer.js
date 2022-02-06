import { combineReducers } from 'redux';
import {tokenCHECK} from './reduce';

// reducer 등록 reducer를 등록을 해야되는데, 1개만 등록가능함.
const rootReducer = combineReducers({
    tokenCHECK
})

export default rootReducer;