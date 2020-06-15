import React from 'react';
import './BurgerIngredients.css'


const BurgerIngredients = (props)=>{
    let ingredients = null
    switch(props.type){
        case 'Burger-Top' :
            ingredients = <div className = 'Burger-Top'>
                <div className = 'Seeds1'></div>
                <div className = 'Seeds2'></div>
                
            </div>
            break;
        case 'Burger-Bottom' :
            ingredients = <div className = 'Burger-Bottom'></div>
            break;
        case 'Cheese' :
            ingredients = <div className = 'Cheese'></div>
            break;
        case 'Meat' :
            ingredients = <div className = 'Meat'></div>
            break;
        case 'Bacon' :
            ingredients = <div className = 'Bacon'></div>
            break;
        case 'Salad' :
            ingredients = <div className = 'Salad'></div>
            break;
        default:
            ingredients = null
            break;
    
    }
    return ingredients;

}

export default BurgerIngredients;