import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap'

class Partners extends Component {
    render() {
        return (
            <div className=" doitac">
            <h4 className="tt mt-2 pt-2">Đối tác của thuocsi.vn</h4>
            <div className="container">
              <div className="row slideshow">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators nut">
                    <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                    <li data-target="#carousel-example-generic" data-slide-to={1} />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img src="images/logo1.jpg" alt="_1" />
                      <img src="images/logo2.jpg" alt="_2" />
                      <img src="images/logo3.jpg" alt="_3" />
                      <img src="images/logo4.jpg" alt="_4" />
                      <img src="images/logo5.jpg" alt="_5" />
                      <img src="images/logo10.jpg" alt="_10" />
                      <img src="images/logo10.jpg" alt="_10" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/logo6.jpg" alt="_6" />
                      <img src="images/logo7.jpg" alt="_7" />
                      <img src="images/logo8.jpg" alt="_8" />
                      <img src="images/logo9.jpg" alt="_9" />
                      <img src="images/logo11.jpg" alt="_11" />
                      <img src="images/logo12.jpg" alt="_12" />
                      <img src="images/logo12.jpg" alt="_12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            // <div className=" doitac">
            //     <h4 className="tt mt-2 pt-2">Đối tác của thuocsi.vn</h4>
            //     <div className="container">
            //         <div className="row slideshow">
            //             <Carousel>
            //                 <Carousel.Item>

            //                     <div className="carousel-item active">
            //                         <img src="images/logo1.jpg" alt="_1" />
            //                         <img src="images/logo2.jpg" alt="_2" />
            //                         <img src="images/logo3.jpg" alt="_3" />
            //                         <img src="images/logo4.jpg" alt="_4" />
            //                         <img src="images/logo5.jpg" alt="_5" />
            //                         <img src="images/logo10.jpg" alt="_10" />
            //                         <img src="images/logo10.jpg" alt="_10" />
            //                     </div>

            //                 </Carousel.Item>
            //                 <div className="carousel-item">
            //                     <img src="images/logo6.jpg" alt="_6" />
            //                     <img src="images/logo7.jpg" alt="_7" />
            //                     <img src="images/logo8.jpg" alt="_8" />
            //                     <img src="images/logo9.jpg" alt="_9" />
            //                     <img src="images/logo11.jpg" alt="_11" />
            //                     <img src="images/logo12.jpg" alt="_12" />
            //                     <img src="images/logo12.jpg" alt="_12" />
            //                 </div>
            //             </Carousel>
            //         </div>
            //     </div>
            // </div>


        );
    }
}

export default Partners;