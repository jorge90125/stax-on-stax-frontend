import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav = (props) => {

    let activeStyle = {
        backgroundColor: '#18c6d6'
    }

    return(
        <div>
            <div id='titleDiv'>
                <hr></hr>
                <h1 id='title'>STAX ON STAX</h1>
                <hr></hr>
            </div>
            <nav>
                <NavLink to='/' style={({isActive}) => isActive ? activeStyle : undefined}>SIGN IN</NavLink>
                <NavLink to='/records' style={({isActive}) => isActive ? activeStyle : undefined}>RECORDS</NavLink>
                <NavLink to='/newform' style={({isActive}) => isActive ? activeStyle : undefined}>ADD RECORD</NavLink>
                <NavLink to='/allusers' style={({isActive}) => isActive ? activeStyle : undefined}>ALL USERS</NavLink>
                <NavLink to='/register' style={({isActive}) => isActive ? activeStyle : undefined}>REGISTER</NavLink>
                <Link to='/' onClick={props.logout}>LOGOUT</Link>
            </nav>
        </div>
    )
}

export default Nav