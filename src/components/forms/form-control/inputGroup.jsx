import React,{Fragment} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon ,InputGroupText} from 'reactstrap'
import {BasicInputGroups,LeftAddon,RightAddon,JointAddon,LeftRightAddon,SolidStyle,SquareStyle,FlatStyle,RaiseStyle,Submit,Cancel} from "../../../constant";

const InputGroups = (props) =>  {
    return (
      <Fragment>
        <Breadcrumb parent="Form" title="Input Groups"/>
        <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{BasicInputGroups}</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col>
                        <Form>
                          <FormGroup className=" m-form__group">
                            <Label>{LeftAddon}</Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend"><InputGroupText>{"@"}</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <Label>{RightAddon}</Label>
                            <InputGroup>
                              <Input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username"/>
                              <InputGroupAddon addonType="append"><InputGroupText>{"@example.com"}</InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="">
                            <Label>{JointAddon}</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText>{"$"}</InputGroupText><InputGroupText>{"0.00"}</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" mb-0">
                            <Label>{LeftRightAddon}</Label>
                            <InputGroup className="mb-3">
                               <InputGroupAddon addonType="prepend"><InputGroupText>{"$"}</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                              <InputGroupAddon addonType="append"><InputGroupText>{".00"}</InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-solid">
                            <Label>{SolidStyle}</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText>{"@"}</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-square">
                            <Label>{SquareStyle}</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText>{"+"}</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-square">
                            <Label>{RaiseStyle}</Label>
                            <InputGroup className="input-group-air">
                               <InputGroupAddon addonType="prepend"><InputGroupText>{"#"}</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" mb-0">
                            <Label>{LeftRightAddon}</Label>
                            <InputGroup className="pill-input-group">
                               <InputGroupAddon addonType="prepend"><InputGroupText>{"$"}</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                              <InputGroupAddon addonType="append"><InputGroupText>{".00"}</InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" className="m-r-15">{Submit}</Button>
                    <Button color="light">{Cancel}</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <h5>{BasicInputGroups}</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col>
                        <Form>
                          <FormGroup className=" m-form__group">
                            <Label>{LeftAddon}</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-pencil-alt-5"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="Email"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="">
                            <Label>{RightAddon}</Label>
                            <InputGroup>
                              <Input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username"/>
                              <InputGroupAddon addonType="append"><InputGroupText><i className="icofont icofont-ui-dial-phone"></i></InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="">
                            <Label>{JointAddon}</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-unlink"></i></InputGroupText><InputGroupText>{"0.00"}</InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="">
                            <Label>{LeftRightAddon}</Label>
                            <InputGroup className="mb-3">
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-ui-zoom-out"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                              <InputGroupAddon addonType="append"><InputGroupText><i className="icofont icofont-ui-zoom-in"></i></InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-solid">
                            <Label>{SolidStyle}</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-users"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder="999999"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-square">
                            <Label>{FlatStyle}</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-credit-card"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" placeholder=""/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" input-group-square">
                            <Label>{RaiseStyle}</Label>
                            <InputGroup>
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-download"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control input-group-air" type="text" placeholder="https://www.example.com"/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className=" mb-0">
                            <Label>{LeftRightAddon}</Label>
                            <InputGroup className="pill-input-group">
                               <InputGroupAddon addonType="prepend"><InputGroupText><i className="icofont icofont-ui-copy"></i></InputGroupText></InputGroupAddon>
                              <Input className="form-control" type="text" aria-label="Amount (to the nearest dollar)"/>
                              <InputGroupAddon addonType="append"><InputGroupText><i className="icofont icofont-stock-search"></i></InputGroupText></InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary"  className="m-r-15">{Submit}</Button>
                    <Button color="light">{Cancel}</Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default InputGroups;