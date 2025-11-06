import TaskFilter, { type TaskFilterProps } from "./TaskFilter";
import TaskItem from "./TaskItem";
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}
 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}


//1. Map over the tasks and render a TaskListItem for each task
//2. Pass the onStatuschange and onDelete to the TaskListItem
//3. Add the select5 and delete button and use the onStatusChange and onDelete to handle the user interactions
//4. Implement the filter feature

 function TaskList({tasks, onStatusChange,onDelete}:TaskListProps){
    
      const taskListItems=tasks.map((task)=>(
      <li key={task.id}> 
        <TaskItem 
          task={task}
          onStatusChange={onStatusChange} 
          onDelete={onDelete}/>
      </li>)
    )


    //const lowPriority= tasks.filter(onFilterChange:{priority=='low'})

    return(
   
    
            <div>
              <ul className="flex flex-col align-items-center ">
                {taskListItems}
              </ul>
            </div>
            
      
    )
 }
 export default TaskList;