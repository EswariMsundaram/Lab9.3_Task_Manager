import type { TaskStatus } from "./TaskList";

export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => void;
}

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <div className="flex flex-cols">
        <div>
        <div>Status</div>
        <div>
        <select
          defaultValue=""
          onChange={(e) =>
            onFilterChange({ status: e.target.value as TaskStatus })
          }
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      </div>
      
      <div>
      <div>Priority</div>
      <div className="flex flex-wrap">
        <select
          defaultValue=""
          onChange={(e) =>
            onFilterChange({
              priority: e.target.value as "low" | "medium" | "high",
            })
          }
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        </div>
      </div>
    </div>
  );
}
export default TaskFilter;
