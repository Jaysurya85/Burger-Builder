import React from 'react';
import BurgerIngredients from '../BurgerIngrerdiants/BurgerIngredients';
import './Burger.css'
const Burger = (props) =>{
    let UpdatedImgredients = Object.keys(props.Ingredients)
    .map( igkey =>{
        return ([...Array(props.Ingredients[igkey])]
        .map((_,i)=>{
            return <BurgerIngredients key  ={igkey+i} type = {igkey}/>;
        }))
    } )
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if (UpdatedImgredients.length ===0){
        UpdatedImgredients = <p>Please add some Ingredients</p>
    }
    return<div className = 'Burger'>
            <BurgerIngredients type = 'Burger-Top'/>
            {UpdatedImgredients}
            <BurgerIngredients type = 'Burger-Bottom' />
    </div>
}

export default Burger;