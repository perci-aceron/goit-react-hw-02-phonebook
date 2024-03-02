import React from 'react';
import PhonebookApp from './PhonebookApp';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <PhonebookApp setFilteredContacts={setFilteredContacts} />
      <ContactForm />
      <Filter handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};
