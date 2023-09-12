import React from "react";

const GoalList = (props) => {
  return (
    <div>
      <h2>Goal list</h2>
      <ul>
        {props.goals.map((goal) => {
          return <li key={goal.id}>{goal.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default GoalList;
