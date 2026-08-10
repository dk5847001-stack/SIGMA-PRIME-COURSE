import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Service from "./pages/Service"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Footer from "./components/Footer"

function App() {

  return (
    <>
     <Navbar /><br />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes><br />
    <Footer />
    </>
  )
}

export default App
