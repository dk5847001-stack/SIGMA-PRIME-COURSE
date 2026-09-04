export default function Home() {
    const setCookie = async () => {
        try {
            const response = await fetch("http://localhost:3000/set-cookie",
                {
                    method: "GET",
                    credentials: "include"
                }
            );
            const data = await response.json();
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    };

    const getCookie = async () => {
        try {
            const response = await fetch("http://localhost:3000/get-cookie",
                {
                    method: "GET",
                    credentials: "include"
                }
            );
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err)
        }
    };

    const deleteCookie = async () => {
        try {
            const response = await fetch("http://localhost:3000/delete-cookie",
                {
                    method: "GET",
                    credentials: "include"
                }
            );
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <h1>Cookie Parser Mini Project</h1><br />
            <button onClick={setCookie}>Set Cookie</button><br />
            <button onClick={getCookie}>Get Cookie</button><br />
            <button onClick={deleteCookie}>Delete Cookie</button><br />
        </div>
    )
}