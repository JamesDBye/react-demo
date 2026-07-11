function ProjectTable({ projects, selectedProject,onProjectSelected }) {
    return (
        <table className="project-table">
            <thead>
                <tr>
                    <th>Project Code</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>

            <tbody>
                {projects.map(project => (
                    <tr
                        key={project.projectCode}
                        onClick={() => onProjectSelected(project)}
                        className={
                            project.projectCode === selectedProject?.projectCode
                                ? "selected-row"
                                : ""
                        }
                    >
                        <td>{project.projectCode}</td>
                        <td>{project.startDate}</td>
                        <td>{project.endDate ?? "Open"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProjectTable