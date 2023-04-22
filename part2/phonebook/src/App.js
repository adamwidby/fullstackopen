import { useState } from "react";
import DisplayPerson from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const newNameObject = { name: newName, id: persons.length + 1 };

    setPersons(persons.concat(newNameObject));
    setNewName("");
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          console.log(person);
          return <DisplayPerson key={person.id} name={person.name} />;
        })}
      </ul>
      <br />
      <br />
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
