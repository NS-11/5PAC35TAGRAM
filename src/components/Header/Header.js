import React from 'react'
import nasaIcon from '../../assets/nasaIcon.svg'
import './header.css'

function Header() {
    return (
        <nav>
            <div className='Header'>
                <img className='Header-image' src={nasaIcon} alt="test"/>
                <div>
                    <h1>Spacestagram</h1>
                    <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
                </div>
            </div>
        </nav>
    )
}

export default Header