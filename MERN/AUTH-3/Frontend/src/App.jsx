import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Unauthorized from "./pages/Unauthorized"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <div className="w-full min-h-screen bg-slate-800 text-white">
      <Navbar /><hr className="text-gray-200" />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute requiredRole="admin" />}>
        <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </div>
  )
}

export default App
