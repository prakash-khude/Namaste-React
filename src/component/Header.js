import {IMG_URL} from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    
    const [btnNameReact,setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    console.log(useState(10));
    //if no dependency array is specified, then useEffect will be called on every render
    //if empty dependency array is specified [], then useEffect ONLY call in initial render. Not every render
    useEffect(()=>{
        console.log("In use effect");
    },[]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={IMG_URL}/>                
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? '✔' : '😱'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <button className="login-button" onClick={()=>{ btnNameReact=== "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
