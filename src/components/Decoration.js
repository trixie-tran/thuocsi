import React, { Component } from 'react';

class Decoration extends Component {
    render() {
        return (
            <div className="container-fluid anhthuoc">
                <div className="row">
                    <div className="col-sm-4 push-sm-4 khoi ">
                        <h4>Đăng nhập để tìm hiểu sản phẩm</h4>
                        <div className="combonut">
                            <button className="btn-info login"> <i className=" fa fa-sign-in-alt"> </i> Đăng nhập</button>
                            <button className="btn-info create"> <i className="fa fa-user-md" />Tạo tài khoản </button>
                            <button className="btn-info test"> <i className="fa fa-eye" />Dùng thử </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Decoration;