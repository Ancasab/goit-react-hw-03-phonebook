// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React, { useState } from 'react';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Container, Title, Heading2 } from './App.styled';

export const  App = () => { 
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook &#9743; </Title>
      <ContactForm addContact={addContact} contacts={contacts} />

      <Heading2>Contacts</Heading2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
}

export default App;



// Acest cod definește componenta principală App dintr-o aplicație React care gestionează o agendă telefonică. Aplicația permite utilizatorilor să adauge contacte, să filtreze contactele existente și să le șteargă. Iată o scurtă descriere a principalelor părți ale codului:

// Explicația funcționalităților:
// State-ul local:

// contacts: O listă de contacte stocată în state, cu fiecare contact având un id, un name și un number. Această listă este inițializată cu câteva contacte de exemplu.
// filter: Un string care este folosit pentru a căuta contacte pe baza numelui.
// Funcții principale:

// addContact: Adaugă un nou contact la lista de contacte existentă.
// deleteContact: Șterge un contact specific din lista de contacte pe baza id-ului.
// filteredContacts: Aplică filtrul pe lista de contacte și returnează doar contactele care conțin string-ul de căutare în nume (indiferent de majuscule).
// Componente importate:

// ContactForm: Un formular pentru adăugarea unui nou contact. Aceasta va apela funcția addContact.
// ContactList: Afișează lista contactelor filtrate și permite ștergerea unui contact.
// Filter: Oferă funcționalitatea de căutare pentru filtrarea contactelor.
// Structură vizuală:

// Container, Title, și Heading2: Elemente stilizate care structurează aspectul aplicației.