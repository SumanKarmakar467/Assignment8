// Importing express, routes, get all the methods 
const express = require('express');
const router = express.Router();
const {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController');

/**
 * Route: /api/tasks
 * Method: GET
 * Description: Get all workouts
 * Access: Public 
 * Parameters: None
 */
router.get('/',getTasks)


/**
 * Route: /api/tasks/:id
 * Method: GET
 * Description: Get a single workout by it's ID
 * Access: Public 
 * Parameters: id
 */
router.get('/:id',getTask)



/**
 * Route: /api/tasks
 * Method: POST
 * Description: Create/Add a new workout 
 * Access: Public 
 * Parameters: None
 */
router.post('/',createTask)



/**
 * Route: /api/tasks/:id
 * Method: DELETE
 * Description: Delete a task by it's ID
 * Access: Public 
 * Parameters: id
 */
router.delete('/:id',deleteTask)


/**
 * Route: /api/tasks/:id
 * Method: PATCH
 * Description: Update a task by it's ID 
 * Access: Public 
 * Parameters: id
 */
router.patch('/:id',updateTask)


module.exports = router;