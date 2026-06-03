import { useEffect, useState } from "react";
import axios from "axios";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {

  const [tasks, setTasks] = useState([]);

  // fetch the tasks
  useEffect(() => {

    // create function & store in fetchTasks
    const fetchTasks = async () => {

      const response = await fetch('http://localhost:4000/api/tasks')
      // convert the data into json 
      const json = await response.json()

      // is response ok 
      if(response.ok){
        setTasks(json)
      }
    };

    // call the function 
    fetchTasks();

  }, []);

  return (
    <div className="home">
        <div className="taskdetail">
            {tasks && tasks.map((task) => (
              <TaskDetails key={task._id} task={task}/>
            ))}
        </div>
        <div className="taskform">
            <TaskForm/>
        </div>
    </div>
  );
};

export default Home;