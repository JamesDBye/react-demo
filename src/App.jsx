import { useEffect, useState } from 'react'
import './App.css'

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
          <table border="1">
            <thead>
              <tr>
                <th>Project Code</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>

            <tbody>

              {projects.map(project => (
                <tr key={project.projectCode}>
                  <td>{project.projectCode}</td>
                  <td>{project.startDate}</td>
                  <td>{project.endDate ?? "Open"}</td>
                </tr>
              ))}

            </tbody>
          </table>
  )
}

export default App