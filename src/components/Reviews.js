import React, { Component } from 'react';

class Reviews extends Component {
    render() {
        return (
            <div className="  review">
                <h4 className="tt mt-2 pt-3">Cảm nhận khách hàng về thuocsi.vn</h4>
                <div className="container">
                    <div className="row mt-3 pt-2 daddy">
                        <div className="col-sm-4 rv">
                            <img src="images/ps1.jpg" alt="" />
                            <h5 className="name">Cô Lan Anh</h5>
                            <p>Chủ nhà thuốc Hòa Bình - Buôn Mê Thuột</p>
                            <span>"Địa chỉ đáng tin cậy. Đầy đủ hàng, giao hàng nhanh và thuận tiện"</span>
                        </div><div className="col-sm-4 rv">
                            <img src="images/ps2.jpg" alt="" />
                            <h5 className="name">Anh Trường</h5>
                            <p>Nhà thuốc tây số 2 - Vĩnh Long</p>
                            <span>"Hàng hóa đa dạng, dễ dàng tra cứu giá và đặt hàng thuốc."</span>
                        </div><div className="col-sm-4 rv">
                            <img src="images/ps3.jpg" alt="" />
                            <h5 className="name">Cô Hằng</h5>
                            <p>Nhà thuốc Vy Vy - Thủ Đức</p>
                            <span>Giao hàng nhanh chóng, nhân viên tư vấn nhiệt tình."</span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Reviews;