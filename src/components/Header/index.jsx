import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className="container">
                <h2>LOGO</h2>

                <div className="data">
                    <NavLink className="infor" to="/">Homework One</NavLink>
                    <NavLink className="infor" to="/homeworkTwo">Homework Two</NavLink>
                    <NavLink className="infor" to="/homeworkThree">Homework Three</NavLink>
                    <NavLink className="infor" to="/homeworkFour">Homework Four</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
