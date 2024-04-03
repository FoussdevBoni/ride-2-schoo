import storage from 'redux-persist/lib/storage' 
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const routeReducer = combineReducers({
    user: userSlice
})

const persisionfig = {
    key: 'root',
    version:1,
    storage,
    // whitelist:['currentUser']
};

const persistedReducer  = persistReducer(persisionfig, routeReducer);

export const store = configureStore({
    reducer:persistedReducer,
});

export const persiststore = persistStore(store)