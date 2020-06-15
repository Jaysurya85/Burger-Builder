import React, { Component } from 'react'
import CheckOutSummary from '../../Components/CheckOutSummary/CheckOutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData'

class Checkout extends Component{
    state = {
        Ingredients:null,
        price : 0
        }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        let Ingredients = {}
        for( let i of query.entries()){
            if (i[0] === 'price'){
                this.setState({price:i[1]})
            }
            else{
                Ingredients[i[0]] = +i[1];
            }
            
        }
        this.setState({Ingredients:Ingredients})
    }
    clickedContinueHandler = () =>{
        this.props.history.replace('/CheckOut/ContactData')
    }
render(){
    return (
        <div>
            <CheckOutSummary 
            Ingredients = {this.state.Ingredients}
            clickedCancel = {()=>this.props.history.goBack()}
            clickedContinue = {this.clickedContinueHandler}
            />
            <Route path={this.props.match.path + '/ContactData'} 
            render = {() => (<ContactData Ingredients = {this.state.Ingredients} price = {this.state.price}
            />)}/>
        </div>
    )
}

}

export default Checkout;