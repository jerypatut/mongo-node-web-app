const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-errors');





// Get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});




// Create a task
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});




// Edit a task
const editTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return next(createCustomError(`No task with ID: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});



// Get a single task
const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomError(`Task not found: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});




// Delete a task
const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete(taskID);
    if (!task) {
        return next(createCustomError(`Task not found: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});






// Update a task
const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return next(createCustomError(`Task not found: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask, editTask };
