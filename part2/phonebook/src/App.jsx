import { useState } from 'react'
import { nanoid } from 'nanoid';

const App = () => {
  const [persons, setPersons] = useState([
    { id: nanoid(), name: 'Arto Hellas', number: '1234567' }
  ])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.find(x => x.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
      
    const newPerson = {
      id: nanoid(),
      name: newName,
      number: newNumber
    }

    setPersons([...persons, newPerson])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App
