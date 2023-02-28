import { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import UserMaster from '../../Masters/Users/UserMaster';
import '../sidenav/Sidenav.css';

const Sidenav = () =>{

    var [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        var myCollapse = document.getElementById('mastersitems')
        var bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })
      
    return(
        // <Router>

<div className="d-flex flex-column flex-shrink-0 text-white side-nav">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    {/* <Link to="/"> */}
                    <a href="/" class="nav-link text-decoration-none"><i class="bi bi-house"></i><span>Home</span></a>
                    {/* </Link> */}
                </li>
                <li className="nav-item">
                    <a className="nav-link text-decoration-none" onClick={() => setToggle(toggle => !toggle)}><i class="bi bi-list-check"></i><span>Masters</span></a>
                </li>
                <div className="collapse masters text-decoration-none" id="mastersitems">
                        <ul className='nav-sub-items'>
                            <li className="nav-item">
                            <Link to="/users" className="nav-link text-decoration-none">
                                <i class="bi bi-people-fill "></i><span>Users</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to= "/roleManager" className="nav-link text-decoration-none">
                                <i class="bi bi-people-fill"></i><span>Role Manager</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none" href="#"><i class="bi bi-people-fill"></i><span>Users</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none" href="#"><i class="bi bi-people-fill"></i><span>Users</span></a>
                            </li>
                        </ul>
                    </div>
            </ul>
            {/* <Routes>
                <Route exact path='/users' element={< UserMaster />}></Route>
            </Routes> */}
        </div>
        // </Router>
        
    );
}

export default Sidenav;