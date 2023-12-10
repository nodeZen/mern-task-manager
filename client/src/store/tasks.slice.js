import { createSlice } from "@reduxjs/toolkit";
import taskState from "./tasks.state";

export const tasksSlice = createSlice({
  name: "counter",
  initialState: taskState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
