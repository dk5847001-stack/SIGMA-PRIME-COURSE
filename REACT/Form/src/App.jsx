
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Registr';
function App() {

  return (
    <>
      <Navbar /><br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
