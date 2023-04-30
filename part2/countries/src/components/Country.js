const Country = (props) => {
  return (
    <div>
      {props.name}
      <button onClick={() => props.buttonFiltered(props.name)}>show</button>
    </div>
  );
};

export default Country;
