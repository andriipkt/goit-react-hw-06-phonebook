import { combineReducers } from 'redux';
import { reducerContactsSlice } from './contactsSlice/contactsSlice';
import { reducerFilterSlice } from './filterSlice/filterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contactsPersist',
  storage,
};
const persistedContactsReducer = persistReducer(
  persistConfig,
  reducerContactsSlice
);

export const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filter: reducerFilterSlice,
});

// const persistConfig = {
//   key: 'contactsPersist',
//   storage,
// };
// export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
