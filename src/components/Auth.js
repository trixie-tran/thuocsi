import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom'



class Auth extends Component {
    constructor(props) {
        super(props)
        const cooki = new Cookies()
        this.state = {
            logined : cooki.get('logined')
        }
        
    }
 chuyenHuong(){
        if (this.state.logined === 'true'){
            return this.props.dung 
        }
        else{
            return <Redirect to = {this.props.sai}></Redirect>
        }
    }
    
    render() {
        return (
            <React.Fragment>
                {this.chuyenHuong}
            </React.Fragment>
        );
    }
}

export default Auth;