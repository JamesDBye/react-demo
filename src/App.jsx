import { useEffect, useState } from 'react'
import './App.css'
import ProjectTable from './components/ProjectTable'
import TaskTable from './components/TaskTable'
import { getProjects, getTasks } from './services/api'

function App() {
  // State variable containing the array of projects returned by the backend.
  const [projects, setProjects] = useState([])
  
  // Holds the currently selected project.
  // Initially null until the user selects a project.
  const [selectedProject, setSelectedProject] = useState(null)

  // State variable containing the array of tasks returned by the backend.
  const [tasks, setTasks] = useState([]);

  // useEffect hook to load projects when the component mounts.
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

//second useEffect hook to load tasks whenever the selected project changes.
useEffect(() => {

    // If no project is selected, don't attempt to load tasks.
    if (selectedProject === null) {
        return;
    }
    
    async function loadTasks() {

        // Call the getTasks function from api.js, passing the selected project's code.
        const data = await getTasks(selectedProject.projectCode);

        // Update the tasks state variable with the data returned from the backend.
        setTasks(data);
    }
    // Immediately invoke the async function to load tasks for the selected project.
    loadTasks();
//
}, [selectedProject]);

//debug
console.log(tasks);

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

      <br/>

      {/* Pass the tasks state variable as a prop to the TaskTable component */}
      <TaskTable 
        tasks={tasks} 
        selectedProject={selectedProject}
      />

    </>
  )
}

export default App