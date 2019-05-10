import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
};

export default createStore(
    persistReducer(persistConfig, reducers),
    composeEnhancer(applyMiddleware(thunk)),
);
