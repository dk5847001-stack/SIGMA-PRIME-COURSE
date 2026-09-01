import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import Protected from "./pages/Protected";

function App() {

  return (
    <div className="bg-slate-800 w-full m-0 p-0 text-white min-h-screen">
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
        }
        />

        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/protected" element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
          <Protected />
          </ProtectedRoute>
          } />
      </Routes>
    </div>
  )
}

export default App
