import { useEffect, useState } from 'react'
import './App.css'
import ProjectTable from './components/ProjectTable'

function App() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
                  fetch("http://localhost:8080/windmill")
                    .then(response => response.json())
                    .then(data => {
                      setProjects(data)
                    })
                }, [])
  return (
          <ProjectTable projects={projects} />
  )
}

export default App