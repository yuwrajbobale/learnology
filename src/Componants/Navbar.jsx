import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Learnology</NavLink>
                                <div id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Courses">Courses</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar