import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            console.log(data);

            if (data.success) {

                setMessage(data.message);

                localStorage.setItem("token", data.token);
                // Save logged-in user
                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );
                console.log("Token saved : ", data.token)
                // Clear form
                setFormData({
                    email: "",
                    password: ""
                });

                // Navigate after login
                navigate("/");

            } else {

                setMessage(data.message);

            }

        } catch (error) {

            console.error("Login Error:", error);

            setMessage("Unable to connect to server!");

        }
    };

    return (
        <div className="flex justify-center flex-col items-center py-10">

            <h2 className="text-5xl font-bold text-center py-6">
                Login
            </h2>

            <form
                onSubmit={handleFormSubmit}
                className="flex bg-gray-700 outline-gray-400 rounded justify-center items-center p-6 outline-2 w-100 flex-col"
            >

                <input
                    className="outline-2 mb-3 p-2 rounded bg-slate-600 outline-gray-300 w-75"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <input
                    className="outline-2 mb-3 p-2 rounded bg-slate-600 outline-gray-300 w-75"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-700 rounded font-bold hover:bg-blue-800 cursor-pointer outline-1 w-75 p-2"
                >
                    Login
                </button>

                {message && (
                    <p className="mt-4 text-center">
                        {message}
                    </p>
                )}

            </form>

        </div>
    );
}
