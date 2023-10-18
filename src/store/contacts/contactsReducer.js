import { nanoid } from 'nanoid';
import { initialContactsState } from './initialState';
import { CREATE_CONTACT, DELETE_CONTACT } from './types';

export const contactsReducer = (
  state = initialContactsState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts
          ? [
              ...state.contacts,
              {
                id: nanoid(),
                ...payload,
              },
            ]
          : {
              id: nanoid(),
              ...payload,
            },
      };

    // case DELETE_CONTACT:
    //   return {
    //     ...state,
    //     contacts: state.contacts ? [

    //     ]
    //   }

    // / setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== contactId)
    // );

    default:
      return state;
  }
};
