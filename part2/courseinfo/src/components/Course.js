const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Total = ({ parts }) => {
  const exercisesInArray = parts.map((part) => part.exercises);

  const total = exercisesInArray.reduce((sum, current) => sum + current, 0);
  console.log(total);
  return <div>Total Exercises: {total}</div>;
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      {name} {exercises}
    </div>
  );
};

const Content = ({ parts }) => {
  const partsLI = parts.map((part) => {
    return <Part key={part.id} name={part.name} exercises={part.exercises} />;
  });

  return <div>{partsLI}</div>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
