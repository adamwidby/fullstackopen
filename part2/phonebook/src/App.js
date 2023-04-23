import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./services/editPersons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setNewFiltered] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

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

    const newNameObject = {
      name: newName,
      number: newNumber,
    };

    if (isDuplicateName(newName, persons) === true) {
      if (window.confirm(`Replace old number for ${newName} ??`)) {
        const updateNameID = persons.find((person) => person.name === newName);
        personService
          .update(updateNameID.id, newNameObject)
          .then((response) => {
            console.log(response);
            setPersons(
              persons.map((person) =>
                person.id !== updateNameID.id ? person : response.data
              )
            );
            setNewName("");
            setNewNumber("");
          });
      }
      return;
    }

    personService.create(newNameObject).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNumber("");
    });
  };

  const removeName = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      personService.destroy(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
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

      <Persons persons={persons} filtered={filtered} removeName={removeName} />
      <br />
      <br />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
