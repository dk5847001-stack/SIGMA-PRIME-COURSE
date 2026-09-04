import { useEffect, useState } from "react";

export default function Profile(){
    const [users, setUsers] = useState({});
    useEffect(()=>{
        const fetchProfile = async () => {
            try{
                const response = await fetch("http://localhost:3000/profile",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );
                const data = await response.json();
                console.log(data)
                setUsers(data);
            }catch(err){
                console.log(err)
            }
        };
        fetchProfile();
    }, [])
    return(
        <div>
            <h2>Hello <b>{users.name},</b> welcome to your profile</h2><br />
        </div>
    )
}