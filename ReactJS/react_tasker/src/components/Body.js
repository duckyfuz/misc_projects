const Body = ({ showAddTask, AddTask, addTask, tasks, Tasks, deleteTask, toggleReminder}) => {
  return (
    <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </>
  );
};

export default Body