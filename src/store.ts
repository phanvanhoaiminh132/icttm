import { createStore } from 'redux'
import rootReducers from './reducers/index.tsx';

export const store = createStore(rootReducers);