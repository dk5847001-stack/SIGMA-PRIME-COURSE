import {useNavigate } from "react-router-dom";

export default function User({ users,setUsers }) {
    const navigate = useNavigate();
    // Delete user
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`,
                {
                    method: "DELETE"
                }
            );
            const data = await response.json();
            console.log(data);
            setUsers((previousUsers)=>
                previousUsers.filter((user)=>user._id !==id)
            );

        } catch (err) {
            console.log("Error", err)
        }
    }

    let handleEdit = (id)=>{
        navigate(`/edit/${id}`)
    }

    return (
        <div>
            <h2 className="text-center">Get all users</h2><br />

            <div className="p-4">
                <table className="table-auto w-full border-separate border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 bg-slate-400 hover:bg-slate-700 p-2 text-center">Name</th>
                            <th className="border border-gray-300 bg-slate-400 hover:bg-slate-700 p-2 text-center">Email</th>
                            <th className="border border-gray-300 bg-slate-400 hover:bg-slate-700 p-2 text-center">Age</th>
                            <th className="border border-gray-300 bg-slate-400 hover:bg-slate-700 p-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td className="border border-gray-300 bg-slate-600 hover:bg-slate-700 p-2 text-center">{user.name}</td>
                                <td className="border border-gray-300 bg-slate-600 hover:bg-slate-700 p-2 text-center">{user.email}</td>
                                <td style={{ backgroundColor: (user.age > 18 && user.age < 26) ? "#9c2542" : ((user.age > 25 && user.age < 40) ? "#c90016" : (user.age > 0 && user.age < 19) && "#4e1609") }} className="border border-gray-300 bg-slate-600 hover:bg-slate-700 p-2 text-center">{user.age}</td>
                                <td className="border border-gray-300 bg-slate-600 hover:bg-slate-700 p-2 text-center"><span onClick={() => handleDelete(user._id)} className="rounded-full border-1 py-2 px-5 hover:cursor-pointer hover:bg-[oklch(28.4%_0.109_3.907)] text-xs bg-[oklch(45.9%_0.187_3.815)]">Delete</span>&nbsp;&nbsp;<span onClick={()=> handleEdit(user._id)} className="rounded-full border-1 py-2 px-5 hover:cursor-pointer hover:bg-[oklch(28.4%_0.109_3.907)] text-xs bg-[oklch(45.9%_0.187_3.815)]">Edit</span></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}