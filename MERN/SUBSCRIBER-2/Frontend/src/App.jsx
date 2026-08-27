import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Edit from "./pages/Edit"
function App() {

  return (
    <div className="bg-slate-900 min-h-screen w-full text-white">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/edit/:id" element={<Edit/>} />
    </Routes>
    </div>
  )
}

export default App
