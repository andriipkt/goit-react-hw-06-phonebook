import { combineReducers } from 'redux';
import { reducerContactsSlice } from './contactsSlice/contactsSlice';
import { reducerFilterSlice } from './filterSlice/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: reducerContactsSlice,
  filter: reducerFilterSlice,
});

export const store = configureStore({ reducer: rootReducer });
