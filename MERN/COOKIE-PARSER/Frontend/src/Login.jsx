import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });
    const handleInputChange = (event) => {
        setFormData((previousData)=>({
            ...previousData,
            [event.target.name]: event.target.value
        }))
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        const response = await fetch("http://localhost:3000/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(formData)
            }
        );
       const data = await response.json();
       console.log(data)
       navigate("/profile")
    }
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" onChange={handleInputChange} placeholder="Enter your name"  />
                <input type="password" name="password" onChange={handleInputChange} placeholder="Enter your password"  />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}