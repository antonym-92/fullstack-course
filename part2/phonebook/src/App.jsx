import { useState, useEffect } from 'react'
import axios from 'axios';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonsForm from './components/PersonsForm';

const App = () => {
  const [persons, setPersons] = useState([])

  const [filter, setFilter] = useState('')

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
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