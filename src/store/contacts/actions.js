import { CREATE_CONTACT, DELETE_CONTACT } from './types';

export const createContact = (name, number) => ({
  type: CREATE_CONTACT,
  payload: { name, number },
});

export const deleteContact = concactId => ({
  type: DELETE_CONTACT,
  payload: concactId,
});
