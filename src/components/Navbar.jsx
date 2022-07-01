import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light">
                <div className="container-fluid">
                    <div className="navbar-brand meow">
                        Srima's Kitchen
                    </div>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto">
                            <NavLink activeclassname="active" exact to="/" className="nav-link">home</NavLink>
                            <NavLink activeclassname="active" exact to="/content" className="nav-link">content</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
