import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap'
import { SimplePricingCard,BecomeMember, Standard, LorumIpsum, Purchase, Business,Premium,Extra,SignUp } from '../../../constant';
const Pricing = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Price" title="Pricing" />
      <Container fluid={true} >
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader> 
                    <h5>{BecomeMember}</h5>
                  </CardHeader>
                  <CardBody className="row">
                    <Col md="4" sm="6">
                      <div className="pricingtable">
                        <div className="pricingtable-header">
                          <h3 className="title">{Standard}</h3>
                        </div>
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">{"10"}</span><span className="duration">{"/mo"}</span></div>
                        <ul className="pricing-content">
                          <li>{"50GB Disk Space"}</li>
                          <li>{"50 Email Accounts"}</li>
                          <li>{"Maintenance"}</li>
                          <li>{"15 Subdomains"}</li>
                        </ul>
                        <div className="pricingtable-signup"><Button color="primary" size="lg">{SignUp}</Button></div>
                      </div>
                    </Col>
                    <Col md="4" sm="6">
                      <div className="pricingtable">
                        <div className="pricingtable-header">
                          <h3 className="title">{Premium}</h3>
                        </div>
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">{"20"}</span><span className="duration">{"/mo"}</span></div>
                        <ul className="pricing-content">
                          <li>{"10% on all product"}</li>
                          <li>{"50 Email Accounts"}</li>
                          <li>{"Maintenance"}</li>
                          <li>{"15 Subdomains"}</li>
                        </ul>
                        <div className="pricingtable-signup"><Button color="primary" size="lg">{SignUp}</Button></div>
                      </div>
                    </Col>
                    <Col md="4" sm="6">
                      <div className="pricingtable">
                        <div className="pricingtable-header">
                          <h3 className="title">{"Auther pack"}</h3>
                        </div>
                        <div className="price-value"><span className="currency">{"$"}</span><span className="amount">{"50"}</span><span className="duration">{"/mo"}</span></div>
                        <ul className="pricing-content">
                          <li>{"Upload 50 product"}</li>
                          <li>{"50 Email Accounts"}</li>
                          <li>{"Maintenance"}</li>
                          <li>{"15 Subdomains"}</li>
                        </ul>
                        <div className="pricingtable-signup"><Button color="primary" size="lg">{SignUp}</Button></div>
                      </div>
                    </Col>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader> 
                    <h5>{SimplePricingCard}</h5>
                  </CardHeader>
                  <Row className="card-body pricing-content">
                    <Col xl="3 xl-50" sm="6" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>{Standard}</h3>
                          <h1>{"$15"}</h1>
                          <h6 className="mb-0">{LorumIpsum}</h6>
                        </CardBody><Button className="btn-block" size="lg" color="primary">
                          <h5 className="mb-0">{Purchase}</h5></Button>
                      </Card>
                    </Col>
                    <Col xl="3 xl-50" sm="6" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>{Business}</h3>
                          <h1>{"$25"}</h1>
                          <h6 className="mb-0">{LorumIpsum}</h6>
                        </CardBody><Button className="btn-block" size="lg" color="primary">
                          <h5 className="mb-0">{Purchase}</h5></Button>
                      </Card>
                    </Col>
                    <Col xl="3 xl-50" sm="6" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>{Premium}</h3>
                          <h1>{"$35"}</h1>
                          <h6 className="mb-0">{LorumIpsum}</h6>
                        </CardBody><Button className="btn-block" size="lg" color="primary">
                          <h5 className="mb-0">{Purchase}</h5></Button>
                      </Card>
                    </Col>
                    <Col xl="3 xl-50" sm="6" className="box-col-6">
                      <Card className="text-center pricing-simple">
                        <CardBody>
                          <h3>{Extra}</h3>
                          <h1>{"$45"}</h1>
                          <h6 className="mb-0">{LorumIpsum}</h6>
                        </CardBody><Button className="btn-block" size="lg" color="primary">
                          <h5 className="mb-0">{Purchase}</h5></Button>
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
    </Fragment>
  );
}

export default Pricing;