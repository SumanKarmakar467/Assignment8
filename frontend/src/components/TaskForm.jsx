import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(title);
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="form">
            <input
                className="enter-task"
                type="text"
                placeholder="Enter task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label className="prio" for="ice-cream">Priority :- </label>
            <select id="ice-cream" name="flavors">
              <option className="imputs" value="chocolate">High</option>
              <option className="imputs" value="strawberry">Medium</option>
              <option className="imputs" value="vanilla">Low</option>
            </select>
            <button className="set">Add Task</button>

        </form>
    </div>
  );
};

export default TaskForm;