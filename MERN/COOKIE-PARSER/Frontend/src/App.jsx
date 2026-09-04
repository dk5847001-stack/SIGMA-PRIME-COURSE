import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
