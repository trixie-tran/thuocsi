import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="top container">
                <div className="row">
                    <div className="col-sm-6 trai">
                        <a href="/"><img src="images/logo.png" alt="" /></a>
                    </div>
                    <div className="col-sm-6 phai float-sm-right">
                        <a href="/login"><button className="btn-info login"> <i className=" fa fa-sign-in-alt"> </i> Đăng nhập</button></a>
                        <button className="btn-info create"> <i className="fa fa-user-md" />Tạo tài khoản </button>
                        <i className="fa fa-phone" /> <span>02 862 848 680</span>
                    </div>
                </div>
                {/* hetrow */}
            </div>

        );
    }
}

export default Header;