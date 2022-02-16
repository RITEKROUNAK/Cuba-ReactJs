import React, { Fragment } from "react";
import Breadcrumb from '../../../layout/breadcrumb'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import { CreditCard, DebitCard, ExpirationDate, SelectMonth, SelectYear, Submit, COD, EMI, BankName, SelectCard, SelectDuration,NetBanking } from "../../../constant";

const Productdetails = props => {
  return (
    <Fragment>
      <Breadcrumb parent="Ecommerce" title="Payment Details" />
      <Container fluid={true} className="credit-card">
        <Row>
          <Col xl="8" className="box-col-12 xl-100">
            <Card className="height-equal credit-form">
              <CardHeader className="py-4">
                <h5>{CreditCard}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="7">
                    <Form className="theme-form mega-form">
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="Card number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="date" />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="Full Name"
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col md="5" className="text-center">
                    <img
                      className="img-fluid"
                      src={require("../../../assets/images/ecommerce/card.png")}
                      alt=""
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6" className="box-col-6 debit-card xl-50">
            <Card className="height-equal">
              <CardHeader>
                <h5>{DebitCard}</h5>
              </CardHeader>
              <CardBody>
                <Row className="theme-form e-commerce-form" form>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Full name here"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Card number"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="CVV number"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="CVC"
                    />
                  </FormGroup>
                  <div className="col-12">
                    <label className="col-form-label p-t-0">
                      {ExpirationDate}
                    </label>
                  </div>
                  <FormGroup className="col-6 p-r-0">
                    <select className="form-control" size="1">
                      {SelectMonth.map((months,i) => 
                       <option key={i}>{months}</option>
                      )}
                    </select>
                  </FormGroup>
                  <FormGroup className="col-6">
                    <select className="form-control" size="1">
                      {SelectYear.map((years,i) => 
                       <option key={i}>{years}</option>
                      )}
                    </select>
                  </FormGroup>
                  <div className="col-12">
                    <Button color="primary" className="btn-block">
                      {Submit}
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6" className="box-col-6 xl-50">
            <Card>
              <CardHeader>
                <h5>{COD}</h5>
              </CardHeader>
              <CardBody>
                <Row className="theme-form" form>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Last name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Pincode"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="number"
                      placeholder="Enter mobile number"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="State"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="City"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Address"
                    ></textarea>
                  </FormGroup>
                  <div className="col-12">
                    <Button color="primary" className="btn-block">
                      {Submit}
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6" className="box-col-6 xl-50">
            <Card>
              <CardHeader>
              <h5>{EMI}</h5>
              </CardHeader>
              <CardBody>
                <Row className="theme-form" form>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Last name"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Pincode"
                    />
                  </FormGroup>
                  <FormGroup className="col-6">
                    <select className="form-control" size="1">
                      {BankName.map((name,i) => 
                       <option key={i}>{name}</option>
                      )}
                    </select>
                  </FormGroup>
                  <FormGroup className="col-12">
                    <select className="form-control" size="1">
                      {SelectCard.map((card,i) => 
                       <option key={i}>{card}</option>
                      )}
                    </select>
                  </FormGroup>
                  <FormGroup className="col-12">
                    <select className="form-control" size="1">
                      {SelectDuration.map((duration,i) => 
                       <option key={i}>{duration}</option>
                      )}
                    </select>
                  </FormGroup>
                  <FormGroup className="col-12">
                    <ul className="payment-opt">
                      <li>
                        <img
                          src={require("../../../assets/images/ecommerce/mastercard.png")}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/images/ecommerce/visa.png")}
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={require("../../../assets/images/ecommerce/paypal.png")}
                          alt=""
                        />
                      </li>
                    </ul>
                  </FormGroup>
                  <div className="col-12">
                    <Button color="primary" className="btn-block">
                      {Submit}
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" lg="6" className="box-col-6 xl-50">
            <Card>
              <CardHeader>
                <h5>{NetBanking}</h5>
              </CardHeader>
              <CardBody>
                <Row className="theme-form" form>
                  <FormGroup className="col-12">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="AC Holder name"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Account number"
                    />
                  </FormGroup>
                  <FormGroup className="col-6 p-r-0">
                    <select className="form-control" size="1">
                      {BankName.map((name,i) => 
                       <option key={i}>{name}</option>
                      )}
                    </select>
                  </FormGroup>
                  <FormGroup className="col-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="ICFC code"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Input
                      className="form-control"
                      type="number"
                      placeholder="Enter mobile number"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Other Details"
                    />
                  </FormGroup>
                  <div className="col-12">
                    <Button color="primary" className="btn-block">
                      {Submit}
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Productdetails;
