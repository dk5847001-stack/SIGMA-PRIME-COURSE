import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";

import ProtectedRoute from "./components/ProtectedRoute";
import KineticGrid from "./components/KineticGrid";

import "./App.css";

function App() {
  return (
    <div className="app-container">

      {/* =========================
          ANIMATED BACKGROUND
      ========================== */}
      <div className="kinetic-background" aria-hidden="true">
        <KineticGrid />
      </div>

      {/* =========================
          MAIN APPLICATION
      ========================== */}
      <div className="app-content">

        {/* Navbar */}
        <Navbar />

        {/* =========================
            ROUTES
        ========================== */}
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/unauthorized" element={<Unauthorized />} />


          {/* =========================
              PROTECTED PROFILE ROUTE
          ========================== */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Route>


          {/* =========================
              PROTECTED ADMIN ROUTE
              ONLY ADMIN CAN ACCESS
          ========================== */}
          <Route element={<ProtectedRoute requiredRole="admin" />}>
            <Route
              path="/admin"
              element={<Admin />}
            />
          </Route>

        </Routes>

      </div>

    </div>
  );
}

export default App;