import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import './Nav.css'
import logo from "./logo.png";
function Nav() {
    const [show, handleShow] = useState(false);
    const history = useNavigate();

    const hanldeNavBarSlide = () => {
        console.log("triggered", window.screenY);
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",hanldeNavBarSlide);
        return () => window.removeEventListener("scroll",hanldeNavBarSlide);
    })

    return (
        <div className={`nav ${ show && "nav_black"}`}>
            <div className="nav_contents">
                <img className="nav_logo" src={logo} alt=""/>
        
                <img onClick={() => navigator.push("/profile")}
                className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    )
}

export default Nav;