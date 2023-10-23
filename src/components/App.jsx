import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { selectContacts, selectFilter } from 'redux/selectors';
import {
  addContactSlice,
  deleteContactSlice,
} from 'redux/contactsSlice/contactsSlice';
import { addFilterSlice } from 'redux/filterSlice/filterSlice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  //DidUpdate
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContactSlice({ name, number }));
  };

  const hadnleDeleteContact = contactId => {
    dispatch(deleteContactSlice(contactId));
  };

  const handleFilter = event => {
    dispatch(addFilterSlice(event.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Header />
      <section className="container">
        <Phonebook addContact={addContact} />
        <Filter handleFilter={handleFilter} value={filterValue} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={hadnleDeleteContact}
        />
      </section>
    </>
  );
}
