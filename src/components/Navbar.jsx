import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useAuth } from '../store/auth'

const Navbar = () => {
    const { isLoggedIn } = useAuth()
    return (
        <>
            <div className="container">
                <div>
                    <a href="/">GeeksWorld</a>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {isLoggedIn ? (<li><NavLink to="/logout">Logout</NavLink></li>) : (
                            <><li><NavLink to="/register">SignUp</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li></>
                        )}


                    </ul>
                </nav>


            </div>


        </>
    )
}

export default Navbar