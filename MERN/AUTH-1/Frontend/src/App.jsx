import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {

  return (
    <div className="bg-slate-800 w-full m-0 p-0 text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
