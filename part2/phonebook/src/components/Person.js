const Person = (props) => {
  return (
    <li>
      {props.name} {props.number}
      <button onClick={props.removeName}>Delete</button>
    </li>
  );
};

export default Person;
