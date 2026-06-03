import { useEffect, useState } from "react";
import axios from "axios";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const fetchTasks = async () => {

      try {

        const response = await axios.get(
          "http://localhost:4000/api/tasks"
        );

        setTasks(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchTasks();

  }, []);

  return (
    <div className="home">
        <div className="taskdetail">
            {tasks.map((task) => (
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