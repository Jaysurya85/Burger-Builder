import React from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationIems = (props)=>{
    return (
        <ul className = 'NavigationItems'>
        <NavigationItem Link = '/' 
        value = 'Burger Builder'  />
        <NavigationItem Link = '/Orders' 
        value = 'Orders'  />
    </ul>
    )
}
export default NavigationIems;