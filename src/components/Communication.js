import React, { Component } from 'react';

class Communication extends Component {
    render() {
        return (
            <div>
                <div className="truyenthong">
                    <h4 className="tt mt-2">Truyền thông nói gì về thuocsi.vn</h4>
                    <div className="container">
                        <div className="row">
                            <img className="tt1" src="images/tt1.png" alt="_1" />
                            <img className="tt2" src="images/tt2.png" alt="_2" />
                            <img className="tt3" src="images/tt3.png" alt="_3" />
                            <img className="tt4" src="images/tt4.png" alt="_4" />
                            <img className="tt5" src="images/tt5.png" alt="_5" />
                        </div>
                    </div>
                    <i className="fa fa-angle-up dilen" />
                </div>
                {/* hettruyenthong */}
                <button className="btn-info help"><i className="fa fa-comment" />Trợ giúp</button>
            </div>

        );
    }
}

export default Communication;