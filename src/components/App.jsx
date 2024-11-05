import './App.css';
import initialContacts from '../contacts.json';
import { useState } from 'react';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
