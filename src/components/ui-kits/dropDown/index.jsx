import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody,CardHeader,Dropdown,DropdownMenu, DropdownItem,Button } from 'reactstrap';
import {DropDownButtonColor,DropDownSplit,DropDownRounded} from './dropDownComponent'
import {BasicDropdown,DropdownButton,Action,AnotherAction,AnotherLink,SomethingElseHere,BasicColorDropdown,DropdownSplitButton,RoundedDropdown,DropdownWithDivider,DropdownWithHeader,DropdownWithDisable,DropdownWithDropUp,Normal,Active,Disabled,DropdownHeader} from '../../../constant'

const Dropdowns = (props) => {
    return (
            <Fragment>
            <Breadcrumb parent="Ui Kits" title="Dropdown"/>
            <Container fluid={true}>
            <Row>
              <Col sn="12" xl="12">
                <Card>
                  <CardHeader>
                    <h5>{BasicDropdown}</h5>
                  </CardHeader>
                  <CardBody className="dropdown-basic">
                  <Dropdown className="dropdown">
                      <Button color="primary" className="dropbtn">{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Button>
                      <DropdownMenu className="dropdown-content">
                          <DropdownItem href="#">{Action}</DropdownItem>
                          <DropdownItem href="#">{AnotherAction}</DropdownItem>
                          <DropdownItem href="#">{SomethingElseHere}</DropdownItem>
                      </DropdownMenu>
                 </Dropdown>
                  </CardBody>
                </Card>
              </Col>
              <Col sn="12" xl="12">
                <Card>
                  <CardHeader>
                    <h5>{BasicColorDropdown}</h5>
                  </CardHeader>
                  <CardBody className="dropdown-basic">
                    <DropDownButtonColor/>
                  </CardBody>
                </Card>
              </Col>
              <Col sn="12" xl="12">
                <Card>
                  <CardHeader>
                    <h5>{DropdownSplitButton}</h5>
                  </CardHeader>
                  <CardBody className="dropdown-basic">
                    <DropDownSplit/>
                  </CardBody>
                </Card>
              </Col>
              <Col sn="12" xl="12">
                <Card>
                  <CardHeader>
                    <h5>{RoundedDropdown}</h5>
                  </CardHeader>
                  <CardBody className="dropdown-basic">
                    <DropDownRounded/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{DropdownWithDivider}</h5><span>{"Use a class"} <code>{".dropdown-divider"}</code></span>
                  </CardHeader>
                  <CardBody className="dropdown-basic">
                    <Dropdown>
                      <Button color="primary" className="dropbtn" >{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Button>
                      <DropdownMenu className="dropdown-content">
                          <DropdownItem href="#">{"Link 1"}</DropdownItem>
                          <DropdownItem href="#">{"Link 2"}</DropdownItem>
                          <DropdownItem href="#">{"Link 3"}</DropdownItem>
                          <DropdownItem divider/>
                          <DropdownItem href="#">{AnotherLink}</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{DropdownWithHeader}</h5><span>{"Use a class"} <code>{".dropdown-header"}</code></span>
                  </CardHeader>
                  <CardBody className="dropdown-basic">
                    <Dropdown>
                      <Button color="primary" className="dropbtn" >{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Button>
                      <DropdownMenu className="dropdown-content">
                          <DropdownItem header>{DropdownHeader}</DropdownItem>
                          <DropdownItem href="#">{"Link 1"}</DropdownItem>
                          <DropdownItem href="#">{"Link 2"}</DropdownItem>
                          <DropdownItem header>{DropdownHeader}</DropdownItem>
                          <DropdownItem href="#">{AnotherLink}</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{DropdownWithDisable}</h5><span>{"Use a class"} <code>{".dropdown-disabled"}</code></span>
                  </CardHeader>
                  <CardBody className="dropup-basic">
                    <Dropdown className="dropup">
                      <Button color="primary" className="dropbtn" >{DropdownButton} <span><i className="icofont icofont-arrow-up"></i></span></Button>
                      <DropdownMenu className="dropup-content">
                        <DropdownItem href="#">{Normal}</DropdownItem>
                        <DropdownItem href="#" active>{Active}</DropdownItem>
                        <DropdownItem href="#" disabled>{Disabled}</DropdownItem>
                     </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{DropdownWithDropUp}</h5><span>{"Use a class"} <code>{".drop-up"}</code></span>
                  </CardHeader>
                  <CardBody className="dropup-basic">
                    <Dropdown className="dropup">
                      <Button color="primary" className="dropbtn" >{DropdownButton} <span><i className="icofont icofont-arrow-up"></i></span></Button>
                      <DropdownMenu className="dropup-content">
                          <DropdownItem href="#">{"Link 1"}</DropdownItem>
                          <DropdownItem href="#">{"Link 2"}</DropdownItem>
                     </DropdownMenu>
                    </Dropdown>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default Dropdowns;