import { useState } from "react";

const TaskForm = () => {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  // create a new task 
  const handleSubmit = async (e) => {

  e.preventDefault();

  // title & priority is not given 
  if (!title || !priority) {
    setError("All Input Fields Are Required !");
    return;
  }

  const task = {
    title,
    priority,
    status: "Pending"
  };

  const response = await fetch(
    "http://localhost:4000/api/tasks",
    {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const json = await response.json();

  if (!response.ok) {
    setError(json.error);
    return;
  }

  setError(null);
  setTitle("");
  setPriority("");

  console.log("New Task Added:", json);

  window.location.reload();
};

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">

        <h3 className="add-task">
          Add a Task
        </h3>

        <input
          className="enter-task"
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="prio">
          Priority :-
        </label>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>

        </select>

        <button className="set">
          Add
        </button>

        {error && <div className="error">{error}</div>}

      </form>
    </div>
  );
};

export default TaskForm;