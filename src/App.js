import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import './Style.css';
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task)=>{
    setTasks([...tasks,task])
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };
  return (
    <div className='App'>
      <header class="header">
  <div class="header-container">
    <h1 class="title">
      Task<span class="highlight">Buddy</span>
    </h1>
    <p class="tagline">Your friendly task manager</p>
  </div>
</header>
      <TaskForm addTask = {addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <ProgressTracker tasks={tasks} />

      {tasks.length>0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
       )}

    </div>
  );
}

export default App;