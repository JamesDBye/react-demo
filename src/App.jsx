import { useEffect, useState } from 'react'
import './App.css'
import ProjectTable from './components/ProjectTable'
import TaskTable from './components/TaskTable'
import { getProjects } from './services/api'

function App() {
  // State variable containing the array of projects returned by the backend.
  const [projects, setProjects] = useState([])
  
  // Holds the currently selected project.
  // Initially null until the user selects a project.
  const [selectedProject, setSelectedProject] = useState(null)
  useEffect(() => {
                    // async keyword needed because loadProjects uses await 
                    async function loadProjects() {
                        const data = await getProjects();
                        setProjects(data);
                    }
                  //immediately invoke the async function to load projects from the backend.
                  // This is a common pattern for using async functions inside useEffect.
                  loadProjects();
  },[]);
  return (
    <>
      {/* Pass the projects state variable as a prop to the ProjectTable component 
          
          React doesn't let child components modify parent state directly.
          Instead, App passes its state setter function (setSelectedProject) to ProjectTable (child).
          ProjectTable calls it when the user selects a project/row.
      */}
      <ProjectTable
        projects={projects}
        selectedProject={selectedProject}
        onProjectSelected={setSelectedProject}
      />

      <TaskTable />

    </>
  )
}

export default App