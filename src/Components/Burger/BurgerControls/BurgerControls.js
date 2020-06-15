import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl'
import './BurgerControls.css'

const controls = [
    {Label:'Salad'},
    {Label:'Meat'},
    {Label:'Bacon'},
    {Label:'Cheese'}
];
const BurgerControls = (props)=>{
    
    return <div className= 'BurgerControls'>
        <p><strong>Total:{props.price.toFixed(2)}</strong></p>
        {controls.map((key)=>{
        return <BurgerControl 
        key={key.Label} 
        Label={key.Label} 
        add = {props.add} 
        delete = {props.delete}
        disable = {props.disableInfo[key.Label]} />
        })}
        <button 
        className = 'OrderButton'
        disabled = {!props.disableOrder}
        onClick = {props.showOrder}
        >ORDER NOW</button>
    </div>
    
}

export default BurgerControls;