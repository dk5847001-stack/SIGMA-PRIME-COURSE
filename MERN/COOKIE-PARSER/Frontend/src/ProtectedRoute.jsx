import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
    isLoggedIn,
    loading,
    children
}) {

    if (loading) {
        return <h2>Checking authentication...</h2>;
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
}