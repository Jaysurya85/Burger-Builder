import React from 'react';
import './BurgerControl.css'

const BurgerControl = (props)=>{

    return <div className='BurgerControl' >
        <p className='Label'>{props.Label}</p>
        <button className='Less' 
        onClick = {()=>props.delete(props.Label)}
        disabled = {props.disable} >Less</button>
        <button className='More' onClick = {()=>props.add(props.Label)}>More</button>
    </div>
}

export default BurgerControl;