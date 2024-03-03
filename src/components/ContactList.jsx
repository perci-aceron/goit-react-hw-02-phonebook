import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="delete-button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
