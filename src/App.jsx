import './App.css'

function App() {
    const projects = [
    {
      projectCode: "Windmill",
      startDate: "2014-01-01",
      endDate: "2024-12-31"
    },
    {
      projectCode: "Woody",
      startDate: "2026-05-01",
      endDate: null
    }
  ]
  return (
    <div>
      <h1>Windmill Prototype</h1>
      <p>First project: {projects[0].projectCode}</p>
    </div>
  )
}

export default App