import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<span className="text-4xl">Home Page</span>}></Route>
        <Route path="/search" element={<>Search Page</>}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Router>
  )
}

export default App
