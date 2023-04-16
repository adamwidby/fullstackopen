import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

const Display = ({ headline, value }) => {
  return (
    <div>
      <h1>{headline}</h1>
      <p>{value}</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const pointsInit = {};

  for (let i = 0; i < anecdotes.length; i++) {
    pointsInit[i] = 0;
  }

  console.log(pointsInit);

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ ...pointsInit });

  const setAnecdoteIndex = () => {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  };

  const vote = () => {
    const newPoints = {
      ...points,
    };
    newPoints[selected] = points[selected] + 1;
    setPoints(newPoints);
  };

  const findMostVotes = () => {
    const pointsValues = Object.values(points);
    const mostPoints = Math.max(...pointsValues);

    for (const [key, value] of Object.entries(points)) {
      if (value === mostPoints) {
        return key;
      }
    }
  };

  return (
    <div>
      <Display headline="Anecdote of the Day" value={anecdotes[selected]} />
      <p>has {points[selected]} votes</p>
      <br />

      <Button handleClick={vote} text="vote" />
      <Button handleClick={setAnecdoteIndex} text="randomize!" />

      <Display
        headline="Anecdote with the Most Votes"
        value={anecdotes[findMostVotes()]}
      />
      <Display headline="Votes" value={points[findMostVotes()]} />
    </div>
  );
};

export default App;
