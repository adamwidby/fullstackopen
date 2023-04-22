import Person from "./Person";

const Persons = (props) => {
  return (
    <ul>
      {props.persons
        .filter((person) =>
          person.name.toUpperCase().includes(props.filtered.toUpperCase())
        )
        .map((person) => {
          return (
            <Person key={person.id} name={person.name} number={person.number} />
          );
        })}
    </ul>
  );
};

export default Persons;
