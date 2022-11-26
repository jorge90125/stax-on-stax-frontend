import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = (props) => {

    let activeStyle = {
        backgroundColor: '#0ad6fa'
    }

    return(
        <nav>
            <Link to='/'>SIGN IN</Link>
            <NavLink to='/records' style={({isActive}) => isActive ? activeStyle : undefined}>RECORDS</NavLink>
            <NavLink to='/newform' style={({isActive}) => isActive ? activeStyle : undefined}>ADD RECORD</NavLink>
            <NavLink to='/allusers' style={({isActive}) => isActive ? activeStyle : undefined}>ALL USERS</NavLink>
            <NavLink to='/register' style={({isActive}) => isActive ? activeStyle : undefined}>REGISTER</NavLink>
            <Link to='/' onClick={props.logout}>LOGOUT</Link>
        </nav>
    )
}

export default Nav