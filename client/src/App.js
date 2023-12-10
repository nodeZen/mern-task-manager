import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllTasks } from './services/tasks.service';

function App() {

  const tasks = useSelector((state)=>state.tasks);
  const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch(getAllTasks());
  }, [dispatch]);

  useEffect(()=>{
    console.log({tasks});
  }, [tasks]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
