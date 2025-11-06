import type { TaskStatus, Task } from "./TaskList";

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div className="p-5 m-4 bg-gray-100 border-2 border-black-800 rounded-lg w-lg">
      <div>{task.title}
      <div className="flex justify-self-end ">
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
      </div>
      <div>
        <p>Task Description: </p> {task.description}
        <p>Task Priority: </p> {task.priority}
        <p>Due: {task.dueDate}</p>
      </div>
      
    </div>
  );
}
export default TaskItem;
