import React from 'react'
import './Order.css'
const Order = (props) =>{
    const ingredients = []
    for( let i in props.Ingredients){
        ingredients.push({
            name:i,
            amount:props.Ingredients[i]
        })
    }
    const ingredientsOutput = (
        ingredients.map((ig)=>{
            return <span key = {ig.name}
            style = {{
                display:'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            >
                {ig.name} <strong>{ig.amount}</strong> 
            </span> 
        })
    )
    return (
        <div className = 'Order'>
            <p>Ingredients: {ingredientsOutput}</p>
            <p style={{marginLeft:'8px'}}>Price: <strong>USD {props.price}</strong></p>
        </div>
    )
}

export default Order;