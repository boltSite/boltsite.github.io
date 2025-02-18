import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import formReducer from './reducers/formReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['form'] // form 리듀서만 지속
};

const rootReducer = combineReducers({
    form: formReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
export default store;