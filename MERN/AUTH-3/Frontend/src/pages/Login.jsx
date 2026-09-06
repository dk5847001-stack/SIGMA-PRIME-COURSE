import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
export default function Login() {
    const location = useLocation();
    const messages = location.state?.message;
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value
        }))
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3000/login",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
            const data = await response.json();
            console.log(data);
            if (response.ok && data.success) {
                setMessage(data.message);
                setFormData(data.user);
                setTimeout(() => {
                    navigate("/profile", {replace: true})
                }, 1000);
            } else {
                setMessage(data.message);
            }
        } catch (err) {
            console.log(err);
            setMessage(data.message)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <h2 className="text-xl text-center py-3">Hello, welcome to Login page.</h2><br />
            <form className="flex flex-col items-center gap-4 w-100 justify-center m-auto p-4 bg-slate-500 rounded shadow-xl h-100" onSubmit={handleFormSubmit}>
                {
                    messages && <p>{messages}</p>
                }
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-2 w-75 outline-2 bg-gray-700 outline-gray-400"

                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password..."
                    value={formData.password}
                    onChange={handleInputChange}
                    className="p-2 w-75 outline-2 bg-gray-700 outline-gray-400"

                />
                <button type="submit" className=" p-2 outline-2 outline-blue-400 bg-blue-600 w-75">
                    {
                        loading ? "Logining..." : "Login"
                    }
                </button>
                {
                    message && <p className={`${message.includes("success") ? "text-green-900" : "text-red-900"}`}>{message}</p>
                }
            </form>
        </div>
    )
}