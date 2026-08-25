import Form from "../components/Form";
import User from "../components/User";
import { useState, useEffect } from "react";

export default function Home(){
    const [users, setUsers] = useState([]);

    // Get all users
    useEffect(()=>{
        fetch("http://localhost:3000/api/users")
        .then((response)=> response.json())
        .then((data)=>{
            setUsers(data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []);

    return(
        <div>
            <h1 className="text-center text-3xl font-bold font-sans">Hello gyes, welcome to home page.</h1><br /><hr /><br />
            <Form setUsers={setUsers} /><br /><br /><hr /><hr /><br />
            <User users={users} setUsers={setUsers} />
        </div>
    )
}