import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux'
import { WishlistTitle,Price,MoveToCarts } from '../../../constant';
import {ADD_TO_CART} from '../../../redux/actionTypes'
import {withRouter} from 'react-router-dom' 

const Wishlist = (props) => {
  
    const dispatch = useDispatch()
    const list = useSelector(content => content.Wishlistdata.list);
    const symbol = useSelector(content => content.data.symbol);
   
    const MoveToCart = (product, qty) => {
      dispatch({ type: ADD_TO_CART, payload: { product, qty } })
      props.history.push(`${process.env.PUBLIC_URL}/app/ecommerce/cart`);
    }
    
    return (
        <Fragment>
        <Breadcrumb parent="Ecommerce" title="Wishlist"/>
        {
        list ?
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{WishlistTitle}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  {list.map((item, index) => {
                  return (
                  <Col xl="4" md="6" key={index}>
                    <div className="prooduct-details-box">                                 
                      <div className="media">
                        <img className="align-self-center img-fluid img-60" src={require("../../../assets/images/" + item.img)} alt="#"/>
                        <div className="media-body ml-3">
                          <div className="product-name">
                            <h6><a href="#javascript">{item.name}</a></h6>
                          </div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="price d-flex"> 
                            <div className="text-muted mr-2">{Price}</div>: {item.price}{symbol}
                          </div>
                          <div className="avaiabilty">
                            <div className="text-success">{item.stock}</div>
                          </div>
                          <Button color="primary" size="xs" onClick={() => MoveToCart(item, 1)}>{MoveToCarts}</Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  ) })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      : "" }
      </Fragment>
    );
}
export default withRouter(Wishlist)