import { useState } from 'react'
import { nanoid } from 'nanoid';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonsForm from './components/PersonsForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: nanoid() },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: nanoid() },
    { name: 'Dan Abramov', number: '12-43-234345', id: nanoid() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: nanoid() }
  ])

  const [filter, setFilter] = useState('')

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <Filter
        filter={filter}
        setFilter={setFilter}
      />
      <h2>
        Add a new
      </h2>
      <PersonsForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>
        Numbers
      </h2>
      <Persons
        persons={persons}
        filter={filter}
      />
    </div>
  )
}

export default App