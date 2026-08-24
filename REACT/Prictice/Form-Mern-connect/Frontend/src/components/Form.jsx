import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    let HandleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    let HandleSubmitForm = async (event) =>{
        // event.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/api/users", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        }catch(err){
            console.log("Error", err)
        }
    };

    return (
        <div>
            <form className="flex justify-center flex-col items-center gap-3" onSubmit={HandleSubmitForm}>
                <input className="p-2 border-1 rounded w-80 outline-1 outline-offset-2 outline-cyan-600 border-cyan-800" type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={HandleChange}/>
                <input className="p-2 border-1 rounded w-80 outline-1 outline-offset-2 outline-cyan-600 border-cyan-800" type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={HandleChange}/>
                <input className="p-2 border-1 rounded w-80 outline-1 outline-offset-2 outline-cyan-600 border-cyan-800" type="number" name="age" placeholder="Enter your age" value={formData.age} onChange={HandleChange}/>
                <button className="p-2 border-1 rounded-full bg-slate-600 w-80 outline-1 outline-offset-2 outline-cyan-600 border-cyan-800">Submit Form</button>
            </form>
        </div>
    )
}