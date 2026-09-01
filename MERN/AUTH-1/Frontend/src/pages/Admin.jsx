import { useEffect } from "react"

export default function Admin(){

    useEffect(()=>{
        const fetchAdminRoute = async () =>{
            const token = localStorage.getItem("token");
            try{
                const response = await fetch("http://localhost:3000/admin",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                const data = await response.json();
                console.log(data)
            }catch(err){
                console.log(err)
            }
        };
        fetchAdminRoute();
    }, []);

    return(
        <div>
            <h2 className="text-center text-4xl font-bold">Hello, welsome to Admin page</h2>
        </div>
    )
}