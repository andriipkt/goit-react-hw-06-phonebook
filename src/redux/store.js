import { combineReducers } from 'redux';
import { reducerContactsSlice } from './contactsSlice/contactsSlice';
import { reducerFilterSlice } from './filterSlice/filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: reducerContactsSlice,
  filter: reducerFilterSlice,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
