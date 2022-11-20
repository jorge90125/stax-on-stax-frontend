import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <Link to='/'>SIGN IN</Link>
            <NavLink to='/records'>RECORDS</NavLink>
            <NavLink to='/newform'>ADD RECORD</NavLink>
            <NavLink to='/register'>REGISTER</NavLink>
        </nav>
    )
}

export default Nav