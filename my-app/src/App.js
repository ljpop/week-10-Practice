import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App()  {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks]=useState([
    {id:1, 
    text: "Doctor Clinic",
    day: 'Feb 5th at 2:30 pm',
    reminder: true 
},
{id:2, 
    text: "School",
    day: 'Feb 6th at 4:30 pm',
    reminder: true 
},
{id:3, 
    text: "Food",
    day: 'Feb 7th at 2:30 am',
    reminder: false 
}
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() *10000) + 1;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }
//Toggle Reminder
const toggleReminder=(id)=>{
  // console.log(id, tasks[id-1].reminder)
  setTasks(tasks.map((task)=>task.id===id?{...task, reminder:!task.reminder}:task))
  // if (tasks[id-1].reminder) console.log('REMINDER ON')
}
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask} showAdd={showAddTask}/>     
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 'No tasks'}
      
    </div>
  );
}

export default App;
