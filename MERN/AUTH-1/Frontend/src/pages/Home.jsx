export default function Home(){
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return(
        <div>
            <h2 className="text-center text-4xl font-bold">Hello, {user && user.name} to home page</h2>
        </div>
    )
}