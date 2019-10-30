import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from '../pages/Home';
import Login from './Login';
import Auth from './Auth';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path='/login' exact component ={Login}></Route>
                <Route path='/' exact component ={Home}></Route>
                <Route path='/home' exact render ={Home}></Route>
                //     () => (
                //         <Auth sai ='/login' dung ={<Home/>}></Auth>
                //     )
                // }>
                    
            </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;