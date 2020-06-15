import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Burger from '../../Components/Burger/Burger/Burger';
import BurgerControls from '../../Components/Burger/BurgerControls/BurgerControls'
import Model from '../../UI/Model/Model'
import OrderSumary from '../../Components/Burger/OrderSumary/OrderSumary'
// import axios from '../axios'
import Spinner from '../../UI/Spinner/Spinner'
const PRICES = {
    'Salad':0.3,
    'Bacon':0.7,
    'Cheese':0.5,
    'Meat':1.3
}
class BurgerBuilder extends Component{
    state = {
        Ingredients:{
            'Salad':0,
            'Bacon':0,
            'Cheese':0,
            'Meat':0
        },
        price:4,
        purchasable:false,
        orderpage:false,
        isLoading:false
    }
    enableOrder = (UpdatedIngredients)=>{
        let Updatepurchase = false
        for(let item in UpdatedIngredients){
            if (UpdatedIngredients[item]!==0){
                Updatepurchase = true;
            }
        this.setState({purchasable:Updatepurchase})
        // if (Updatepurchase!==this.state.purchasable){
        //     this.setState({purchasable:Updatepurchase})
        // }
        }
    }
    addIngredients = (type)=>{
        const updated = this.state.Ingredients[type] +1;
        const UpdatedIngredients = {...this.state.Ingredients};
        UpdatedIngredients[type] = updated
        const UpdatedPrice = this.state.price + PRICES[type]
        this.setState({Ingredients:UpdatedIngredients,price:UpdatedPrice})
        this.enableOrder(UpdatedIngredients)
    }
    deleteIngredients= (type)=>{
        if (this.state.Ingredients[type]>0){
            const updated = this.state.Ingredients[type] - 1;
            const UpdatedIngredients = {...this.state.Ingredients};
            UpdatedIngredients[type] = updated
            const UpdatedPrice = this.state.price - PRICES[type]
            this.setState({Ingredients:UpdatedIngredients,price:UpdatedPrice})
            this.enableOrder(UpdatedIngredients)
        }
    }
    showOrder = ()=>{
        this.setState({orderpage:true})
    }
    closeModel = ()=>{
        this.setState({orderpage:false})
    }
    continueOrder = ()=>{
        // 
        let quaryparam = []
        for(let i in this.state.Ingredients){
            quaryparam.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.Ingredients[i]))
        }
        quaryparam.push('price='+this.state.price)
        const quaryString = quaryparam.join('&') 
        this.props.history.push(
            {pathname:'/checkOut',
            search:'?'+quaryString
        })
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const disable = {
            ...this.state.Ingredients
        }
        for(let list in disable){
            disable[list] = disable[list]<=0
        }
        let sumary = <OrderSumary 
            price = {this.state.price}
            continue = {this.continueOrder}
            close = {this.closeModel} 
            Ingredients = {this.state.Ingredients}/>

        if (this.state.isLoading){
            sumary = <Spinner />
        }
        return (
            <Aux>
                <Burger Ingredients = {this.state.Ingredients}/>
                <Model 
                show = {this.state.orderpage}
                closeModel = {this.closeModel}>
                    {sumary}
                </Model>
                <BurgerControls 
                price = {this.state.price}
                add = {this.addIngredients} 
                delete = {this.deleteIngredients}
                disableInfo = {disable}
                disableOrder = {this.state.purchasable}
                showOrder = {this.showOrder}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;