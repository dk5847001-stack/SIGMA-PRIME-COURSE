
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {

        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value
        }));

    };

    const handleFormSubmit = async (event) => {

        event.preventDefault();

        setMessage("");
        setLoading(true);

        try {

            const response = await fetch(
                "http://localhost:3000/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            console.log(data);

            if (data.success) {
                setMessage(data.message);

                // token save
                localStorage.setItem("token", data.token);
                localStorage.setItem("user",
                    JSON.stringify(data.user)
                );

                setFormData({
                    name: "",
                    email: "",
                    password: ""
                });

                // Redirect after successful signup
                setTimeout(() => {
                    navigate("/");
                }, 1000);

            } else {

                setMessage(data.message || "Registration failed!");

            }

        } catch (error) {

            console.error("Signup Error:", error);

            setMessage(
                "Unable to connect to server. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">

            <h2 className="text-center text-4xl font-bold mb-8">
                Welcome to Signup Page
            </h2>

            <form
                className="flex justify-center flex-col items-center gap-3"
                onSubmit={handleFormSubmit}
            >

                <input
                    className="outline-2 outline-gray-400 rounded p-2 w-75"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />

                <input
                    className="outline-2 outline-gray-400 rounded p-2 w-75"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <input
                    className="outline-2 outline-gray-400 rounded p-2 w-75"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-75 p-2 bg-blue-700 text-white rounded hover:bg-blue-800 cursor-pointer disabled:opacity-50"
                >
                    {loading ? "Creating Account..." : "Signup"}
                </button>

                {message && (
                    <p className="text-center mt-2">
                        {message}
                    </p>
                )}

            </form>

        </div>
    );
}