import React, { Component } from 'react';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Container, Title, Heading2 } from './App.styled';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Title>Phonebook &#9743;</Title>
        <ContactForm addContact={this.addContact} contacts={this.state.contacts} />

        <Heading2>Contacts</Heading2>
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default App;


// Fata de hw-02-phonebook am transformat componenta dintr-o componentă funcțională într-o componentă bazată pe clase, deoarece componentDidMount și componentDidUpdate sunt disponibile doar în componentele de clasă.

//   componentDidMount: Această metodă este folosită pentru a încărca contactele salvate în localStorage după ce componenta a fost montată (similar cu modul în care useEffect ar funcționa cu o dependință goală []).

// componentDidUpdate: Această metodă este apelată de fiecare dată când componenta se actualizează. Verificăm dacă contactele din state s-au modificat comparativ cu starea anterioară (prevState.contacts). Dacă s-au modificat, actualizăm localStorage cu noile contacte.

