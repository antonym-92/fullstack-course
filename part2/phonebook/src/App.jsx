import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonsForm from './components/PersonsForm';
import personsService from './services/personsService';

const App = () => {
  const [persons, setPersons] = useState([])

  const [filter, setFilter] = useState('')

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(allPersons => setPersons(allPersons))
  }, [])

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