import { useEffect } from "react"

export default function Admin() {

    useEffect(() => {
        const fetchAdminMiddleware = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch("http://localhost:3000/admin",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                    }
                );
                const data = await response.json();
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAdminMiddleware();
    }, [])
    return (
        <div>
            <h2 className="text-blue-400 text-center py-2 font-bold text-6xl">Hello, welcome to Admin page</h2>
        </div>
    )
}