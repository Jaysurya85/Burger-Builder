import React from 'react';
import Burgerlogo from '../../Assets/images/burger-logo.png'
import './Logo.css'
const Logo = (props)=>{
    return <div className= 'Logo'>
        <img className = 'img' src = {Burgerlogo} alt = 'BurgerLogo'/>
    </div>
}

export default Logo