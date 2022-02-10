import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Table,Button, InputGroup,Input} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux' 
import {getCartTotal} from '../../../services/ecommerce.service'
import {Link} from 'react-router-dom'
import { XCircle } from 'react-feather';
import {ADD_TO_CART} from '../../../redux/actionTypes'
import {decrementQty,removeFromCart} from '../../../redux/ecommerce/cart/action'
import { CartTitle,CartTableHeader, Apply, TotalPrice, ContinueShopping,CheckOut,CartEmpty,ExploreShortlistItems } from '../../../constant';

const  Cart = () =>  {
  
    const cart = useSelector(content => content.Cartdata.cart);
    const symbol = useSelector(content => content.data.symbol);
    const dispatch = useDispatch();

    const incrementQty = (product , quantity) => {
        dispatch({type:ADD_TO_CART,payload:{product, quantity}})
    }

    const decrementQuantity = (id) => {
        dispatch(decrementQty(id))
    }

    const removefromcart = (item) => {
        dispatch(removeFromCart(item))
    }
  
    return (
      <Fragment>
        <Breadcrumb parent="Ecommerce" title="Cart"/>
        {
        cart ?
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{CartTitle}</h5>
              </CardHeader>
              <CardBody className="cart">
                <div className="order-history table-responsive wishlist">
                  <Table>
                    <thead>
                      <tr>
                        {CartTableHeader.map((items,i)  => 
                            <th key={i}>{items}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <img className="img-fluid img-60" src={require("../../../assets/images/" +  item.img)}  alt=""/>
                                    </td>
                                    <td>
                                        <div className="product-name">
                                            <a href="#javascript">{item.name}</a>
                                        </div>
                                    </td>
                                    <td>{symbol}{item.price}</td>
                                    <td>
                                        <fieldset className="qty-box">
                                            <div className="input-group">
                                                <span className="input-group-prepend">
                                                    <Button  className="quantity-left-minus"  onClick={() => decrementQuantity(item.id)}>
                                                        <i className="fa fa-minus"></i>
                                                    </Button>
                                                </span>
                                                <input type="text" name="quantity" value={item.qty} readOnly={true} style={{textAlign:"center"}} className="form-control input-number" />
                                                <span className="input-group-append">
                                                    <Button  className="quantity-right-plus"  onClick={() => incrementQty(item, 1)}>
                                                        <i className="fa fa-plus"></i>
                                                    </Button>
                                                </span>
                                            </div>
                                        </fieldset>
                                    </td>
                                    <td>
                                        <a href="#javascript" onClick={() => removefromcart(item)}><XCircle /></a>
                                    </td>
                                    <td>{symbol} {item.price * item.qty}</td>
                                </tr>

                            )
                        })}
                        <tr>
                            <td colSpan="4">                                           
                            <InputGroup>
                                <Input className="form-control mr-2" type="text" placeholder="Enter coupan code"/><Button color="primary">{Apply}</Button>
                            </InputGroup>
                            </td>
                            <td className="total-amount">
                            <h6 className="m-0 text-right"><span className="f-w-600">{TotalPrice} :</span></h6>
                            </td>
                            <td><span>{symbol}{getCartTotal(cart)}</span></td>
                        </tr>
                        <tr>
                            <td className="text-right" colSpan="5"><Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product`} className="btn btn-secondary cart-btn-transform" >{ContinueShopping}</Link></td>
                            <td><Link to={`${process.env.PUBLIC_URL}/app/ecommerce/checkout`} className="btn btn-success cart-btn-transform">{CheckOut}</Link></td>
                        </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
            :
                <section className="cart-section section-b-space">
                    <Container fluid={true}>
                        <Row>
                            <Col sm="12">
                                <div>
                                    <Col sm="12" className="empty-cart-cls text-center">
                                        <img src="" className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>{CartEmpty}</strong>
                                        </h3>
                                        <h4>{ExploreShortlistItems}</h4>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }
    </Fragment>
    );
}

export default Cart