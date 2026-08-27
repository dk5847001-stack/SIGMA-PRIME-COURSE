import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [email, setEmail] = useState("");

    useEffect(() => {
        let fetchSubscriber = async () => {
            try {
                let response = await fetch(`http://localhost:3000/api/subscribers/${id}`);
                let data = await response.json();
                console.log(data.subscriber.email);
                setEmail(data.subscriber.email);
            } catch (err) {
                console.log(err.message)
            }

        }
        fetchSubscriber();
    }, []);

    let handleInputChange = (event) => {
        setEmail(event.target.value);
    };
    let handleFormSubmit = (event) => {
        event.preventDefault();
        let fetchSubscriber = async ()=>{
            try{
                let response = await fetch(`http://localhost:3000/api/subscribers/${id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email
                        })
                    }
                )
                const data = await response.json();
                console.log(data.message);
                navigate("/admin")
            }catch(err){
                console.log(err.message)
            }
        }
        fetchSubscriber();
    }
    return (
        <div>
            <h2 className="text-center py-2 font-xl">Hello, welcome to edit page.</h2><br />
            <form className="p-4 items-center text-center" onSubmit={handleFormSubmit}>
                <label htmlFor="email">Email</label>
                <input className="ml-2 outline-3 bg-gray-800 outline-blue-300 p-2 rounded w-75" type="email" id="email" placeholder="Enter your email" value={email} onChange={handleInputChange} />
                <button type="submit" className="ml-2 outline-1 rounded py-2 px-6 bg-blue-700 hover:bg-blue-800 hover:cursor-pointer outline-blue-400">Update Subscriber</button>
            </form>
        </div>
    )
}