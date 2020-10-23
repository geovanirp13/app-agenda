import React from 'react';
import './App.css';
import Titulo from './components/Titulo';
import ContactList from './components/List/ContactList';

export default function App() {
    return (
      <div className="App">
        <header className="App-header">
            <Titulo />
            <ContactList />
        </header>
      </div>
    )
}