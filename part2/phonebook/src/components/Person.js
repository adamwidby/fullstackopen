const DisplayPerson = (props) => {
  console.log("props.name: ", props.name);
  return <li>{props.name}</li>;
};

export default DisplayPerson;
