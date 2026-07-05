import { useEffect, useState } from 'react'
import './App.css'
import ProjectTable from './components/ProjectTable'

function App() {
  // State containing all projects
  const [projects, setProjects] = useState([])
  // selectedProject is a state variable that holds the currently selected project, e.g.'Woody'
  const [selectedProject, setSelectedProject] = useState(null)
  useEffect(() => {
                  fetch("http://localhost:8080/windmill")
                    .then(response => response.json())
                    .then(data => {
                      setProjects(data)
                    })
                }, [])
  return (
          // Pass the projects state variable as a prop to the ProjectTable component
          <>
              <ProjectTable
                  projects={projects}
                  onProjectSelected={setSelectedProject}
              />
              {/* beneath the table, display the selected project code or "None" if no project is selected */}
              <p>
                  Selected Project:
                  {" "}
                  {selectedProject
                      ? selectedProject.projectCode
                      : "None"}
              </p>
          </>         
            )
}

export default App