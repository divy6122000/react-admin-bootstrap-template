import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link ">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-menu-button-wide"></i><span>users</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to={'/add-user'}>
                                <i className="bi bi-circle"></i><span>Add</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/view-users'}>
                                <i className="bi bi-circle"></i><span>View</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to={'/'}>
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </Link>
                </li>

            </ul>
        </aside>
    )
}

export default Sidebar