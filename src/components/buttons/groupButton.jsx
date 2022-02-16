import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, ButtonGroup, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Label } from 'reactstrap';
import {Left,Right,Middle,BasicButtonGroup,EdgesButtonGroup,FlatButtonGroup,LargeButtonGroup,OutlineButtonGroup,OutlineCustomButtonGroup,OutlineFlatButton,Add,CheckBoxButtonGroup,Nesting,Vertical,LargeEdgesButtonGroup,OutlineEdgesButton,RadioButtonGroup,} from "../../constant";
const GroupButton = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Buttons" title="Button Group" />
            <Container fluid={true}>
                <Row>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{BasicButtonGroup}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button color="primary">{Left}</Button>
                                            <Button color="primary">{Middle}</Button>
                                            <Button color="primary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button color="secondary">{Left}</Button>
                                            <Button color="secondary">{Middle}</Button>
                                            <Button color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button color="success">{Left}</Button>
                                            <Button color="success">{Middle}</Button>
                                            <Button color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button color="info">{Left}</Button>
                                            <Button color="info">{Middle}</Button>
                                            <Button color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button color="warning">{Left}</Button>
                                            <Button color="warning">{Middle}</Button>
                                            <Button color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button color="danger">{Left}</Button>
                                            <Button color="danger">{Middle}</Button>
                                            <Button color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button color="light">{Left}</Button>
                                            <Button color="light">{Middle}</Button>
                                            <Button color="light">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>

                                    <Col xl="4" md="6" sm="12 xl-50" className="Button-group-mb-sm">
                                        <ButtonGroup>
                                            <Button color="dark">{Left}</Button>
                                            <Button color="dark">{Middle}</Button>
                                            <Button color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{EdgesButtonGroup}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="primary">{Left}</Button>
                                            <Button color="primary">{Middle}</Button>
                                            <Button color="primary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="secondary">{Left}</Button>
                                            <Button color="secondary">{Middle}</Button>
                                            <Button color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="success">{Left}</Button>
                                            <Button color="success">{Middle}</Button>
                                            <Button color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="info">{Left}</Button>
                                            <Button color="info">{Middle}</Button>
                                            <Button color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="warning">{Left}</Button>
                                            <Button color="warning">{Middle}</Button>
                                            <Button color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="danger">{Left}</Button>
                                            <Button color="danger">{Middle}</Button>
                                            <Button color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="light">{Left}</Button>
                                            <Button color="light">{Middle}</Button>
                                            <Button color="light">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 " className="button-group-mb-sm xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="dark">{Left}</Button>
                                            <Button color="dark">{Middle}</Button>
                                            <Button color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{FlatButtonGroup}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="primary">{Left}</Button>
                                            <Button color="primary">{Middle}</Button>
                                            <Button color="primary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="secondary">{Left}</Button>
                                            <Button color="secondary">{Middle}</Button>
                                            <Button color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="success">{Left}</Button>
                                            <Button color="success">{Middle}</Button>
                                            <Button color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="info">{Left}</Button>
                                            <Button color="info">{Middle}</Button>
                                            <Button color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="dark">{Left}</Button>
                                            <Button color="dark">{Middle}</Button>
                                            <Button color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="warning">{Left}</Button>
                                            <Button color="warning">{Middle}</Button>
                                            <Button color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="danger">{Left}</Button>
                                            <Button color="danger">{Middle}</Button>
                                            <Button color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="light">{Left}</Button>
                                            <Button color="light">{Middle}</Button>
                                            <Button color="light">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12" className="button-group-mb-sm xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button color="dark">{Left}</Button>
                                            <Button color="dark">{Middle}</Button>
                                            <Button color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{LargeButtonGroup}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup>
                                            <Button size="lg" color="primary">{Left}</Button>
                                            <Button size="lg" color="primary">{Middle}</Button>
                                            <Button size="lg" color="primary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup>
                                            <Button size="lg" color="secondary">{Left}</Button>
                                            <Button size="lg" color="secondary">{Middle}</Button>
                                            <Button size="lg" color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup>
                                            <Button size="lg" color="success">{Left}</Button>
                                            <Button size="lg" color="success">{Middle}</Button>
                                            <Button size="lg" color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup>
                                            <Button size="lg" color="info">{Left}</Button>
                                            <Button size="lg" color="info">{Middle}</Button>
                                            <Button size="lg" color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup>
                                            <Button size="lg" color="warning">{Left}</Button>
                                            <Button size="lg" color="warning">{Middle}</Button>
                                            <Button size="lg" color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup>
                                            <Button size="lg" color="danger">{Left}</Button>
                                            <Button size="lg" color="danger">{Middle}</Button>
                                            <Button size="lg" color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup>
                                            <Button size="lg" color="light">{Left}</Button>
                                            <Button size="lg" color="light">{Middle}</Button>
                                            <Button size="lg" color="light">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12" className="button-group-mb-sm">
                                        <ButtonGroup>
                                            <Button size="lg" color="dark">{Left}</Button>
                                            <Button size="lg" color="dark">{Middle}</Button>
                                            <Button size="lg" color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{LargeEdgesButtonGroup}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button size="lg" color="primary">{Left}</Button>
                                            <Button size="lg" color="primary">{Middle}</Button>
                                            <Button size="lg" color="primary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button size="lg" color="secondary">{Left}</Button>
                                            <Button size="lg" color="secondary">{Middle}</Button>
                                            <Button size="lg" color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button size="lg" color="success">{Left}</Button>
                                            <Button size="lg" color="success">{Middle}</Button>
                                            <Button size="lg" color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button size="lg" color="info">{Left}</Button>
                                            <Button size="lg" color="info">{Middle}</Button>
                                            <Button size="lg" color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button size="lg" color="warning">{Left}</Button>
                                            <Button size="lg" color="warning">{Middle}</Button>
                                            <Button size="lg" color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button size="lg" color="danger">{Left}</Button>
                                            <Button size="lg" color="danger">{Middle}</Button>
                                            <Button size="lg" color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button size="lg" color="light">{Left}</Button>
                                            <Button size="lg" color="light">{Middle}</Button>
                                            <Button size="lg" color="light">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12" className="button-group-mb-sm">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button size="lg" color="dark">{Left}</Button>
                                            <Button size="lg" color="dark">{Middle}</Button>
                                            <Button size="lg" color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{OutlineCustomButtonGroup}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="primary">{Left}</Button>
                                            <Button color="primary">{Middle}</Button>
                                            <Button outline color="primary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="secondary">{Left}</Button>
                                            <Button color="secondary">{Middle}</Button>
                                            <Button outline color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="success">{Left}</Button>
                                            <Button color="success">{Middle}</Button>
                                            <Button outline color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="info">{Left}</Button>
                                            <Button color="info">{Middle}</Button>
                                            <Button outline color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="warning">{Left}</Button>
                                            <Button color="warning">{Middle}</Button>
                                            <Button outline color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="danger">{Left}</Button>
                                            <Button color="danger">{Middle}</Button>
                                            <Button outline color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="light txt-dark">{Left}</Button>
                                            <Button color="light">{Middle}</Button>
                                            <Button outline color="light txt-dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12" className="button-group-mb-sm xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="dark">{Left}</Button>
                                            <Button color="dark">{Middle}</Button>
                                            <Button outline color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{OutlineCustomButtonGroup}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="primary">{Left}</Button>
                                            <Button outline color="primary">{Middle}</Button>
                                            <Button color="primary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="secondary">{Left}</Button>
                                            <Button outline color="secondary">{Middle}</Button>
                                            <Button color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="success">{Left}</Button>
                                            <Button outline color="success">{Middle}</Button>
                                            <Button color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="info">{Left}</Button>
                                            <Button outline color="info">{Middle}</Button>
                                            <Button color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="warning">{Left}</Button>
                                            <Button outline color="warning">{Middle}</Button>
                                            <Button color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="danger">{Left}</Button>
                                            <Button outline color="danger">{Middle}</Button>
                                            <Button color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="light">{Left}</Button>
                                            <Button outline color="light txt-dark">{Middle}</Button>
                                            <Button color="light">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12" className="button-group-mb-sm xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button color="dark">{Left}</Button>
                                            <Button outline color="dark">{Middle}</Button>
                                            <Button color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{OutlineButtonGroup}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button outline color="primary" type="button">{Left}</Button>
                                            <Button outline color="primary" type="button">{Middle}</Button>
                                            <Button outline color="primary" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button outline color="secondary">{Left}</Button>
                                            <Button outline color="secondary">{Middle}</Button>
                                            <Button outline color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button outline color="success">{Left}</Button>
                                            <Button outline color="success">{Middle}</Button>
                                            <Button outline color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button outline color="info">{Left}</Button>
                                            <Button outline color="info">{Middle}</Button>
                                            <Button outline color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button outline color="warning">{Left}</Button>
                                            <Button outline color="warning">{Middle}</Button>
                                            <Button outline color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button outline color="danger">{Left}</Button>
                                            <Button outline color="danger">{Middle}</Button>
                                            <Button outline color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup>
                                            <Button outline color="light txt-dark">{Left}</Button>
                                            <Button outline color="light txt-dark">{Middle}</Button>
                                            <Button outline color="light txt-dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12" className="button-group-mb-sm xl-50">
                                        <ButtonGroup>
                                            <Button outline color="dark">{Left}</Button>
                                            <Button outline color="dark">{Middle}</Button>
                                            <Button outline color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{OutlineEdgesButton}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="primary" type="button">{Left}</Button>
                                            <Button outline color="primary" type="button">{Middle}</Button>
                                            <Button outline color="primary" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="secondary" type="button">{Left}</Button>
                                            <Button outline color="secondary" type="button">{Middle}</Button>
                                            <Button outline color="secondary" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="success" type="button">{Left}</Button>
                                            <Button outline color="success" type="button">{Middle}</Button>
                                            <Button outline color="success" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="info" type="button">{Left}</Button>
                                            <Button outline color="info" type="button">{Middle}</Button>
                                            <Button outline color="info" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="warning" type="button">{Left}</Button>
                                            <Button outline color="warning" type="button">{Middle}</Button>
                                            <Button outline color="warning" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="danger" type="button">{Left}</Button>
                                            <Button outline color="danger" type="button">{Middle}</Button>
                                            <Button outline color="danger" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="light txt-dark" type="button">{Left}</Button>
                                            <Button outline color="light txt-dark" type="button">{Middle}</Button>
                                            <Button outline color="light txt-dark" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12" className="button-group-mb-sm xl-50">
                                        <ButtonGroup className="btn-group-pill">
                                            <Button outline color="dark" type="button">{Left}</Button>
                                            <Button outline color="dark" type="button">{Middle}</Button>
                                            <Button outline color="dark" type="button">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{OutlineFlatButton}</h5>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button outline color="primary">{Left}</Button>
                                            <Button outline color="primary">{Middle}</Button>
                                            <Button outline color="primary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button outline color="secondary">{Left}</Button>
                                            <Button outline color="secondary">{Middle}</Button>
                                            <Button outline color="secondary">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button outline color="success">{Left}</Button>
                                            <Button outline color="success">{Middle}</Button>
                                            <Button outline color="success">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button outline color="info">{Left}</Button>
                                            <Button outline color="info">{Middle}</Button>
                                            <Button outline color="info">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button outline color="warning">{Left}</Button>
                                            <Button outline color="warning">{Middle}</Button>
                                            <Button outline color="warning">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button outline color="danger">{Left}</Button>
                                            <Button outline color="danger">{Middle}</Button>
                                            <Button outline color="danger">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12 xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button outline color="light txt-dark">{Left}</Button>
                                            <Button outline color="light txt-dark">{Middle}</Button>
                                            <Button outline color="light txt-dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="4" md="6" sm="12" className="button-group-mb-sm xl-50">
                                        <ButtonGroup className="btn-group-square">
                                            <Button outline color="dark">{Left}</Button>
                                            <Button outline color="dark">{Middle}</Button>
                                            <Button outline color="dark">{Right}</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{RadioButtonGroup}</h5><span>{Add} <code>{".active"}</code> {"for active state and"}<code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute"}</span>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="4" md="6" lg="12" sm="12 xl-50">
                                        <div className="btn-radio">
                                            <ButtonGroup>
                                                <Button color="primary">
                                                    <div className="radio radio-primary">
                                                        <input id="radio7" type="radio" name="radio1" value="option1" />
                                                        <Label htmlFor="radio7">{"Option 1"}</Label>
                                                    </div>
                                                </Button>
                                                <Button color="primary" active>
                                                    <div className="radio radio-primary">
                                                        <input id="radio8" type="radio" name="radio1" value="option1" defaultChecked />
                                                        <Label htmlFor="radio8">{"Option 2"}</Label>
                                                    </div>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col xl="4" md="6" lg="12" sm="12 xl-50">
                                        <div className="btn-radio">
                                            <ButtonGroup>
                                                <Button color="secondary">
                                                    <div className="radio radio-secondary">
                                                        <input id="radio11" type="radio" name="radio2" value="option1" />
                                                        <Label htmlFor="radio11">{"Option 1"}</Label>
                                                    </div>
                                                </Button>
                                                <Button color="secondary" active>
                                                    <div className="radio radio-secondary">
                                                        <input id="radio12" type="radio" name="radio2" value="option1" defaultChecked />
                                                        <Label htmlFor="radio12">{"Option 2"}</Label>
                                                    </div>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col xl="4" md="6" lg="12" sm="12 xl-50">
                                        <div className="btn-radio">
                                            <ButtonGroup>
                                                <Button color="success">
                                                    <div className="radio radio-success">
                                                        <input id="radio13" type="radio" name="radio3" value="option1" />
                                                        <Label htmlFor="radio13">{"Option 1"}</Label>
                                                    </div>
                                                </Button>
                                                <Button color="success" active>
                                                    <div className="radio radio-success">
                                                        <input id="radio14" type="radio" name="radio3" value="option1" defaultChecked />
                                                        <Label htmlFor="radio14">{"Option 2"}</Label>
                                                    </div>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col xl="4" md="6" lg="12" sm="12 xl-50">
                                        <div className="btn-radio">
                                            <ButtonGroup>
                                                <Button color="info">
                                                    <div className="radio radio-info">
                                                        <input id="radio15" type="radio" name="radio4" value="option1" />
                                                        <Label htmlFor="radio15">{"Option 1"}</Label>
                                                    </div>
                                                </Button>
                                                <Button color="info" active>
                                                    <div className="radio radio-info">
                                                        <input id="radio16" type="radio" name="radio4" value="option1" defaultChecked />
                                                        <Label htmlFor="radio16">{"Option 2"}</Label>
                                                    </div>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col xl="4" md="6" lg="12" sm="12 xl-50">
                                        <div className="btn-radio">
                                            <ButtonGroup>
                                                <Button color="warning">
                                                    <div className="radio radio-warning">
                                                        <input id="radio17" type="radio" name="radio5" value="option1" />
                                                        <Label htmlFor="radio17">{"Option 1"}</Label>
                                                    </div>
                                                </Button>
                                                <Button color="warning" active>
                                                    <div className="radio radio-warning">
                                                        <input id="radio18" type="radio" name="radio5" value="option1" defaultChecked />
                                                        <Label htmlFor="radio18">{"Option 2"}</Label>
                                                    </div>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col xl="4" md="6" lg="12" sm="12 xl-50">
                                        <div className="btn-radio">
                                            <ButtonGroup>
                                                <Button color="danger">
                                                    <div className="radio radio-danger">
                                                        <input id="radio20" type="radio" name="radio6" value="option1" />
                                                        <Label htmlFor="radio20">{"Option 1"}</Label>
                                                    </div>
                                                </Button>
                                                <Button color="danger" active>
                                                    <div className="radio radio-danger">
                                                        <input id="radio22" type="radio" name="radio6" value="option1" defaultChecked />
                                                        <Label htmlFor="radio22">{"Option 2"}</Label>
                                                    </div>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                    <Col xl="4" md="6" lg="12" sm="12" className="button-group-mb-sm xl-50">
                                        <div className="btn-radio">
                                            <ButtonGroup>
                                                <Button color="light txt-dark">
                                                    <div className="radio radio-light">
                                                        <input id="radio23" type="radio" name="radio7" value="option1" />
                                                        <Label htmlFor="radio23">{"Option 1"}</Label>
                                                    </div>
                                                </Button>
                                                <Button color="light  txt-dark" active>
                                                    <div className="radio radio-light">
                                                        <input id="radio24" type="radio" name="radio7" value="option1" defaultChecked />
                                                        <Label htmlFor="radio24">{"Option 2"}</Label>
                                                    </div>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardHeader>
                                <h5>{CheckBoxButtonGroup}</h5><span>{Add} <code>{".active"}</code> {"for active state and"} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute"}</span>
                            </CardHeader>
                            <CardBody className="btn-group-showcase">
                                <Row>
                                    <Col xl="6" sm="12">
                                        <ButtonGroup className="btn-option">
                                            <Button color="primary">
                                                <div className="checkbox checkbox-primary">
                                                    <input id="checkbox-primary-1" type="checkbox" />
                                                    <Label htmlFor="checkbox-primary-1">{"Option 1"}</Label>
                                                </div>
                                            </Button>
                                            <Button color="primary">
                                                <div className="checkbox checkbox-primary">
                                                    <input id="checkbox-primary-2" type="checkbox" />
                                                    <Label htmlFor="checkbox-primary-2">{"Option 2"}</Label>
                                                </div>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <Button color="secondary">
                                                <div className="checkbox checkbox-secondary">
                                                    <input id="checkbox-primary-3" type="checkbox" />
                                                    <Label htmlFor="checkbox-primary-3">{"Option 1"}</Label>
                                                </div>
                                            </Button>
                                            <Button color="secondary">
                                                <div className="checkbox checkbox-secondary">
                                                    <input id="checkbox-primary-4" type="checkbox" />
                                                    <Label htmlFor="checkbox-primary-4">{"Option 2"}</Label>
                                                </div>
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <Button color="success">
                                                <div className="checkbox checkbox-success">
                                                    <input id="checkbox-primary-5" type="checkbox" />
                                                    <Label htmlFor="checkbox-primary-5">{"Option 1"}</Label>
                                                </div>
                                            </Button>
                                            <Button color="success">
                                                <div className="checkbox checkbox-success">
                                                    <input id="checkbox-primary-6" type="checkbox" />
                                                    <Label htmlFor="checkbox-primary-6">{"Option 2"}</Label>
                                                </div>
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <Button color="info">
                                                <div className="checkbox checkbox-info">
                                                    <input id="checkbox-primary-7" type="checkbox" />
                                                    <Label htmlFor="checkbox-primary-7">{"Option 1"}</Label>
                                                </div>
                                            </Button>
                                            <Button color="info">
                                                <div className="checkbox checkbox-info">
                                                    <input id="checkbox-primary-8" type="checkbox" />
                                                    <Label htmlFor="checkbox-primary-8">{"Option 2"}</Label>
                                                </div>
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <Button color="warning">
                                                <div className="checkbox checkbox-warning">
                                                    <input id="checkbox-warning-9" type="checkbox" />
                                                    <Label htmlFor="checkbox-warning-9">{"Option 1"}</Label>
                                                </div>
                                            </Button>
                                            <Button color="warning">
                                                <div className="checkbox checkbox-warning">
                                                    <input id="checkbox-warning-10" type="checkbox" />
                                                    <Label htmlFor="checkbox-warning-10">{"Option 2"}</Label>
                                                </div>
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col xl="6" sm="12">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <Button color="danger">
                                                <div className="checkbox checkbox-danger">
                                                    <input id="checkbox-danger-11" type="checkbox" />
                                                    <Label htmlFor="checkbox-danger-11">{"Option 1"}</Label>
                                                </div>
                                            </Button>
                                            <Button color="danger">
                                                <div className="checkbox checkbox-danger">
                                                    <input id="checkbox-danger-12" type="checkbox" />
                                                    <Label htmlFor="checkbox-danger-12">{"Option 2"}</Label>
                                                </div>
                                            </Button>
                                        </div>
                                    </Col>
                                    <div className="col-xl-6 col-sm-12 button-group-mb-sm">
                                        <div className="btn-group btn-option" data-toggle="buttons">
                                            <Button color="light txt-dark">
                                                <div className="checkbox checkbox-light">
                                                    <input id="checkbox-light-13" type="checkbox" />
                                                    <Label htmlFor="checkbox-light-13">{"Option 1"}</Label>
                                                </div>
                                            </Button>
                                            <Button color="light txt-dark">
                                                <div className="checkbox checkbox-light">
                                                    <input id="checkbox-light-14" type="checkbox" />
                                                    <Label htmlFor="checkbox-light-14">{"Option 2"}</Label>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <Col lg="6">
                        <Card className="height-equal">
                            <CardHeader>
                                <h5>{Nesting}</h5><span>{"Make nesting buttons"}</span>
                            </CardHeader>
                            <CardBody className="btn-group-wrapper">
                                <div className="m-b-30">
                                    <ButtonGroup>
                                        <Button color='primary'><i className="fa fa-bold"></i></Button>
                                        <Button color='secondary'><i className="fa fa fa-italic"></i></Button>
                                        <UncontrolledDropdown>
                                            <DropdownToggle color='light'>
                                                {"Dropdown"}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>{"Header"}</DropdownItem>
                                                <DropdownItem disabled>{"Action"}</DropdownItem>
                                                <DropdownItem>{"Another Action"}</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>{"Another Action"}</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </ButtonGroup>
                                </div>
                                <div className="m-b-30">
                                    <ButtonGroup>
                                        <Button color="primary"><i className="fa fa-bold"></i></Button>
                                        <Button color="secondary"><i className="fa fa fa-italic"></i></Button>
                                        <Button color="success"><i className="fa fa-file-image-o"></i></Button>
                                        <Button color="info"><i className="fa fa-paperclip"></i></Button>
                                    </ButtonGroup>
                                </div>
                                <div className="m-b-30">
                                    <ButtonGroup>
                                        <Button color="primary" size="lg" ><i className="fa fa-bold"></i></Button>
                                        <Button color="secondary" size="lg" ><i className="fa fa fa-italic"></i></Button>
                                        <Button color="success" size="lg" ><i className="fa fa-file-image-o"></i></Button>
                                        <Button color="info" size="lg" ><i className="fa fa-paperclip"></i></Button>
                                    </ButtonGroup>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="height-equal">
                            <CardHeader>
                                <h5>{Vertical}</h5><span>{"Make vertical buttons"}</span>
                            </CardHeader>
                            <CardBody className="btn-group-wrapper">
                                <ButtonGroup vertical >
                                    <Button color='primary' type="button">{"Button"}</Button>
                                    <Button color='secondary' type="button" className="b-r-0">{"Button"}</Button>
                                    <UncontrolledDropdown>
                                        <DropdownToggle color='success' caret className="b-r-0">
                                            {"Button Dropdown"}
                                            </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>{"Another Action"}</DropdownItem>
                                            <DropdownItem>{"Another Action"}</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <Button color='info' type="button" className="b-r-0">{"Button"}</Button>
                                    <Button color='warning' type="button" className="b-r-0">{"Button"}</Button>
                                    <UncontrolledDropdown>
                                        <DropdownToggle color='danger' caret>
                                            {"Button Dropdown"}
                                            </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>{"Another Action"}</DropdownItem>
                                            <DropdownItem>{"Another Action"}</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default GroupButton;