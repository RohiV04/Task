const express = require("express");
const Task = require("../models/tasks");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const task = new Task({
    name: req.body.name,
    description: req.body.description,
    timer: req.body.timer,
    completed: req.body.completed,
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.name = req.body.name;
    task.description = req.body.description;
    task.timer = req.body.timer;
    task.completed = req.body.completed;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports= router;