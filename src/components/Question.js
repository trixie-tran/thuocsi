import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div className="container question ">
                <h4 className="tt mt-2 pt-2">Câu hỏi thường gặp</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <ul>
                            <li> Cách đăng ký và đăng nhập tài khoản tại thuocsi.vn</li>
                            <li>Quên mật khẩu đăng nhập</li>
                            <li>Như thế nào là hàng cận date? Hạn sử dụng còn bao lâu?</li>
                            <li>Tại sao tôi không thanh toán được</li>
                            <li>Tôi muốn chỉnh lại đơn hàng thì làm cách nào?</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <ul>
                            <li>⭑ Hướng dẫn đặt hàng</li>
                            <li>Dùng thử tại website thuocsi.vn</li>
                            <li>Thanh toán bằng hình thức chuyển khoản như thế nào?</li>
                            <li>Xuất hóa đơn đỏ tại thuocsi.vn?</li>
                            <li>Thời gian giao hàng dự kiến</li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Question;