import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Edit from "./pages/edit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Protected from "./pages/Protected";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (
        <div className="bg-slate-800 min-h-screen w-full text-white">

            <Navbar />

            <Routes>

                {/* Public Routes */}
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/signup"
                    element={<Register />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/edit/:id"
                    element={<Edit />}
                />


                {/* Admin - फिलहाल public */}
                <Route
                    path="/admin"
                    element={<Admin />}
                />


                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>

                    <Route
                        path="/protected"
                        element={<Protected />}
                    />

                </Route>

            </Routes>

            <Footer />

        </div>
    );
}

export default App;