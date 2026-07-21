function TaskTable({ tasks, 
                    selectedProject, 
                    onExecuteTask , 
                    executingTaskId,
                    onReviewTask}) {

// Find the first incomplete task, which is the next task that can be executed.
const nextTaskIndex = tasks.findIndex(task => !task.completed);

return (
    <>
        <h2>Workflow Tasks
            {selectedProject && ` for ${selectedProject.projectCode}`}
        </h2>
        <br/>
    <table className="task-table">
        <thead>
            <tr>
                <th>Status</th>
                <th>Task</th>
                <th>Action</th>
            </tr>
        </thead>

        {/* Render each task in a table row. Note the use of the index to determine 
            if the task is the next one to be completed. */}

        <tbody>
            {tasks.map((task, index) => (
                <tr key={task.taskId}>
                    <td>{task.completed ? "✓" : "○"}</td>
                    <td>{task.taskDescription}</td>
                    <td>
                        {/* 
                            Some javascript code to conditionally render the Execute button 

                                !task.completed && (...)

                            if the expression to the left of the && operator evaluates to true
                            then the thing on the right of the && operator will be rendered. 
                            Otherwise nothing will be rendered.

                            Then disable the button unless this row is the next executable task.
                        */}
                        {!task.completed && (
                            <button disabled={index !== nextTaskIndex || executingTaskId !== null} onClick={() => onExecuteTask(task)}>
                                {executingTaskId === task.taskId
                                    ? "Executing..."
                                    : "Execute"}
                            </button>
                        )}

                        {/* Completed task 2 can be reviewed repeatedly. */}
                        {task.taskId === 2 && task.completed && (
                            <button onClick={() => onReviewTask(task)}>
                                Review
                            </button>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
);
}

export default TaskTable;