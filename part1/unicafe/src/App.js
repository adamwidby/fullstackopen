import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const DisplayStats = ({ good, neutral, bad }) => {
  const totalScores = good + neutral + bad;
  let averageScore = "";
  let positiveRate = "";
  console.log(totalScores);
  if (totalScores !== 0) {
    averageScore = (good - bad) / totalScores;
    positiveRate = good / totalScores;
  } else {
    averageScore = "No data yet";
  }
  return (
    <>
      <h2>Statistics</h2>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {totalScores}</div>
      <div>Average: {averageScore}</div>
      <div>Positive: {positiveRate * 100} %</div>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
      <br />
      <DisplayStats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
