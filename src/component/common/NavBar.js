import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
                Course View App
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/View-All-courses"}>
                            View All Courses
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Add-New-Course"}>Add New Course</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Add-Instance"}>Add New Instance</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/View Instance"}>View Instance</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
