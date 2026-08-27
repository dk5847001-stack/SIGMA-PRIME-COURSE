import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
function App() {

  return (
    <div className="bg-slate-900 min-h-screen text-white">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
    </div>
  )
}

export default App
