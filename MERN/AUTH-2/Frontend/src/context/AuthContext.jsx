import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchMe = async () => {

        const token = localStorage.getItem("token");

        // Token nahi hai
        if (!token) {
            setUser(null);
            setLoading(false);
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:3000/api/auth/me",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (data.success) {
                setUser(data.user);
            } else {
                setUser(null);
                localStorage.removeItem("token");
            }

        } catch (err) {

            console.log(err);
            setUser(null);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchMe();
    }, []);

    const logout = () => {

        localStorage.removeItem("token");
        setUser(null);

    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                logout,
                fetchMe
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}