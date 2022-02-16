import React, { Fragment, useRef } from "react";
import Breadcrumb from '../../../layout/breadcrumb'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Button,
  Media,
  Form,
} from "reactstrap";
import { getCartTotal } from "../../../services/ecommerce.service";
import ReactToPrint from "react-to-print";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cuba,HelloCuba,InvoiceHash,IssuedMay,PaymentDue,JohanDeo,JohanDeoMailId,ProjectDescription,ProjectDescriptionDetails,ProductName,Sub_total,ThankBusiness,ThankBusinessDesc,Print,Quantity,Price,Cancel } from '../../../constant';

class Invoice extends React.Component {
  render() {
    const { cart, symbol } = this.props
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div className="invoice">
                    <div>
                      <div>
                        <Row>
                          <Col sm="6">
                            <Media>
                              <Media left>
                                <Media
                                  className="media-object img-60"
                                  src={require("../../../assets/images/other-images/coming-soon-Logo.png")}
                                  alt=""
                                />
                              </Media>
                              <Media body className="m-l-20">
                                <h4 className="media-heading">{Cuba}</h4>
                                <p>
                                  {HelloCuba}
                                  <br />
                                  <span className="digits">{"289-335-6503"}</span>
                                </p>
                              </Media>
                            </Media>
                          </Col>
                          <Col sm="6">
                            <div className="text-md-right">
                              <h3>
                                {InvoiceHash}
                                <span className="digits counter">{"1069"}</span>
                              </h3>
                              <p>
                                {IssuedMay}
                                <span className="digits">{" 27, 2015"}</span>
                                <br />
                                {PaymentDue}{" "}
                                <span className="digits">{"27, 2015"}</span>
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <hr />

                      <Row>
                        <Col md="4">
                          <Media>
                            <Media left>
                              <Media
                                className="media-object rounded-circle img-60"
                                src={require("../../../assets/images/user/1.jpg")}
                                alt=""
                              />
                            </Media>
                            <Media body className="m-l-20">
                              <h4 className="media-heading">{JohanDeo}</h4>
                              <p>
                                {JohanDeoMailId}
                                <br />
                                <span className="digits">{"555-555-5555"}</span>
                              </p>
                            </Media>
                          </Media>
                        </Col>
                        <Col md="8">
                          <div className="text-md-right" id="project">
                            <h6>{ProjectDescription}</h6>
                            <p>
                              {ProjectDescriptionDetails}
                            </p>
                          </div>
                        </Col>
                      </Row>

                      <div>
                        <div
                          className="table-responsive invoice-table"
                          id="table"
                        >
                          <Table bordered striped>
                            <tbody>
                              <tr>
                                <td className="item">
                                  <h6 className="p-2 mb-0">{ProductName}</h6>
                                </td>
                                <td className="quantity">
                                  <h6 className="p-2 mb-0">{Quantity}</h6>
                                </td>
                                <td className="Rate">
                                  <h6 className="p-2 mb-0">{Price}</h6>
                                </td>
                                <td className="subtotal">
                                  <h6 className="p-2 mb-0">{Sub_total}</h6>
                                </td>
                              </tr>
                              {cart.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td>
                                      <label>{item.name}</label>
                                    </td>
                                    <td>
                                      <p className="itemtext digits">
                                        {item.qty}
                                      </p>
                                    </td>
                                    <td>
                                      <p className="itemtext digits">
                                        {symbol}
                                        {item.price}
                                      </p>
                                    </td>
                                  </tr>
                                );
                              })}
                              <tr>
                                <td className="payment digits">
                                  <p className="itemtext digits">
                                    {symbol}
                                    {getCartTotal(cart)}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                        <Row>
                          <Col md="8">
                            <div>
                              <p className="legal">
                                <strong>{ThankBusiness}</strong>
                                  {ThankBusinessDesc}
                              </p>
                            </div>
                          </Col>
                          <Col md="4">
                            <Form className="text-right">
                              <input
                                type="image"
                                src={require("../../../assets/images/other-images/paypal.png")}
                                name="submit"
                                alt="PayPal - The safer, easier way to pay online!"
                              />
                            </Form>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
const PrintComponent = () => {
  const cart = useSelector((content) => content.Cartdata.cart);
  const symbol = useSelector((content) => content.data.symbol);
  const componentRef = useRef();
  return (
    <Fragment>
      <Breadcrumb parent="Ecommerce" title="Invoice" />
      <Invoice cart={cart} symbol={symbol} ref={componentRef} />
      <Col sm="12" className="text-center my-3">
        <ReactToPrint
          trigger={() => (
            <Button color="primary" className="mr-2">
              {Print}
            </Button>
          )}
          content={() => componentRef.current}
        />
        <Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product`}>
          <Button color="secondary">{Cancel}</Button>
        </Link>
      </Col>
    </Fragment>
  );
};

export default PrintComponent;
