import { useState } from "react";
import DisplayPerson from "./components/Person";

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
      <div>
        filter shown with
        <input value={filtered} onChange={handleFiltered} />
      </div>
      <h2>Add new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) =>
            person.name.toUpperCase().includes(filtered.toUpperCase())
          )
          .map((person) => {
            return (
              <DisplayPerson
                key={person.id}
                name={person.name}
                number={person.number}
              />
            );
          })}
      </ul>
      <br />
      <br />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
