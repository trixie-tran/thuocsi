import React, { Component } from 'react';
import Header from './Header';
import { isFlowBaseAnnotation } from '@babel/types';
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom'


class Login extends Component {
    constructor(){
        super()
        this.state = {
            logined : true
        }

    }

    clicked = (event) => {
        let cooki = new Cookies()
        cooki.set('logined', 'true')
        this.setState({
            logined: cooki.get('logined' === 'true')
        })
    }
chuyenHuong(){
    if (this.state.logined){
        return <Redirect to ='/home'></Redirect>
    }
}
render() {
return (

<React.Fragment> 
    {this.chuyenHuong}
    <Header></Header>
    <div className="dangnhap">
        <h4>Chào mừng quay trở lại</h4>
        <form action="/action_page.php">
            <div className="form-group">
                <label htmlFor="email">Số điện thoại hay email</label>
                <input type="email" className="form-control" id="email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Mật khẩu</label>
                <input type="password" className="form-control" id="pwd" required />
            </div>
            <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />Nhớ mật khẩu
                </label>
            </div>
            <button className="btn-info login"> <i className=" fa fa-sign-in-alt"> </i> Đăng nhập</button>
            <a href="#">Quên mật khẩu</a>
           <hr/>
        </form>
        <button className="btn-info create" onClick ={() => this.clicked()}> <i className="fa fa-user-md" />Tạo tài khoản </button>
        <button className="btn-info test"> <i className="fa fa-eye" />Dùng thử </button>



    </div>
</React.Fragment>

);
}
}

export default Login;