import {IMG_URL} from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    
    const [btnNameReact,setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items);

    //if no dependency array is specified, then useEffect will be called on every render
    //if empty dependency array is specified [], then useEffect ONLY call in initial render. Not every render


    return (
        <div className="flex justify-between bg-pink-100 shadow-lg px-1">
            <div className="logo-container">
                <img className="w-50" src={IMG_URL}/>                
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? '✔' : '😱'}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems?.length} items)</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <button className="login-button" onClick={()=>{ btnNameReact=== "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login") }}>{btnNameReact}</button>
                    <li>Welcome, {loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
