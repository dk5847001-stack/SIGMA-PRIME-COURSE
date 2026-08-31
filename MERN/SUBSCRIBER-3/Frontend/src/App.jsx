import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Admin from "./pages/Admin"

function App() {

  return (
    <div className="bg-slate-800 min-h-screen w-full text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
