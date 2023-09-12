import React, { useState } from "react";

import "./App.css";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish Course" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    }); // Only need this if the newstate depends on the previous state
  };

  return (
    // This is a JSX file, meaning that this portion is converted to a React.createElement()
    <div>
      <h1 className="goal-list">Hello !</h1>{" "}
      {/* Remember to use className instead of class to style html elements */}
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
