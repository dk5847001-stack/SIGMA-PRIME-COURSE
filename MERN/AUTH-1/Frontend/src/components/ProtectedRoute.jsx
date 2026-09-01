import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {

    const user = JSON.parse(localStorage.getItem("user"));

    // User is not logged in
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // User doesn't have required role
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}