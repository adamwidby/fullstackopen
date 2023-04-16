import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const DisplayStatLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const DisplayStats = ({ good, neutral, bad }) => {
  const totalScores = good + neutral + bad;
  let averageScore = "";
  let positiveRate = "";
  if (totalScores !== 0) {
    averageScore = (good - bad) / totalScores;
    positiveRate = good / totalScores;
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <DisplayStatLine text="Good" value={good} />
        <DisplayStatLine text="Neutral" value={neutral} />
        <DisplayStatLine text="Bad" value={bad} />
        <DisplayStatLine text="Total" value={totalScores} />
        <DisplayStatLine text="Average" value={averageScore} />
        <DisplayStatLine text="Positive" value={positiveRate} />
      </table>
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
