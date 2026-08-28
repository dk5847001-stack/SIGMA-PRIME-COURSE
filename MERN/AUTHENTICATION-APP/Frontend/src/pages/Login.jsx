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

    let handleFromSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
            const data = await response.json();
            console.log(data.token);
            if(data.success){
                localStorage.setItem("token", data.token);
                console.log("login successful");
                navigate("/admin");
            setFormData({
                email: "",
                password: ""
            });
            };
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <h2 className="text-center p-4 text-3xl font-bold">Hello welcome to Login page</h2><br />
            <div className="flex justify-around p-4">
                <div className="left flex flex-col">
                    <h2 className="text-3xl">Hello, welcome to register page</h2>
                </div>
                <div className="right flex flex-col">
                    <form onSubmit={handleFromSubmit} className="flex flex-col p-4 outline-2  rounded outline-cyan-700 bg-slate-700">
                        <label htmlFor="email">Email</label>
                        <input className="outline-1 p-2 mb-2 outline-cyan-600 border-1 border-cyan-500 rounded w-75 bg-slate-800 shadow-xl" type="email" id="email" value={formData.email} onChange={handleInputChange} name="email" placeholder="Enter your email" />

                        <label htmlFor="password">Password</label>
                        <input className="outline-1 p-2 outline-cyan-600 border-1 border-cyan-500 rounded w-75 bg-slate-800 shadow-xl" type="password" id="password" value={formData.password} onChange={handleInputChange} name="password" placeholder="Enter your password" />
                        <button type="submit" className="p-2 outline-1 outline-blue-400 mt-2 rounded bg-blue-600 cursor-pointer hover:bg-blue-700">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}