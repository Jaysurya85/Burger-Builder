import React, { Component } from 'react'
import Button from '../../../UI/Button/Button'
import './ContactData.css'
import axios from '../../../axios';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Input/Input'

class ContactData extends Component{
    state = {
        OrderForm:{
            Name:{
                elementtype:'input',
                elemetconfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:''
            },
            Email:{
                elementtype:'input',
                elemetconfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:''
            },
            Country:{
                elementtype:'input',
                elemetconfig:{
                    type:'text',
                    placeholder:'Your Country'
                },
                value:''
            },
            DilevaryMethod:{
                elementtype:'select',
                elemetconfig:{
                    option:[
                        {value:'fastest',display:'Fastest'},
                        {value:'cheapest',display:'Cheapest'}
                    ]
                },
                value:''
            }

        },
        isLoading:false
    }
    orderHandler = (event) =>{
        event.preventDefault();
        this.setState({isLoading:true})
        let orderdata = {}
        for (let i in this.state.OrderForm){
            orderdata[i] = this.state.OrderForm[i].value
        }
        const order = {
            Ingredients: this.props.Ingredients,
            price : this.props.price,
            Orderdata:orderdata
        }
        axios.post('/orders.json',order).then(
            response => {this.setState({isLoading:false,orderpage:false})}
        )
    }
    changedHandler = (event,identifier)=>{
        const updatedform = {
            ...this.state.OrderForm
        }
        const updatedformelement = {
            ...updatedform[identifier]
        }
        updatedformelement.value = event.target.value;
        updatedform[identifier] = updatedformelement
        this.setState({OrderForm:updatedform})
    }
    render(){
        let formElementArray = []
        for (let i in this.state.OrderForm){
            formElementArray.push({
                id:i,
                config:this.state.OrderForm[i]
            })
        }
        let form = (
            <div>
            <header><strong>Enter Your Contact Details</strong></header>
            <form onSubmit={this.orderHandler}>
                {formElementArray.map((formElement)=>{
                    return(
                        <Input 
                        key = {formElement.id}
                        elementtype={formElement.config.elementtype}
                        elemetconfig = {formElement.config.elemetconfig} 
                        value = {formElement.config.value}
                        changed = {(event)=>this.changedHandler(event,formElement.id)}
                        />
                    )
                })}
                <Button type = 'Success'  >Order</Button>
                </form>
                
            </div>
            
        )
        if (this.state.isLoading){
            
            form = (<Spinner />)
        }
        return (
            <div className='ContactData'>
                {form}
            </div>
        )
    }
    
}
export default ContactData