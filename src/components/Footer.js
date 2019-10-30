import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="container ">
                        <div className="row ">
                            <div className="col-sm-6 trai mt-2 pt-2">
                                <img className="logo " src="images/logo.png" alt="" />
                                <span>thuocsi.vn là website thuộc sở hữu của Công ty TNHH Buymed.</span>
                                <p className="buy mt-1">Công Ty TNHH Buymed </p>
                                <p>
                                    <b>Địa chỉ</b>: 28/31 Lương Thế Vinh, phường Tân Thới Hoà, quận Tân Phú, thành <br /> phố Hồ Chí Minh <br />
                                    <b>Số chứng nhận đăng ký kinh doanh</b>: 0314758651 cấp ngày 29/11/2017 tại <br />Sở Kế Hoạch Và Đầu Tư Thành Phố Hồ Chí Minh <br />
                                    <b>Số Giấy phép Sàn thương mại điện tử</b>: <u>0314758651/KD-0368</u>
                                </p>
                                <img className="bct" src="images/bct.png" alt="" />
                            </div>
                            <div className="col-sm-3 mt-2 pt-2">
                                <div className="ttc">
                                    <h5 className="td">Thông tin chung</h5>
                                    <ul>
                                        <li>Giới thiệu về thuocsi</li>
                                        <li>Câu hỏi thường gặp (Q&amp;A)</li>
                                        <li>Điều khoản sử dụng</li>
                                        <li>Thỏa thuận về dịch vụ TMDT</li>
                                        <li>Quy chế hoạt động</li>
                                        <li>Chính sách bảo mật</li>
                                        <li>Cơ chế giải quyết tranh chấp</li>
                                        <li>Chính sách quy định chung</li>
                                        <li>Đăng ký bán hàng cùng thuocsi</li>
                                    </ul>
                                </div>
                                <div className="htkh">
                                    <h5 className="td">Hỗ trợ khách hàng</h5>
                                    <li>Hướng dẫn đặt hàng</li>
                                </div>
                                <div className="dvgh">
                                    <h5 className="td">Dịch vụ giao hàng</h5>
                                    <div className="row">
                                        <img src="images/gh1.png" alt="" />
                                        <img src="images/gh2.png" alt="" />
                                        <img src="images/gh3.png" alt="" />
                                        <img src="images/gh4.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 mt-2 pt-2 lh">
                                <h5 className="td">Liên hệ</h5>
                                <li><i className="fa fa-envelope" />hotro@thuocsi.vn</li>
                                <li><i className="fa fa-phone" />02862 848 680</li>
                                <img className="icon" src="images/face.png" alt="" width={25} />
                                <img className="icon" src="images/zalo.png" alt="" />
                            </div>
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-sm-12 text-xs-center">© Bản quyền thuộc Công Ty TNHH Buymed - 2019</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;