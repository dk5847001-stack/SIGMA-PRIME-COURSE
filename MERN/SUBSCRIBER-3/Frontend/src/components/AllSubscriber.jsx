import { useState, useEffect } from "react"

export default function AllSubscriber() {
    const [subscriber, setSubscriber] = useState([]);

    useEffect(() => {
        const fetchSubscriber = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/subscribers");
                const data = await response.json();
                console.log(data.subscriber);
                setSubscriber(data.subscriber);
            } catch (err) {
                console.log(err.message)
            }
        };
        fetchSubscriber();
    }, []);

    let deleteSubscriber = async (id)=>{
        try{
            const response = await fetch(`http://localhost:3000/api/subscribers/${id}`,
                {
                    method: "DELETE",
                }
            );
            let data = await response.json();
            console.log(data);
            setSubscriber(
                subscriber.filter((sub)=>sub._id !== id)
            )
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <div className="overscroll-x-auto p-2">
            <h2 className="text-center py-2">All Subscriber</h2>
            <table className="w-full text-center">
                <thead>
                    <tr className="border-2 text-purple-600">
                        <th className="outline-1 p-2 bg-gray-700 text-yellow-100 hover:bg-slate-500">Email</th>
                        <th className="outline-1 p-2 bg-gray-700 text-yellow-100 hover:bg-slate-500">Edit</th>
                        <th className="outline-1 p-2 bg-gray-700 text-yellow-100 hover:bg-slate-500">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        subscriber.map((sub) => {
                            return (
                                <tr key={sub._id} className="border-2 text-purple-600">
                                    <td className="outline-1 p-2 bg-gray-800 text-yellow-100 hover:bg-slate-700">{sub.email}</td>
                                    <td className="outline-1 p-2 bg-gray-800 text-yellow-100 hover:bg-slate-700">Edit</td>
                                    <td onClick={()=> deleteSubscriber(sub._id)} className="outline-1 p-2 bg-gray-800 text-yellow-100 hover:bg-slate-700">Delete</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}