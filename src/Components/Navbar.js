import React from 'react';
import { Link } from "react-router-dom";
import "../Static/Styles/Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCloudSun} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    function turnDark(){
        const x = document.getElementById("app");
        if (x.className === "App"){
          x.className += "dark";
        }
        else{
          x.className = "App";
        }
      }
    function barExpand(){
        const x = document.getElementById("menu");
        if (x.className === "nav-menu"){
            x.className += "responsive";
        }
        else{
            x.className = "nav-menu"
        }
    }
    return (
        <div className="navbar">
            <Link className="logo" to="/blog"> Blog </Link>
            <section className="nav-menu" id="menu">
                <Link to = "/read">Read</Link>
                <Link to = "/write">Write</Link>
                <a onClick={turnDark}>
                <span className="themeSwitch">
                    <FontAwesomeIcon icon={faCloudSun} style ={{color:"white"}} />
                </span>
                </a>
            </section>
            <span className = "bar" id="bar" onClick = {barExpand}>
                    <FontAwesomeIcon icon={faBars} style={{color:"#f07c3a"}} />
            </span>
        </div>
    )
}

export default Navbar
