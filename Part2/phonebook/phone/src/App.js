import { useState } from 'react'

const Personform = (props) => {
  return (
    <form onSubmit={props.submission}>
      <div>
        name:<input
        value = {props.name}
        onChange = {props.namechange}
      />
      </div>
      <div>
        number:<input
        value = {props.number}
        onChange = {props.numberchange}
      />
      </div>
      <div>
        <button type = "submit">add  </button>
      </div>
    </form>
  )
}

const Persons = (props) => {
  return (
    <div>
    {props.persons.map(person =>

      <Person name = {person.name} number = {person.number} key = {person.name}/>
      
      )}
      </div>
  )
}

const Person = (props) => {
  return (
    <li>
    {props.name} {props.number}
  </li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.findIndex(person => person.name == newName) >= 0){
      window.alert(`${newName} is already added to phonebook`)
    }

    else{
      const noteObject = {
        name: newName, 
        number : newNumber
      }
    
      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewNumber('')

    }
  }
  
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  } 


  return (
    <div>
      <h2>Phonebook</h2>
        <Personform submission = {addPerson} name = {newName} namechange = {handleNameChange} number = {newNumber} numberchange = {handleNumberChange} />
      <h2>Numbers</h2>
        <Persons persons = {persons} />
    </div>
  )
}

export default App
