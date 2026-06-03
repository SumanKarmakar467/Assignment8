import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TaskDetails = ({ task }) => {
  const handleClick = () => {
    console.log("Delete clicked");
  };

  return (
    <div className="details">
      <div className="task-details">
        <p className="para1">{task.title}</p>
        <p className="para2">
          <strong></strong>
          {task.priority}
        </p>
        <span className="material-symbols-outlined status-icon">
          radio_button_unchecked
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
