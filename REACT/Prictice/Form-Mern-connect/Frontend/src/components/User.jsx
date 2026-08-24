import { useState, useEffect } from "react"

export default function User() {
    const [users, setUsers] = useState([]);

    // get all users data!
    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
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
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <td className="border border-gray-300 bg-slate-600 hover:bg-slate-700 p-2 text-center">{user.name}</td>
                                <td className="border border-gray-300 bg-slate-600 hover:bg-slate-700 p-2 text-center">{user.email}</td>
                                <td className="border border-gray-300 bg-slate-600 hover:bg-slate-700 p-2 text-center">{user.age}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}