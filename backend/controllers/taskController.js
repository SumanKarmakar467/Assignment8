// importing models, mongoose
const Task = require('../models/taskModel');
const mongoose = require('mongoose');

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}).sort({
            createdAt: -1
        });

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// Get a single task
exports.getTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const task = await Task.findById(id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.status(200).json(task);
};

// Create a task
exports.createTask = async (req, res) => {
    const {
        title,
        status,
        priority,
        dueDate
    } = req.body;

    try {
        const task = await Task.create({
            title,
            description,
            status,
            priority,
            dueDate
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const task = await Task.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.status(200).json(task);
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.status(200).json({
        message: "Task deleted successfully",
        task
    });
};
