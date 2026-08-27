import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Home() {
    const [formData, setFormData] = useState("");
    const navigate = useNavigate();
    let handleInptChange = (event) => {
        setFormData(event.target.value);
    };
    let handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

        let fetchEmail = async () => {
            try {
                let response = await fetch("http://localhost:3000/api/subscribers",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: formData
                        })
                    }
                );
                const data = await response.json();
                console.log(data);
                navigate("/admin")
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchEmail();
    }
    return (
        <div>
            <h2 className="text-center py-2 font-bold text-xl">Hello, welcome to home page.</h2><br />
            <form className="p-4 items-center text-center" onSubmit={handleFormSubmit}>
                <label htmlFor="email">Email</label>
                <input className="ml-2 outline-3 bg-gray-800 outline-blue-300 p-2 rounded w-75" type="email" id="email" placeholder="Enter your email" value={formData} onChange={handleInptChange} />
                <button type="submit" className="ml-2 outline-1 rounded py-2 px-6 bg-blue-700 hover:bg-blue-800 hover:cursor-pointer outline-blue-400">Subscribe</button>
            </form>
        </div>
    )
}