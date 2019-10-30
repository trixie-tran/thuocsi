import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to={1} className="active" />
                        <li data-target="#carousel-example-generic" data-slide-to={2} />
                        <li data-target="#carousel-example-generic" data-slide-to={3} />
                        <li data-target="#carousel-example-generic" data-slide-to={4} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="images/banner1.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/banner2.jpg" alt="second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/banner3.png" alt="thirst slide" />
                        </div><div className="carousel-item">
                            <img src="images/banner4.jpg" alt="Fourth slide" />
                        </div>
                    </div>
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div> 
            // {/* hetbanner */ }

        );
    }
}

export default Banner;