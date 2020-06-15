import React,{Component} from 'react';
import Order from '../../Components/Order/Order'
import Axios from '../../axios';
class Orders extends Component{
    state = {
        Orders:[],
        Loading:true
    }
    componentDidMount() {
        let fetchorders = []
        Axios.get('/orders.json')
        .then(res => {
            
            for (let i in res.data){
                fetchorders.push({...res.data[i],id:i})
            };
            this.setState({Orders:fetchorders,Loading:false})
            })
        }

    render(){
        return(
            <div style = {{marginTop:'50px'}}>
                {this.state.Orders.map((order)=>{
                    return <Order key = {order.id} price = {order.price} Ingredients = {order.Ingredients} />
                })}
            </div>
        )
    }
}

export default Orders