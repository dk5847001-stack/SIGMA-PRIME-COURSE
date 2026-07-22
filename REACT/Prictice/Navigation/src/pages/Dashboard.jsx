import Navbar from "../components/Navbar";
import "../css/style.css";
import { useState } from "react";
export default function Dashboard() {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleLogin() {
        setIsLoggedIn(!isLoggedIn);
    };
    function alertMessage(){
        alert("This feature is not available yet. Please check back later.");
        console.log("This feature is not available yet. Please check back later.");
    }
    return (
        <>
            <p className="welcome-message">Hello Student, Welcome to your dashboard!</p>
            <div className="actions">
                <div className="left">
                    <p><span><i className="fa-solid fa-user"></i></span> Welcome to your profile</p>
                    <label><i className="fa-solid fa-user"></i> Name</label>
                    <input type="text" value="Dilkhush Kumar" disabled />
                    <label><i className="fa-solid fa-envelope"></i> Email</label>
                    <input type="email" value="dilkhush@example.com" disabled />
                    <label><i className="fa-solid fa-phone"></i> Phone</label>
                    <input type="tel" value="+1234567890" disabled />
                </div>
                <div className="right">
                    <p><span><i className="fa-solid fa-bolt"></i></span> Quick Actions</p>
                    <button><span><i className="fa-solid fa-user-edit"></i> </span>Update Profile</button>
                    <button onClick={alertMessage}><span><i className="fa-solid fa-key"></i> </span>Change Password</button>

                    {isLoggedIn ? (
                        <button onClick={handleLogin} style={{ backgroundColor: 'rgba(255, 0, 0, 0.747)', border: "none" }}>
                            <span><i className="fa-solid fa-right-from-bracket"></i> Logout</span>
                        </button>
                    ) : (
                        <button onClick={handleLogin} style={{ backgroundColor: 'rgba(17, 0, 255, 0.75)', border: "none" }}>
                            <span><i className="fa-duotone fa-solid fa-user-lock"></i> Login</span>
                        </button>
                    )}


                </div>
            </div>
        </>
    )
}