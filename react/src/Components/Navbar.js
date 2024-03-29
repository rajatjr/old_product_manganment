import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 

/// logout ///////


const Navbar = () => {
    const navigate = useNavigate();
 
    const Logout = async () => {
        try {
             localStorage.clear()
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
 
    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                   
                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
 
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">Home</a>
                    </div>
 
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={Logout} className="button is-light" >
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
 
export default Navbar;



