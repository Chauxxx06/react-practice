import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPasword';
import '../styles/global.css'

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={login}/>
                    <Route exact path="recovery-password" component={RecoveryPassword}/>
                    <Route component={NotFound}/>
                </Layout>
            </Switch>    
        </BrowserRouter>
        
    );
}

export default App;