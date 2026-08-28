import { useState } from "react"

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    let handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value
        }));
    };

    let handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await fetch("http://localhost:3000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
            const data = await response.json();
            console.log(data.message);
            setFormData({
                name: "",
                email: "",
                password: ""
            })

        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="flex justify-around p-4">
            <div className="left flex flex-col">
                <h2 className="text-3xl">Hello, welcome to register page</h2>
            </div>
            <div className="right flex flex-col">
                <form onSubmit={handleFormSubmit} className="flex flex-col p-4 outline-2  rounded outline-cyan-700 bg-slate-700">
                    <label htmlFor="name">Name</label>
                    <input className="outline-1 mb-2 outline-cyan-600 border-1 border-cyan-500 p-2 rounded w-75 bg-slate-800 shadow-xl" type="text" value={formData.name} onChange={handleInputChange} id="name" name="name" placeholder="Enter your name" />

                    <label htmlFor="email">Email</label>
                    <input className="outline-1 p-2 mb-2 outline-cyan-600 border-1 border-cyan-500 rounded w-75 bg-slate-800 shadow-xl" type="email" id="email" value={formData.email} onChange={handleInputChange} name="email" placeholder="Enter your email" />

                    <label htmlFor="password">Password</label>
                    <input className="outline-1 p-2 outline-cyan-600 border-1 border-cyan-500 rounded w-75 bg-slate-800 shadow-xl" type="password" id="password" value={formData.password} onChange={handleInputChange} name="password" placeholder="Enter your password" />
                    <button type="submit" className="p-2 outline-1 outline-blue-400 mt-2 rounded bg-blue-600 cursor-pointer hover:bg-blue-700">Register</button>
                </form>
            </div>
        </div>
    )
}