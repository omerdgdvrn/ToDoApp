import './App.css';
import Header from "./component/Header";
import CreateTask from "./component/CreateTask";
import Task from "./component/Task";
import { useState } from 'react';
function App() {
const [tasks,setTasks]=useState([

])
  function addTask(newTask) {
    console.log(newTask);
    setTasks((prevTask)=>
    {
       return[
        ...prevTask,
        newTask
       ];
    });
  };
 function deleteTask(id){
  setTasks((prevTask)=>{
    return prevTask.filter((taskItem,index)=>{
      return index !=id;
    })
  })
 }
  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />
      <div className='container'>
      <div className='row my-5'> {tasks.map((taskItem,index)=>{
        return (
          <Task
          key={index}
          id={index}
          title={taskItem.title}
          content={taskItem.content}
          onDelete={deleteTask}
          />
        )
      })}</div>
      </div>
    </div>
  );
}

export default App;
