import { useEffect, useState } from 'react';

import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';

import { createContact } from 'store/contacts/actions';

export function App() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(store => store.contacts);
  const [filterValue, setFilterValue] = useState('');

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

    dispatch(createContact(name, number));
  };

  const deleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilter = event => {
    setFilterValue(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  console.log('filteredContacts', filteredContacts);

  return (
    <>
      <Header />
      <section className="container">
        <Phonebook addContact={addContact} />
        <Filter handleFilter={handleFilter} value={filterValue} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </section>
    </>
  );
}
