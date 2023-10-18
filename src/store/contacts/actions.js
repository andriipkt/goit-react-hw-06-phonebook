import { CREATE_CONTACT, DELETE_CONTACT } from './types';

export const createContact = (name, number) => ({
  type: CREATE_CONTACT,
  payload: { name, number },
});

export const delteContact = concactId => ({
  type: DELETE_CONTACT,
  payload: concactId,
});

// const deleteContact = contactId => {
// setContacts(prevContacts =>
//   prevContacts.filter(contact => contact.id !== contactId)
// );
// };
