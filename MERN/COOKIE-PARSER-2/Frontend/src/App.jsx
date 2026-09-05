import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import VerifyOTP from "./pages/VerifyOTP";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <>
            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/verify-otp" element={<VerifyOTP />} />

                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoute/>}>
                <Route path="/profile" element={<Profile />} />
                </Route>

                <Route element={<ProtectedRoute requiredRole="admin" />}>
                <Route path="/admin" element={<Admin />} />
                </Route>

            </Routes>
        </>
    );
}

export default App;