import React from "react"
import nasaIcon from "../../assets/nasaIcon.svg"
import '../styles/Header.css'

// WEBPAGE HEADER
function Header() {
    return (
        <div className='Header'>
            <img className='Header-image' src={nasaIcon} alt="NASA Icon"/>
            <div>
                <h1>Spacestagram</h1>
                <p className="Header-subtitle">Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
                <p className="Header-message">Reload the page and get 32 new random images from the APOD API!</p>
            </div>
        </div>        
    )
}

export default Header