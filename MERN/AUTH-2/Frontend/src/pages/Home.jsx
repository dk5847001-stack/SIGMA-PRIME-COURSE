import { useEffect } from "react"

export default function Home(){

    useEffect(()=>{
        const fetchAuthMiddleware = async () => {
            const token = localStorage.getItem("token");
            try{
                const response = await fetch("http://localhost:3000/",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                const data = await response.json();
                console.log(data);
            }catch(err){
                console.log(err);
            }
        };
        fetchAuthMiddleware();
    }, [])
    return(
        <div>
            <h2 className="text-blue-400 text-center py-2 font-bold text-6xl">Hello, welcome to home page</h2>
        </div>
    )
}