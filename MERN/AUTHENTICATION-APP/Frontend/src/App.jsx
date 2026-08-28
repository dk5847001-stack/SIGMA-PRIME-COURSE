import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={
          <ProtectedRoute>
          <Admin/>
          </ProtectedRoute>
          } />
        <Route path="/signup" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
