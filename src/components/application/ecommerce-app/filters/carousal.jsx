import React from 'react';
import {Row,Col,Media} from 'reactstrap'
import Slider from 'react-slick';
import one from '../../../../assets/images/ecommerce/01.jpg';
import two from '../../../../assets/images/ecommerce/02.jpg';
import three from '../../../../assets/images/ecommerce/03.jpg';
import {NewProducts,FancyShirt,FancyShirtPrice} from '../../../../constant'
  
  const Carousal = (props) =>  {

        var settings = {
            slidesToShow: 1,
            swipeToSlide: false,
            arrows: false,
            dots: false,
        };

      return (
        <div>
           <hr/>
            <div className="product-filter pb-0 new-products">
             <h6 className="f-w-600">{NewProducts}</h6>
            <div className="owl-carousel owl-theme" id="testimonial">
                <Slider {...settings}>
                <div className="item">
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <Media className="img-fluid" src={one} alt="" data-original-title="" title="" />
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">{FancyShirt}</p>
                        <div className="product-price">{FancyShirtPrice}</div>
                    </Col>
                    </Row>
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <Media className="img-fluid" src={two} alt="" data-original-title="" title="" />
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">{FancyShirt}</p>
                        <div className="product-price">{FancyShirtPrice}</div>
                    </Col>
                    </Row>
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <img className="img-fluid" src={three} alt="" data-original-title="" title="" />
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">{FancyShirt}</p>
                        <div className="product-price">{FancyShirtPrice}</div>
                    </Col>
                    </Row>
                </div>
                <div className="item">
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <Media className="img-fluid" src={one} alt=""/>
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning mr-1"></i>
                        <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">{FancyShirt}</p>
                        <div className="product-price">{FancyShirtPrice}</div>
                    </Col>
                    </Row>
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <Media className="img-fluid" src={two} alt=""/>
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">{FancyShirt}</p>
                        <div className="product-price">{FancyShirtPrice}</div>
                    </Col>
                    </Row>
                    <Row className="product-box">
                    <Col md="6" className="product-img">
                        <img className="img-fluid" src={three} alt="" />
                    </Col>
                    <Col md="6" className="product-details text-left">
                        <span>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning mr-1"></i>
                            <i className="fa fa-star font-warning"></i>
                        </span>
                        <p className="mb-0">{FancyShirt}</p>
                        <div className="product-price">{FancyShirtPrice}  </div>
                    </Col>
                    </Row>
                </div>
                </Slider>
            </div>
        </div>   
        </div>
      );
  }
  
  export default Carousal;