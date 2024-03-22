import React from 'react'
import "./navbar.css"
import {RiMenu3Line,RiCloseLin }from 'react-icons/ri'
import logo from "../../assets/images/logo.svg"
const Navbar  = ()=>{
    return(
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
            <div className="gpt__navbar-links-logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="gpt3__navbar-links_container">
                <p><a href='#home'>Home</a></p>
                <p><a href='#wgpt3'>What is GPT</a></p>
                <p><a href='#possibility'>Open AI</a></p>
                <p><a href='#features'>Case Studies</a></p>
                <p><a href='#blog'>Library</a></p>

            </div>
            </div>
        </div>
    )
}
export default Navbar;