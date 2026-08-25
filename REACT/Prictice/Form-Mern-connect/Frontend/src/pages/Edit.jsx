import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({});
    
    // Get single user
    useEffect(()=>{
        const fetchUser = async () =>{
            try{
                const response = await fetch(
                    `http://localhost:3000/api/users/${id}`
                );
                const data = await response.json();
                setUser(data.user);
                console.log(data.user);
            }catch(err){
                console.log("Error", err)
            }
        };
        fetchUser();
    }, [id])

    let handleInputChange = (event) => {
        setUser((previousUser)=>({
            ...previousUser,
            [event.target.name]: event.target.value
        }))
    };

    let handleUpdateForm = async (event) => {
        event.preventDefault();
        try {
            let response = await fetch(`http://localhost:3000/api/users/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                }
            )
            let data = await response.json();
            console.log(data);
            if(response.ok){
                alert("User updated successfully!");
                navigate("/")
            }
        } catch (err) {
            console.log("Error", err)
        }
    }

    return (
        <div>
            <h2 className="text-center">Edit your form</h2><br />
            <div className="p-4 border-1 w-200 m-auto h-100 items-center rounded py-24 bg-slate-800 border-cyan-700">
                <form onSubmit={handleUpdateForm} className="flex justify-center flex-col items-center gap-3">
                    <input className="p-2 border-1 rounded w-80 outline-1 outline-offset-2 outline-cyan-600 border-cyan-800" type="text" name="name" value={user.name || ""} onChange={handleInputChange} placeholder="Enter your name" />
                    <input className="p-2 border-1 rounded w-80 outline-1 outline-offset-2 outline-cyan-600 border-cyan-800" type="text" name="email" value={user.email || ""} onChange={handleInputChange} placeholder="Enter your email" />
                    <input className="p-2 border-1 rounded w-80 outline-1 outline-offset-2 outline-cyan-600 border-cyan-800" type="number" name="age" value={user.age || ""} onChange={handleInputChange} placeholder="Enter your age" />
                    <button type="submit" className="p-2 border-1 rounded-full bg-slate-600 w-80 outline-1 outline-offset-2 outline-cyan-600 border-cyan-800 hover:bg-slate-700 hover:cursor-pointer">Update Form</button>
                </form>
            </div>
        </div>
    )
}