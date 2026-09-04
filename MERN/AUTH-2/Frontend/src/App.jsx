import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";

function App() {

  return (
    <div className="bg-slate-800 w-full min-h-screen text-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
          <Home />
          </ProtectedRoute>
          } />
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={["admin"]}>
          <Admin />
          </ProtectedRoute>
          } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/unauthorized" element={<Unauthorized/>} />
        <Route path="/me" element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App
