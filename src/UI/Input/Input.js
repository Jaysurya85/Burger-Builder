import React from 'react'
import './Input.css'
const Input = (props) =>{
    let inputelement = null
    switch(props.elementtype){
        case('input'):
            inputelement = <input 
            className='InputElement' 
            {...props.elemetconfig} 
            value={props.value}
            onChange = {props.changed}
            />
            break
        case ('inputarea'):
            inputelement = <testarea 
            className='InputElement' 
            {...props.elemetconfig} 
            value={props.value} 
            onChange = {props.changed}
            />
            break
        case ('select'):
            inputelement = <select
            className = "InputElement"
            value = {props.value}
            onChange = {props.changed}
            >
                {props.elemetconfig.option.map((value)=>{
                    return (
                    <option value={value.value}>{value.display}</option>
                    )
                })}
            </select>
            break
        default:
            inputelement = <input 
            className='InputElement' 
            {...props.elemetconfig} 
            value={props.value} />
    }
    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputelement}
        </div>
    )
}

export default Input