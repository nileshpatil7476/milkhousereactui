import React from "react";
import '../topnav/Topnav.css'
import { Link } from 'react-router-dom';

const Topnav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light p-2">
            <div className="collapse navbar-collapse" id="navbarID">
                <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                </div>

            </div>
            <div className="nav-item dropdown">
                <Link to="/newUser"><i class="bi bi-person-plus-fill"></i></Link>
            </div>

        </nav>
    );
}

export default Topnav;