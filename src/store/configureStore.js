import { createStore, applyMiddleware } from 'redux'
import airQualityReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    airQualityReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;