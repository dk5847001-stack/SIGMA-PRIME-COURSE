import "./Footer.css";
import { Link } from "react-router-dom";    

export default function Footer(){
    return(
        <div className="mainFooter">
        <div className="Footer">
        <div className="FooterLeft">
        <h3>Quick Links</h3>
           <Link to="/">Home</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/about">About</Link>
           <Link to="/service">Service</Link>
        </div>
        {/* --------------------------------------------------- */}
        <div className="Medium">
            <h4>for latest update and notification please subscribe🫡</h4><br />
        <form action="/">
        <input type="email" placeholder="Enter email address..."/>
        <button type="submit">Subscribe</button>
        </form>
        
        </div>
        {/* --------------------------------------------------- */}
        <div className="Right">
        <h2>Help center</h2>
        <p>for support</p>
        <p>support@internovatech.in</p>
        <p>contact@internovatech.in</p>
        </div><br />
        </div>
        <p className="allright">Allright Reserved @2026</p>
        </div>
    )
}