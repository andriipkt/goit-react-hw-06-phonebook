import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } from './types';
import { nanoid } from 'nanoid';

export const createContactAction = (name, number) => ({
  type: ADD_CONTACT,
  payload: { id: nanoid(), name, number },
});

export const deleteContactAction = concactId => ({
  type: DELETE_CONTACT,
  payload: concactId,
});

export const filterContactsAction = value => ({
  type: FILTER_CONTACTS,
  payload: value,
});
