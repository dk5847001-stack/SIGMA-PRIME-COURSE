import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    let handleInputChange = (evnt) => {
        setFormData((previousData) => ({
            ...previousData,
            [evnt.target.name]: evnt.target.value
        }))
    };

    let handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3000/signup",
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
                    name: "",
                    email: "",
                    password: ""
                });

                setTimeout(()=>{
                    navigate("/");
                }, 1000)
            }else{
                setMessage(data.message);
            }
        } catch (err) {
            console.log(err);
            setMessage("An error occurred while registering the user.");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2 className="text-blue-400 text-center py-2 font-bold text-6xl">Hello, welcome to Register page</h2><br />
            <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 mb-4 w-64" required />
                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 mb-4 w-64" required />
                <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 mb-4 w-64" required />
                <button className="bg-blue-600 p-2 rounded w-63">
                    {loading ? "crating account..." : "Register"}
                </button>
                {
                    message &&
                    <p className={`text-center ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>{message}</p>
                }
            </form>
        </div>
    )
}