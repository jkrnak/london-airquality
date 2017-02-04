import { createStore } from 'redux'
import airQualityReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    airQualityReducer,
    composeWithDevTools()
);

export default store;