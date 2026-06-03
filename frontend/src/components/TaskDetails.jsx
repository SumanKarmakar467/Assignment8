const TaskDetails = ({task}) => {
  return (

    <div className="workout-details">
        <h4>{task.title}</h4>
        <p><strong>Priority : </strong>{task.priority}</p>
        <p><strong>Status: </strong>{task.status}</p>
        <p>{formatDistanceToNow(new Date(task.createdAt),{addSuffix: true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        
    </div>
    // <div>
    //   <h3>Complete Express Assignment</h3>
    //   <p>Status: Pending</p>
    //   <p>Priority: High</p>

    //   <button>Delete</button>
    // </div>
  );
};

export default TaskDetails;