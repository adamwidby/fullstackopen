
const Header = (props) => {
  return(
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of Exercises {props.a + props.b + props.c}
      </p>
    </>


  )
}



const App = () => {
  const course = 'Half Stack application development';

  const partsInfo = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ]

  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header name={course} />
      <Content name={part1} exercises={exercises1} />
      <Content name={part2} exercises={exercises2} />
      <Content name={part3} exercises={exercises3} />
      <Total a={exercises1} b={exercises2} c={exercises3} />

    </div>





  )
}



export default App