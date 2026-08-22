import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Register from "./auth/Register"
import Login from "./auth/Login"
import Weather from "./pages/Weather"
function App() {

  return (
    <>
      <Navbar />

      {/* ------------- PAGE ------------- */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* ------------- PAGE ------------- */}

      <Footer />
    </>
  )
}

export default App
