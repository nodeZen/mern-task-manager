import { configureStore } from '@reduxjs/toolkit'
import tasks from "../src/store/tasks.slice";

export const store = configureStore({
  reducer: {
    tasks,
  },
});