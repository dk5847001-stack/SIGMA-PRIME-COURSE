import { Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
