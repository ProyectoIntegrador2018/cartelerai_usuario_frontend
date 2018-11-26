import React from 'react'
import logo from 'Images/logo.svg'
import { Link } from 'react-router-dom'
import { campus } from 'Config/test'
import { Dropdown } from 'Presentational/elements/Dropdown'

const Header = () => (
    <div className='header'>
        <div className='logo'>
            <Link to={'/'}>
                <img src={logo} />
            </Link>
        </div>
        <div className='campus'>
            <Link to={'/acerca'}>
                Acerca de
            </Link>
        </div>
    </div>
)

export default Header