import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Edit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [formData, setFormData] = useState({email: ""});

    const handleInputChange = (event) =>{
        setFormData((previousData)=>({
            ...previousData,
            [event.target.name]: event.target.value
        }))
    };

    useEffect(()=>{
        let fetchSubscriber = async ()=>{
            try{
                const rensponse = await fetch(`http://localhost:3000/api/subscribers/${id}`);
                const data = await rensponse.json();
                console.log(data.subscriber);
                setFormData({
                    email: data.subscriber.email
                })
            }catch(err){
                console.log(err.message)
            }
        };
        fetchSubscriber();
    }, [id])

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const fetchSubscriber = async ()=>{
            try{
                const response = await fetch(`http://localhost:3000/api/subscribers/${id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formData)
                    }
                );
                const data = await response.json();
                console.log(data);
                navigate("/admin")
            }catch(err){
                console.log(err.message)
            }
        };
        fetchSubscriber();
    }
    return (
        <div className="p-4 flex justify-center m-10">
            <div className="mt-6 flex max-w-md gap-x-4">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-75 mr-2 min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <button
                        type="submit"
                        className="w-25 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Subscribe
                    </button><br />
                </form>
            </div>
        </div>
    )
}