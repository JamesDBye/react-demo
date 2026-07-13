function TaskTable({ tasks, selectedProject }) {
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
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.taskId}>
                        <td>{task.completed ? "✓" : "○"}</td>
                        <td>{task.taskDescription}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default TaskTable;