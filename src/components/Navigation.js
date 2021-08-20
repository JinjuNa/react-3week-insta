import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation-container">
            <Link to="/"><h1><img src="https://robohash.org/etnonsit.png?size=50x50&set=s" alt="logo" />ROBOT INSTARGRAM</h1></Link>

            <nav>
                <Link to="/list">Instargram</Link>
                <Link to="/user_list">Users</Link>
            </nav>
        </div>
    )

}

export default Navigation