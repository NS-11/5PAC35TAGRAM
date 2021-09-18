import React from 'react'
import Title from './Title'
import nasaIcon from '../assets/nasaIcon.svg'

function Header() {
    return (
        <header>
            <img src={nasaIcon} alt="test"/>
            <Title />
        </header>
    )
}

export default Header