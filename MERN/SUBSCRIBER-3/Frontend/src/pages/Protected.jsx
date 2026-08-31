import {useEffect} from "react";

export default function Protected(){

    useEffect(()=>{
        const fetchProtectedData = async ()=>{
            try{
                const token = localStorage.getItem("token");

                const response = await fetch("http://localhost:3000/protected",
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
                console.log(err.message)
            }
        };
        fetchProtectedData();
    }, [])

    return(
        <div>
            <h2 className="text-center p-16">This is protected page</h2>
        </div>
    )
}