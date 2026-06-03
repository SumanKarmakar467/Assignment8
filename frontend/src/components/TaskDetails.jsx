import {useState} from "react";
import axios from "axios";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TaskDetails = ({ task }) => {

  const [completed, setCompleted] = useState(
    task.status === "Completed"
  );

  // changing the check list
  const handleStatusClick = async () => {

  try {

    const updatedStatus =
      completed ? "Pending" : "Completed";

    await axios.patch(
      `http://localhost:4000/api/tasks/${task._id}`,
      {
        status: updatedStatus
      }
    );

    setCompleted(!completed);

  } catch (error) {

    console.log(error);

  }
};

// delete any task 
  const handleClick = async () => {

  try {

    await axios.delete(
      `http://localhost:4000/api/tasks/${task._id}`
    );

  
    window.location.reload();

  } catch (error) {

    console.log(error);

  }
};


  return (
    <div className="details">
      <div className="task-details">
        <p className="para1">{task.title}</p>
        <p className="para2">
          <strong>{task.priority}</strong>
          {/* {task.priority} */}
        </p>
        <span className="material-symbols-outlined status-icon" onClick={handleStatusClick}>
          {completed ? "check_circle" : "radio_button_unchecked"}
        </span>{" "}
        <p className="para4">
          {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
        </p>
        <span className="material-symbols-outlined" onClick={handleClick}>
          delete
        </span>
      </div>
    </div>
  );
};

export default TaskDetails;
