import { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setNewFiltered] = useState("");

  const isDuplicateName = (item, listOfNames) => {
    for (const nameObject of listOfNames) {
      if (item === nameObject.name) {
        return true;
      }
    }
    return false;
  };

  const addName = (event) => {
    event.preventDefault();

    if (isDuplicateName(newName, persons) === true) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newNameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };

    setPersons(persons.concat(newNameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFiltered = (event) => {
    setNewFiltered(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filtered} onChange={handleFiltered} />
      <h2>Add new</h2>
      <PersonForm
        onSubmit={addName}
        newName={newName}
        newNameOnChange={handleNewName}
        newNumber={newNumber}
        newNumberOnChange={handleNewNumber}
      />
      <h2>Numbers</h2>

      <Persons persons={persons} filtered={filtered} />
      <br />
      <br />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
