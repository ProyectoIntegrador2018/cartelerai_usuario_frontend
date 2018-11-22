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
                <img src='//home/julio/Desktop/Integrador/CarteleraI/cartelera_public_frontend/src/public/src/app/images' />            </Link>
        </div>
        <div className='campus'>
            <span className='label'>Campus</span>
            <span>
                <Dropdown data={campus} />
            </span>
        </div>
    </div>
)

export default Header