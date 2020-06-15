import React from 'react'
import './Toolbar.css';
import Logo from '../../../Components/Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props)=>{
    return <header>
        <div className = 'Toolbar'>
            Menu
            <Logo />
            <nav className = 'Nav'>
                <NavigationItems  />
        </nav>
        </div>
        
        
    </header>
}

export default Toolbar