import Homepage from "./pages/Homepage"
import Solution from "./pages/Solution"
import { Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/solution" element={<Solution></Solution>}></Route>
    </Routes>
    </>
)
}

export default App
