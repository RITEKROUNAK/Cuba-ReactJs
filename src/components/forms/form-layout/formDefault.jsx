import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import { DefaultFormLayout,EmailAddress,Email,Password,Username,Website,BillingInformation,CompanyInformation,InlineForm,InlineFormWithLabel,InlineFormWithoutLabel,HorizontalFormLayout,MegaForm,Submit,Cancel,AccountInformation,Option,Login,ContactNumber,CompanyName,YourName,Checkboxes,Radios,Disabled } from "../../../constant";
const FormDefault = () => { 
  return (
    <Fragment>
      <Breadcrumb parent="Forms" title="Default Forms"/>
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="6">
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{DefaultFormLayout}</h5><span>{"Using the"} <a href="#javascript">{"card"}</a> {"component, you can extend the default collapse behavior to create an accordion."}</span>
                  </CardHeader>
                  <CardBody>
                    <Form className="theme-form">
                      <FormGroup>
                        <Label className="col-form-label pt-0" >{EmailAddress}</Label>
                        <Input className="form-control" type="email" placeholder="Enter email" />
                        <small className="form-text text-muted">{"We'll never share your email with anyone else."}</small>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="exampleInputPassword1">{Password}</Label>
                        <Input className="form-control" type="password" placeholder="Password" />
                      </FormGroup>
                      <div className="checkbox p-0 pl-3">
                        <Input id="dafault-checkbox" type="checkbox" data-original-title="" title=""/>
                        <Label className="mb-0" for="dafault-checkbox">{"Remember my preference"}</Label>
                      </div>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" className="mr-1">{Submit}</Button>
                    <Button color="secondary">{Cancel}</Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{HorizontalFormLayout}</h5><span>{"Using the"} <a href="#javascript">{"card"}</a> {"component, you can extend the default collapse behavior to create an accordion."}</span>
                  </CardHeader>
                  <CardBody>
                    <Form className="theme-form">
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">{Email}</Label>
                        <Col sm="9">
                          <Input className="form-control"  type="email" placeholder="Email"  />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{Password}</Label>
                        <Col sm="9">
                          <Input className="form-control"  type="password" placeholder="Password" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{ContactNumber}</Label>
                        <Col sm="9">
                          <Input className="form-control" type="number" placeholder="Contact" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label" htmlFor="inputPassword3">{CompanyName}</Label>
                        <Col sm="9">
                          <Input className="form-control"  type="text" placeholder="Company name" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{Website}</Label>
                        <Col sm="9">
                          <Input className="form-control"  type="url" placeholder="Website" />
                        </Col>
                      </FormGroup>
                      <FormGroup tag="fieldset">
                        <Row>
                          <label className="col-form-label col-sm-3 pt-0">{Radios}</label>
                          <Col sm="9">
                            <div className="radio radio-primary ml-4">
                              <Input  type="radio" name="radio1" id="radio1" value="option1" />
                              <Label for="radio1">{Option} {"1"}</Label>
                            </div>
                            <div className="radio radio-primary ml-4">
                              <Input  type="radio" name="radio1" id="radio2" value="option1" />
                              <Label for="radio2">{Option} {"2"}</Label>
                            </div>
                            <div className="radio radio-primary ml-4">
                              <Input  type="radio" name="radio1"  value="option1" disabled />
                              <Label>{Disabled}</Label>
                            </div>
                            <div className="radio radio-primary ml-4">
                              <Input  type="radio" name="radio1" value="option1" defaultChecked />
                              <Label>{Option} {"3"}</Label>
                            </div>
                            <div className="radio radio-primary ml-4">
                              <Input  type="radio" name="radio1" id="radio3" value="option1" />
                              <Label for="radio3">{Option} {"4"}</Label>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                      <div className="form-group row mb-0">
                        <Label className="col-sm-3 col-form-Label pb-0">{Checkboxes}</Label>
                        <div className="col-sm-9">
                          <div className="form-group m-checkbox-inline mb-0 ml-3">
                            <div className="checkbox checkbox-primary">
                              <Input id="inline-form-1" type="checkbox" />
                              <Label className="mb-0" htmlFor="inline-form-1">{Option} {"1"}</Label>
                            </div>
                            <div className="checkbox checkbox-primary">
                              <Input id="inline-form-2" type="checkbox" />
                              <Label className="mb-0" htmlFor="inline-form-2">{Option} {"2"}</Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </CardBody>
                  <CardFooter>
                      <Button color="primary" className="mr-1">{Submit}</Button>
                      <Button color="secondary">{Cancel}</Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col sm="12" xl="6">
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{MegaForm}</h5>
                  </CardHeader>
                  <CardBody>
                    <Form className="theme-form mega-form">
                      <h6>{AccountInformation}</h6>
                      <FormGroup>
                        <Label className="col-form-label">{YourName}</Label>
                        <Input className="form-control" type="text" placeholder="your Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{EmailAddress}</Label>
                        <Input className="form-control" type="email" placeholder="Enter email" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{ContactNumber}</Label>
                        <Input className="form-control" type="Number" placeholder="Enter contact number" />
                      </FormGroup>
                      <hr className="mt-4 mb-4" />
                      <h6>{CompanyInformation}</h6>
                      <FormGroup>
                        <Label className="col-form-label">{CompanyName}</Label>
                        <Input className="form-control" type="text" placeholder="Company Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{Website}</Label>
                        <Input className="form-control" type="text" placeholder="Website" />
                      </FormGroup>
                    </Form>
                    <hr className="mt-4 mb-4" />
                    <h6 className="pb-4">{BillingInformation}</h6>
                    <Form className="form-inline theme-form billing-form">
                      <FormGroup>
                        <Input className="form-control" type="text" placeholder="Name On Card" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="Card Number" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="Zip Code" />
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <CardFooter>
                      <Button color="primary" className="mr-1">{Submit}</Button>
                      <Button color="secondary">{Cancel}</Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <h5>{InlineForm}</h5><span>{"Use"}<code>{".form-inline"}</code>{"class in the form to style with inline fields."}</span>
                  </CardHeader>
                  <CardBody>
                    <h6>{InlineFormWithLabel}</h6>
                    <Form className="form-inline theme-form mt-3">
                      <FormGroup>
                        <Label className="col-form-label">{Username}</Label>
                        <Input className="form-control"  type="text" name="inputUsername" placeholder="Username" autoComplete="off" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{Password}</Label>
                        <Input className="form-control"  type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
                      </FormGroup>
                      <FormGroup>
                        <Button color="primary">{Login}</Button>
                      </FormGroup>
                    </Form>
                    <h6>{InlineFormWithoutLabel}</h6>
                    <Form className="form-inline theme-form mt-3 billing-form">
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputUnlabelUsername" placeholder="Username" autoComplete="off" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control"  type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
                      </FormGroup>
                      <FormGroup>
                        <Button color="primary">{Login}</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FormDefault;