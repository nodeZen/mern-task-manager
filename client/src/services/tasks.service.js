import axios from "axios";
import { setTasks } from "../store/tasks.slice";
export const getAllTasks = () => (dispatch) => {
  axios.get("http://localhost:5000/user/tasks/").then((res) => {
    if (Array.isArray(res.data)) {
      dispatch(setTasks(res.data));
    }
  });
};
