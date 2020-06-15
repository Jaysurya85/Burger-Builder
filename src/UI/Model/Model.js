import React from 'react';
import './Model.css'
import Aux from '../../HOC/aux'
import BackDrop from '../BackDrop/BackDrop'

const Model = (props)=>{
    return <Aux>
        <BackDrop 
        show = {props.show}
        clicked = {props.closeModel} 
        />
        <div  
        className = 'Model'
        style = {{
            transform: props.show? 'translatey(0)' : 'translatey(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
        >
        {props.children}
        
        
    </div>
        </Aux>;
}

export default Model;