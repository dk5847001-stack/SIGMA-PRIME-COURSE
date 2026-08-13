import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Lottery from "./pages/Lottery"
function App() {

  return (
    <>
      <Navbar /><br />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="lottery" element={<Lottery />} />
    </Routes>
  
    </>
  )
}

export default App
