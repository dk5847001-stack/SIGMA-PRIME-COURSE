
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AdminDashboard from "./pages/AdminDashboard"

import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <div className="bg-slate-900">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <hr className="text-white" /><Footer />
    </div>
  )
}

export default App
