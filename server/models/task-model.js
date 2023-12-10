const mongoose = require("mongoose");

const { Schema } = mongoose;
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model("tasks", taskSchema);
module.exports = TaskModel;
