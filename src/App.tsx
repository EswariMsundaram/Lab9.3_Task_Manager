import './App.css'
import {useState} from 'react';
// import UserList from './components/UserList';
// import ContactForm from './components/ContactForm.tsx';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

function App(){
  const [tasks,setTasks]=useState<Task[]>([
    {
      id: "1",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "2025-11-20",
    },
    {
      id: "2",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "pending",
      priority: "medium",
      dueDate: "2025-11-18",
    },
    {
      id: "3",
      title: "Fix login bug",
      description:
        "Resolve the issue where users can't log in with Google OAuth.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-11-14",
    },
    {
      id: "4",
      title: "Write unit tests",
      description: "Add coverage for the user service module.",
      status: "in-progress",
      priority: "low",
      dueDate: "2025-11-22",
    },
    {
      id: "5",
      title: "Deploy to staging",
      description: "Push the latest build to the staging environment for QA.",
      status: "completed",
      priority: "medium",
      dueDate: "2025-11-10",
    },
    
  ])

  const[statusFilter,setStatusFilter]=useState<"pending" | "in-progress" | "completed" | undefined>(undefined);
  const[priorityFilter,setPriorityFilter]=useState<"low" | "medium" | "high" | undefined>(undefined);

  function handleFilterChange(filters){
    setStatusFilter(filters.status)
    setPriorityFilter(filters.priority)
  }

 const filteredTask=tasks
    .filter(task=>!statusFilter||task.status===statusFilter)
    .filter(task=>!priorityFilter||task.priority===priorityFilter);

  const handleDelete= (taskId:string)=>{
    setTasks(prev=>
      prev.filter(item=>item.id!==taskId)
    )
  }

  const handleStatusChange=(taskId: string, newStatus: TaskStatus)=>{
    setTasks(oldStat=>
      oldStat.map(t=>
        t.id===taskId?{...t,status:newStatus}:t
      ))
  }
  return(
    <div>
      <h1 className='text-5xl mb-10'>Tasks Manager App</h1>
      <div>
        <TaskFilter onFilterChange={handleFilterChange} 
        />
     
      <div>
        <TaskList tasks={filteredTask} 
                onDelete={handleDelete} 
                onStatusChange={handleStatusChange} 
        />
      </div>
      
      {/* <UserList />
      <ContactForm /> */}
      </div>
    </div>
  )
}
export default App;

//  <UserProfileCard />
//  import UserProfileCard from './components/UserProfileCard';

