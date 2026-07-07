import { useEffect, useState } from 'react'
import './App.css'
import ProjectTable from './components/ProjectTable'

function App() {
  // State variable containing the array of projects returned by the backend.
  const [projects, setProjects] = useState([])
  
  // Holds the currently selected project object.
  // Initially null because no project has been selected yet. Later..
  // // { projectCode: "Woody", startDate: "...", endDate: "..." }
  const [selectedProject, setSelectedProject] = useState(null)
  useEffect(() => {
                  fetch("http://localhost:8080/windmill")
                    .then(response => response.json())
                    .then(data => {
                      setProjects(data)
                    })
                }, [])
  return (
    <>
      {/* Pass the projects state variable as a prop to the ProjectTable component 
          
          React doesn't let child components modify parent state directly.
          Instead, App passes its state setter function (setSelectedProject) to ProjectTable (child).
          ProjectTable calls it when the user selects a project/row.
      */}
      <ProjectTable
        projects={projects}
        onProjectSelected={setSelectedProject}
      />
      {/* beneath the table, display the selected project code or "None" if no project is selected */}
      <p>
        Selected Project:{' '}
        {selectedProject ? selectedProject.projectCode : 'None'}
      </p>
    </>
  )
}

export default App