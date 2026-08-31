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
        }))
    };

    let handleFormSubmit = async (event) => {
        event.preventDefault();

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

        setFormData({
            name: "",
            email: "",
            password: ""
        })
    }
    return (
        <div className="flex justify-center flex-col items-center py-10">
            <h2 className="text-5xl font-bold text-center py-6">Signup</h2>
            <form onSubmit={handleFormSubmit} className="flex bg-gray-700 outline-gray-400 rounded justify-center items-center p-6 outline-2 w-100 flex-col">
                <input className="outline-2 mb-3 p-2 rounded bg-slate-600 outline-gray-300 w-75" type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
                <input className="outline-2 mb-3 p-2 rounded bg-slate-600 outline-gray-300 w-75" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
                <input className="outline-2 mb-3 p-2 rounded bg-slate-600 outline-gray-300 w-75" type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} />
                <button type="submit" className="bg-blue-700 rounded font-bold hover:bg-blue-800 cursor-pointer outline-1 w-75 p-2">Signup</button>
            </form>
        </div>
    )
}