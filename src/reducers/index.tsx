import { combineReducers } from 'redux';
import dataReducer from './data.reducer.tsx';

const rootReducers = combineReducers({
    dataReducer,
})

export default rootReducers;