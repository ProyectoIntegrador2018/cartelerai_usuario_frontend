import React from 'react'
import logoIG from 'Images/logoIG.png'
import { Link } from 'react-router-dom'

const Footer = () => (
    <div className='header'>
        <div className='logo'>
            <Link to={'/'}>
                <img src={logoIG} />
            </Link>
        </div>
    </div>
)

export default Footer