import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPasword';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import MyAccountInfo from '../pages/MyAccountInfo';
import Products from '../pages/Products';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import OrderList from '../containers/OrderList';
import ShoppingCartList from '../containers/ShoppingCartList';
import ProductInfo from '../containers/ProductInfo';
import '../styles/global.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/recovery-password" component={RecoveryPassword}/>
                    <Route exact path="/new-password" component={NewPassword}/>
                    <Route exact path="/my-account" component={MyAccount}/>
                    <Route exact path="/my-account-info" component={MyAccountInfo }/>
                    <Route exact path="/product" component={Products}/>
                    <Route exact path="/menu" component={Menu}/>
                    <Route exact path="/categories" component={Categories}/>
                    <Route exact path="/order" component={OrderList}/>
                    <Route exact path="/shopping-order" component={ShoppingCartList}/>
                    <Route exact path="/product-info" component={ProductInfo}/>
                    <Route path="*" component={NotFound}/>
                </Switch> 
            </Layout>
        </BrowserRouter>
        
    );
}

export default App;