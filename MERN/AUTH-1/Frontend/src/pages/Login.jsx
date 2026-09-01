import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    let handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value
        }))
    };

    let handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
            const data = await response.json();
            if (data.success) {
                console.log(data);
                setFormData({
                    email: "",
                    password: ""
                });
                // save jwt token
                localStorage.setItem("token", data.token);
                localStorage.setItem("user",
                    JSON.stringify(data.user)
                );

                setTimeout(() => {
                    navigate("/");
                }, 500);
            }
        } catch (err) {
            console.log(err.message)
        }
    }
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
                    className="w-75 p-2 bg-blue-700 text-white rounded hover:bg-blue-800 cursor-pointer disabled:opacity-50"
                > login
                </button>
            </form>

        </div>
    );
}