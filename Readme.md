# This is a To-Do-List Application

# Backend Commands 
    npm init - install package.json
    npm install express - install express
    npm i nodemon - install nodemon
    npm i dotenv - install dotenv for the PORT no & the mongoDb URL  
    npm i mongoose - install mongoose
    npm i cors - 
    npm run dev - run the backend


## URL Endpoints
    GET     /api/tasks               --> Get all the tasks docs
    POST    /api/tasks               --> Create a new task doc
    GET     /api/tasks/:id           --> Get a single task doc
    DELETE  /api/tasks/:id           --> Deletes a single task doc
    PATCH   /api/tasks/:id           --> update a single task

# Workflow 

    index.js ( app.use('/api/tasks', taskRoutes) )
        ⬇️
    task.js ( getTasks, getTask, createTask, updateTask, deleteTask )
        ⬇️
    taskController.js ( all the task.js methods functionality available )
        ⬇️
    taskModel.js ( the schema of the to do list is here )
        ⬇️


# Frontend
    npm create vite@latest - install the vite react 
    npm i react-router-dom - for routes 
    npm run dev - run the frontend
    npm install axios
    npm install date-fns
    

# Workflow 
                    src
                    ⬇️
                main.jsx
                    ⬇️
                App.jsx  
                    ⬇️
( componets )   Navbar  &   Home ( pages )
                              ⬇️
                            TaskDetails & TaskForm ( components )

    TaskDetails - delete function & change the circle to be checked 
    TaskForm - Add a new task 

# Display the data
    I do not use local storage
    I use   window.location.reload(); automatically refresh and show the new data or delete the data 
