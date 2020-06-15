import React from 'react';
import Aux from '../../../HOC/aux'
import Button from '../../../UI/Button/Button'
const OrderSumary= (props) =>{
    const SumaryList = Object.keys(props.Ingredients)
    .map((igkeys)=>{
        return (
        <li key = {igkeys}>{igkeys}:{props.Ingredients[igkeys]}</li>
        )
    })
    return <Aux>
        <p><strong>ORDER SUMARY</strong></p>
        <ul>
        {SumaryList}
        </ul>
<p><strong>Total:{props.price.toFixed(2)}</strong></p>
        <p>Continue with your order?</p>
        <Button clicked = {props.continue} type = 'Success'>CONTINUE</Button>
        <Button clicked = {props.close} type = 'Danger'>CANCEL</Button>
    </Aux>
}

export default OrderSumary;