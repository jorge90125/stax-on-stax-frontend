import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <Link to='/'>SIGN IN</Link>
            <NavLink to='/records'>RECORDS</NavLink>
        </nav>
    )
}

export default Nav