import React from 'react'
import './NavigationItem.css'
import {NavLink} from 'react-router-dom'

const NavigationItem = (props)=>{
    return (<li className = 'NavigationItem'>
    <NavLink 
    activeClassName = 'active'
    to={props.Link} exact>{props.value}</NavLink>
    </li>)
}
export default NavigationItem;