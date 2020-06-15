import React from 'react'
import Burger from '../Burger/Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckOutSummary.css'

const CheckOutSummary = (props) =>{
        return (
            <div className = 'CheckOutSummary'>
                <h1>We Hope it Tastes Good</h1>
                <div style = {{width:'300px' , height:'400px', margin:'auto' }}>
                    <Burger Ingredients = {props.Ingredients}/>
                </div>
                <Button type = 'Danger' clicked = {props.clickedCancel} >Cancel</Button>
                <Button type = 'Success' clicked = {props.clickedContinue}>Continue</Button>
            </div>
        )
}
export default CheckOutSummary