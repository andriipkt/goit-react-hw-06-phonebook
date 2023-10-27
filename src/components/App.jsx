import Header from './Header/Header';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export function App() {
  return (
    <>
      <Header />
      <section className="container">
        <Phonebook />
        <Filter />
        <ContactList />
      </section>
    </>
  );
}
