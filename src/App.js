import React, {Component} from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './Containers/Checkout/CheckOut';
import {BrowserRouter, Switch} from 'react-router-dom'
import {Route} from 'react-router-dom';
import Orders from './Containers/Orders/Orders';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <Switch>
          <Route path = '/CheckOut'  component={CheckOut}/>
          <Route path = "/Orders"  component = {Orders}/>
          <Route path = '/' exact component={BurgerBuilder}/>
          </Switch>
        
          

        </Layout>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
