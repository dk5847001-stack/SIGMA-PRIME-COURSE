import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
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
        console.log(formData);
        setLoading(true);
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
            console.log(data);
            if (data.success) {
                setMessage(data.message);
                localStorage.setItem("token", data.token);
                localStorage.setItem("user",
                    JSON.stringify(data.user)
                );
                setFormData({
                    email: "",
                    password: ""
                });
                navigate("/", {replace: true})
            }else{
                setMessage(data.message);
            }
        } catch (error) {
            console.log(error);
            setMessage("An error occurred. Please try again later.");
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <h2 className="text-center py-2">hello, welcome to login page</h2>
            <form onSubmit={handleFormSubmit}
                className="flex flex-col items-center gap-2"
            >
                <input type="email"
                name="email" 
                placeholder="Enter your email..." 
                value={formData.email} 
                onChange={handleInputChange}
                className="border py-2 border-gray-400 rounded px-2 py-1 mb-2 w-75"
                 />
                 
                <input type="password"
                name="password" 
                placeholder="Enter your password..." 
                value={formData.password} 
                onChange={handleInputChange}
                className="border border-gray-400 py-2 rounded px-2 py-1 mb-2 w-75"
                 />
                <button className="w-75 bg-blue-500 p-2 rounded hover:bg-blue-700 cursor-pointer">
                    {loading ? "Logining..." : "Login"}
                </button>
                {message &&
                <p className={`text-center ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>{message}</p>
                }
            </form>
        </div>
    )
}