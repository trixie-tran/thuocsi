import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 daddy">
                            <div className="col-sm-4">
                                <i className="fa fa-clinic-medical" />
                            </div>
                            <div className="col-sm-8 nho ">
                                <h4>sản phẩm chất lượng</h4>
                                <p>Từ nhà máy, nhà phân phối uy tín</p>
                            </div>
                        </div><div className="col-sm-3 daddy">
                            <div className="col-sm-4">
                                <i className="fa fa-clinic-medical" />
                            </div>
                            <div className="col-sm-8 nho ">
                                <h4>Đội ngũ chuyên nghiệp</h4>
                                <p>Tư vấn miễn phí, tận tình</p>
                            </div>
                        </div><div className="col-sm-3 daddy">
                            <div className="col-sm-4">
                                <i className="fa fa-clinic-medical" />
                            </div>
                            <div className="col-sm-8 nho ">
                                <h4>Giao hàng nhanh</h4>
                                <p>Đảm bảo trong 36 giờ.</p>
                            </div>
                        </div><div className="col-sm-3 daddy">
                            <div className="col-sm-4">
                                <i className="fa fa-clinic-medical" />
                            </div>
                            <div className="col-sm-8 nho ">
                                <h4>Tin Tức Chuyên Môn</h4>
                                <p>Cập nhật tin tức mới và chính xác</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Services;