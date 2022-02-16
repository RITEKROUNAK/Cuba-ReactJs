import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Button, Media, Form, Label, Input } from 'reactstrap'
import { DefaultStyle,COD,Fast,NoBorder,OfferStyleBorder,InlineStyle,Free,Submit,Cancel,VerticalStyle,HorizontalStyle,SolidBorderStyle,Local,XYZSeller,ABCSeller,Standard,DeliveryOption,BuyingOption } from "../../../constant";
const MegaOption = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Form" title="Mega Options" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="6 xl-100 box-col-12">
            <Card>
              <CardHeader>
                <h5>{DefaultStyle}</h5><span>{"This option is show buydefault you don't need to add any extra class"}</span>
              </CardHeader>
              <CardBody className="megaoptions-border-space-sm">
                <Form className="mega-inline">
                  <Row>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio14" type="radio" name="radio1" value="option1" />
                            <Label for="radio14"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-secondary mr-3">
                            <Input id="radio13" type="radio" name="radio1" value="option1" />
                            <Label for="radio13"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className=" text-right">
                <Button color="primary" className="m-r-15" type="submit">{Submit}</Button>
                <Button color="light" type="submit">{Cancel}</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100 box-col-12">
            <Card>
              <CardHeader>
                <h5>{NoBorder}</h5><span>{"By adding .plain-style class to .mega-inline You can archive this style"}</span>
              </CardHeader>
              <CardBody>
                <Form className="mega-inline plain-style">
                  <Row>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio11" type="radio" name="radio1" value="option1" />
                            <Label for="radio11"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-secondary mr-3">
                            <Input id="radio12" type="radio" name="radio1" value="option1" />
                            <Label for="radio12"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="text-right">
                <Button color="primary" className="m-r-15" type="submit">{Submit}</Button>
                <Button color="light" type="submit">{Cancel}</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100 box-col-12">
            <Card>
              <CardHeader>
                <h5>{SolidBorderStyle}</h5><span>{"By adding .border-style class to .mega-inline You can archive this style"}</span>
              </CardHeader>
              <CardBody className="megaoptions-border-space-sm">
                <Form className="mega-inline border-style">
                  <Row>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio15" type="radio" name="radio1" value="option1" />
                            <Label for="radio15"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio16" type="radio" name="radio1" value="option1" />
                            <Label for="radio16"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className=" text-right">
                <Button color="primary" className="m-r-15" type="submit">{Submit}</Button>
                <Button color="light" type="submit">{Cancel}</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100 box-col-12">
            <Card>
              <CardHeader>
                <h5>{OfferStyleBorder}</h5><span>{"By adding .offer-style class to .mega-inline You can archive this style"}</span>
              </CardHeader>
              <CardBody className="megaoptions-border-space-sm">
                <Form className="mega-inline offer-style">
                  <Row>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio17" type="radio" name="radio1" value="option1" />
                            <Label for="radio17"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-secondary mr-3">
                            <Input id="radio18" type="radio" name="radio1" value="option1" />
                            <Label for="radio18"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="text-right">
                <Button color="primary" className="m-r-15" type="submit">{Submit}</Button>
                <Button color="light" type="submit">{Cancel}</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{InlineStyle}</h5><span>{"For Create inline megaoption add"} <code>{".mega-inline"}</code> {"class in form tag"}</span>
              </CardHeader>
              <CardBody className="megaoptions-border-space-sm">
                <Form className="mega-inline">
                  <Row>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio19" type="radio" name="radio1" value="option1" />
                            <Label for="radio19"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                            <p>{"Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-secondary mr-3">
                            <Input id="radio20" type="radio" name="radio1" value="option1" />
                            <Label for="radio20"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Fast}<span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-secondary mr-3">
                            <Input id="radio21" type="radio" name="radio1" value="option1" />
                            <Label for="radio21"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Standard}<span className="badge badge-secondary pull-right digits">{"80 INR"}</span></h6>
                            <p>{"Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio22" type="radio" name="radio1" value="option1" />
                            <Label for="radio22"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Local} <span className="badge badge-primary pull-right digits">{Free}</span></h6>
                            <p>{"Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className=" text-right">
                <Button color="primary" className="m-r-15" type="submit">{Submit}</Button>
                <Button color="light" type="submit">{Cancel}</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100 box-col-12">
            <div className="card height-equal">
              <CardHeader>
                <h5>{VerticalStyle}</h5><span>{"For Create inline megaoption add"} <code>{".mega-vertical"}</code> {"class in form tag"}</span>
              </CardHeader>
              <CardBody>
                <Form className="mega-vertical">
                  <Row>
                    <Col sm="12">
                      <p className="mega-title m-b-5">{DeliveryOption}</p>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio23" type="radio" name="radio1" value="option1" />
                            <Label for="radio23"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                            <p>{"Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-secondary mr-3">
                            <Input id="radio24" type="radio" name="radio1" value="option1" />
                            <Label for="radio24"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Fast} <span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                            <p>{"Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-success mr-3">
                            <Input id="radio25" type="radio" name="radio1" value="option1" />
                            <Label for="radio25"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Standard} <span className="badge badge-success pull-right digits">{"80 INR"}</span></h6>
                            <p>{"Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-info mr-3">
                            <Input id="radio5" type="radio" name="radio1" value="option1" />
                            <Label for="radio5"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Local} <span className="badge badge-info pull-right digits">{Free}</span></h6>
                            <p>{"Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="12">
                      <p className="mega-title m-b-5">{BuyingOption}</p>
                    </Col>
                    <Col sm="6">
                      <Card className="mb-0">
                        <Media className="p-20">
                          <div className="radio radio-warning mr-3">
                            <Input id="radio26" type="radio" name="radio1" value="option1" />
                            <Label for="radio26"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{XYZSeller}<span className="badge badge-warning pull-right digits">{"250 INR"}</span></h6>
                            <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{"5 start rating"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card className="mb-0">
                        <Media className="p-20">
                          <div className="radio radio-danger mr-3">
                            <Input id="radio27" type="radio" name="radio1" value="option1" />
                            <Label for="radio27"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{ABCSeller}<span className="badge badge-danger pull-right digits">{"150 INR"}</span></h6>
                            <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{"1 start rating"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className=" text-right">
                <Button color="primary" className="m-r-15" type="submit">{Submit}</Button>
                <Button color="light" type="submit">{Cancel}</Button>
              </CardFooter>
            </div>
          </Col>
          <Col sm="12" xl="6 xl-100 box-col-12">
            <Card className="height-equal">
              <CardHeader>
                <h5>{HorizontalStyle}</h5><span>{"For Create inline megaoption add"} <code>{".mega-horizontal"}</code> {"class in form tag"}</span>
              </CardHeader>
              <CardBody>
                <Form className="mega-horizontal">
                  <Row>
                    <Col sm="3">
                      <p className="mega-title">{DeliveryOption}</p>
                    </Col>
                    <Col sm="9">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-primary mr-3">
                            <Input id="radio30" type="radio" name="radio1" value="option1" />
                            <Label for="radio30"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{COD}<span className="badge badge-primary pull-right digits">{"50 INR"}</span></h6>
                            <p>{"Estimated 5 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="9 offset-sm-3">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-secondary mr-3">
                            <Input id="radio31" type="radio" name="radio1" value="option1" />
                            <Label for="radio31"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{Fast} <span className="badge badge-secondary pull-right digits">{"100 INR"}</span></h6>
                            <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="3">
                      <p className="mega-title">{BuyingOption}</p>
                    </Col>
                    <Col sm="9">
                      <Card>
                        <Media className="p-20">
                          <div className="radio radio-success mr-3">
                            <Input id="radio32" type="radio" name="radio1" value="option1" />
                            <Label for="radio32"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{XYZSeller}<span className="badge badge-success pull-right digits">{"250 INR"}</span></h6>
                            <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star txt-warning m-r-5"></i>{"5 start rating"}</p>
                          </Media>
                        </Media>
                      </Card>
                    </Col>
                    <Col sm="9 offset-sm-3">
                      <div className="card mb-0">
                        <Media className="p-20">
                          <div className="radio radio-info mr-3">
                            <Input id="radio33" type="radio" name="radio1" value="option1" />
                            <Label for="radio33"></Label>
                          </div>
                          <Media body>
                            <h6 className="mt-0 mega-title-badge">{ABCSeller}<span className="badge badge-info pull-right digits">{"150 INR"}</span></h6>
                            <p className="rating-star-wrapper"><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{"1 start rating"}</p>
                          </Media>
                        </Media>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className=" text-right">
                <Button color="primary" className="m-r-15" type="submit">{Submit}</Button>
                <Button color="light" type="submit">{Cancel}</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default MegaOption;