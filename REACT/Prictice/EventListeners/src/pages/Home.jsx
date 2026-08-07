import Button from "../components/Button"
import "./Home.css";
export default function Home() {
    return (
        <div className="Home">
            <div className="nav">
                {/* ------------------------------------ */}
                <div className="navLeft">
                    <div className="logo">
                        <h1>🧨EventListener</h1>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                </div>
                {/* ------------------------------------ */}
                <div className="navRight">
                    <button>Sign up</button>
                    <button>Login</button>
                </div>
                {/* ------------------------------------ */}
            </div>
                        <h2>Welcome to the Home Page</h2>
            <div className="section1">
                {/* ------------------------------------ */}
                <div className="left">
                    <button>Name : Dilkhush Kumar</button>
                    <button>Mobile No : 1234567890</button>
                    <button>Email : dilkhush@example.com</button>
                    <button>Name : Dilkhush Kumar</button>
                    <button>Mobile No : 1234567890</button>
                    <button>Email : dilkhush@example.com</button>
                </div>
                {/* -------------------------------------- */}

                <div className="right">
                    <button>Name : Roshan Kumar</button>
                    <button>Mobile No : 1234567890</button>
                    <button>Email : dilkhush@example.com</button>
                    <button>Name : Roshan Kumar</button>
                    <button>Mobile No : 1234567890</button>
                    <button>Email : dilkhush@example.com</button>
                </div>
                {/* -------------------------------------- */}
                
            </div>
            <div className="Button">
                    <Button />
                </div>
        </div>
    )
}