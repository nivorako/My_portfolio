import React from "react"
import { NavLink } from "react-router-dom"

//import "../styles/navBar.css"

function NavBar() {
    return (
        <div className="sidebar">
            <ul className="sidebar__ul">
                <li className="sidebar__li">
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? { color: "#7d9e83" } : { color : "white"}
                        }
                        className="sidebar__navLink"
                    >
                        <i className="fas fa-home"></i>
                        <span>Acceuil</span>
                    </NavLink>
                </li>
                <li className="sidebar__li">
                    <NavLink
                        to="/Knowledges"
                        className="sidebar__navLink"
                        style={({ isActive }) =>
                            isActive ? { color: "#7d9e83" } : { color : "white"}
                        }
                    >
                        <i className="fas fa-mountain"></i>
                        <span>Technologies</span>
                    </NavLink>
                </li>
                <li className="sidebar__li">
                    <NavLink
                        to="/portFolio"
                        className="sidebar__navLink"
                        style={({ isActive }) =>
                            isActive ? { color: "#7d9e83" } : { color : "white"}
                        }
                    >
                        <i className="fas fa-images"></i>
                        <span>Portfolio</span>
                    </NavLink>
                </li>
                {/* <li className="sidebar__li">
                    <NavLink
                        to="/Contact"
                        className="sidebar__navLink"
                        style={({ isActive }) =>
                            isActive ? { color: "#7d9e83" } : { color : "white"}
                        }
                    >
                        <i className="fa fa-address-book"></i>
                        <span>Contact</span>
                    </NavLink>
                </li> */}
            </ul>
        </div>
    )
}

export default NavBar
