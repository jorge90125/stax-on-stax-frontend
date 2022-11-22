import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = (props) => {
    return(
        <nav>
            <Link to='/'>SIGN IN</Link>
            <NavLink to='/records'>RECORDS</NavLink>
            <NavLink to='/newform'>ADD RECORD</NavLink>
            <NavLink to='/register'>REGISTER</NavLink>
            <Link to='/' onClick={props.logout}>LOGOUT</Link>
        </nav>
    )
}

export default Nav