import { useEffect } from "react"
export default function Admin(){

    useEffect(()=>{
        const fetchAdmin = async()=>{
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:3000/api/admin",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const data = await response.json();
            console.log(data);
        };
        fetchAdmin();
    }, [])
    return(
        <div>
            <h2 className="text-center p-4 text-3xl font-bold">Hello welcome to Admin page</h2>
        </div>
    )
}