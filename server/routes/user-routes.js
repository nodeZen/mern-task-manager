const userRouter = require("express").Router();
const TaskModel = require("../models/task-model");

userRouter.get("/tasks/:id?", async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    if (id) {
      const task = await TaskModel.findById(id);
      res.send(task);
    } else {
      const allTasks = await TaskModel.find({});
      res.send(allTasks);
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

userRouter.post("/task", async (req, res) => {
  const { body } = req;
  const { title, description, status } = body;
  try {
    const newTask = new TaskModel({ title, description, status });
    await newTask.save();
    res.send(body);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

userRouter.delete("/task", async (req, res) => {
  const {
    body: { _id: id },
  } = req;
  try {
    const result = await TaskModel.findByIdAndDelete(id);
    res.send(result);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

userRouter.patch("/task", async (req, res) => {
  const { body } = req;
  const { _id: id } = body;
  console.log({ id, body });
  try {
    const result = await TaskModel.findByIdAndUpdate(id, body, { new: true });
    res.send(result);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = userRouter;
