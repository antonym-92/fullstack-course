import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonsForm from './components/PersonsForm';
import Notification from './components/Notification';
import personsService from './services/personsService';

const App = () => {
  const [persons, setPersons] = useState([])

  const [filter, setFilter] = useState('')

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [notification, setNotification] = useState({notification: null, isError: false})

  useEffect(() => {
    personsService
      .getAll()
      .then(all => setPersons(all))
  }, [])

  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <Notification {...notification} />
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
        setNotification={setNotification}
      />
      <h2>
        Numbers
      </h2>
      <Persons
        persons={persons}
        setPersons={setPersons}
        filter={filter}
      />
    </div>
  )
}

export default App