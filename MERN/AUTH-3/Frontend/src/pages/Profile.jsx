import { useEffect, useState } from "react"

export default function Profile() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/profile",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );
                const data = await response.json();
                console.log(data);
                if(response.ok && data.success){
                    setUser(data.user);
                }
            } catch (err) {
                console.log(err)
            }
        };
        fetchProfile();
    }, [])
    return (
        <div>
            <h2 className="text-xl text-center py-3">Hello, welcome to Profile page.</h2>
            <div className="items-center">
            <p>name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Role : {user.role}</p>
            </div>
        </div>
    )
}