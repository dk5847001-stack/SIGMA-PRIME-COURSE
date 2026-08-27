import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Admin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState([]);

    useEffect(() => {
        let fetchSubscriber = async () => {
            try {
                let response = await fetch("http://localhost:3000/api/subscribers");
                let data = await response.json();
                console.log(data.email);
                setEmail(data.email);
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchSubscriber();
    }, []);

    const handleDeleteSubscriber = async (id) =>{
        try{
            let response = await fetch(`http://localhost:3000/api/subscribers/${id}`,
                {
                    method: "DELETE"
                },
            );
            let data = await response.json();
            console.log(data.message);
            setEmail((previousData)=>(
                previousData.filter((email)=> email._id !== id)
            ))
        }catch(err){
            console.log(err.message)
        }
    };

    const handleEditSubscriber = (id)=>{
        navigate(`/edit/${id}`)
    }

    return (
        <div className="p-2">
            <h2 className="text-center py-2 font-bold text-xl">Hello, welcome to Admin panel.</h2><br />
            <table className="w-full text-center items-center">
                <thead>
                    <tr>
                        <th className="outline-1 p-2 bg-cyan-800 hover:bg-cyan-900">Email</th>
                        <th className="outline-1 p-2 bg-cyan-800 hover:bg-cyan-900">Delete</th>
                        <th className="outline-1 p-2 bg-cyan-800 hover:bg-cyan-900">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        email.map((em) => {
                            return (
                                <tr key={em._id}>
                                    <td className="outline-1 p-2 bg-cyan-800 hover:bg-cyan-900">{em.email}</td>
                                    <td onClick={()=> handleDeleteSubscriber(em._id)} className="outline-1 p-2 bg-cyan-800 hover:bg-cyan-900">Delete</td>
                                    <td onClick={() => handleEditSubscriber(em._id)} className="outline-1 p-2 bg-cyan-800 hover:bg-cyan-900">Edit</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}