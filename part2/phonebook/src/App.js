import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setNewFiltered] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  console.log("render", persons.length, "people");

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
