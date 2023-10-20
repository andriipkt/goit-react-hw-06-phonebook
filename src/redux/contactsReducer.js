import { combineReducers } from 'redux';

const { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } = require('./types');

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const storageContacts = localStorage.getItem('contacts')
  ? JSON.parse(localStorage.getItem('contacts'))
  : initialContacts;

// export const initialContactsState = {
//   contacts: storageContacts,
// };

// const initialContactsState = [];

const contactsReducer = (state = storageContacts, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filterInitialState = '';
const filterReducer = (state = filterInitialState, { type, payload }) => {
  switch (type) {
    case FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
