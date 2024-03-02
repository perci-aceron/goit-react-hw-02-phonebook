import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
