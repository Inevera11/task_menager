import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

// function App() {
//   return (
//     <div className="Container">
//       <Header />
//     </div>
//   );
// }

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dentist Appointment",
      day: "Feb 26th at 2.30",
      reminder: true,
    },
    {
      id: 2,
      text: "Singing in the shower",
      day: "everyday at 4.30",
      reminder: true,
    },
    {
      id: 3,
      text: "coding",
      day: "Jun 20th at 11.30",
      reminder: false,
    },
    {
      id: 4,
      text: "Mati;s Birthday",
      day: "Sep 5th at 5.30",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="Container">
      <Header
        title="Task tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <div className="Container">
//         <Header />
//         <p>Class</p>
//       </div>
//     );
//   }
// }

export default App;
