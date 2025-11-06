##Components##
TaskList - Lists all the Task Item with the id,title,description,status (pending,in-progress,completed) ,
priority (low,medium,high) and due date
Delete button - removes the task item from the list

TaskItem component - Has task item with all properties. It contains the structure and functionalities are in the parent component TaskList

TaskFilter - Filters lists the task items based on the priority and the status


How did you ensure unique keys for your list items?
By assigning the task id to key in the list using the map function the corresponding task is fetched from the list. 

What considerations did you make when implementing the filtering functionality?
Focused on keeping the filtering logic simple and readable, only applying filters when the user selects them and it updates the tasks.


How did you handle state updates for task status changes?
What challenges did you face when implementing conditional rendering?
The main challenge was making sure the UI responded correctly based on task status.

