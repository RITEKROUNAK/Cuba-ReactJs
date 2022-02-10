import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import CountUp from 'react-countup';
import DataTable from 'react-data-table-component'
import { supportData, supportColumns } from '../../data/supportdb';
import {Order,Done,Cancel,Pending,Profit,Loss,Running,Smooth} from '../../constant'

const SupportTicket = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Apps" title="Support Ticket" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Support Ticket List"}</h5>
                                <span>{"List of ticket opend by customers"}</span>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xl="4 xl-50 box-col-6" md="6">
                                        <Card className="ecommerce-widget">
                                            <CardBody className="support-ticket-font">
                                                <Row>
                                                    <div className="col-5"><span>{Order}</span>
                                                        <h3 className="total-num counter"><CountUp end={2563} /></h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="4 xl-50 box-col-6" md="6">
                                        <Card className="ecommerce-widget">
                                            <CardBody className="support-ticket-font">
                                                <Row>
                                                    <div className="col-5"><span>{Pending}</span>
                                                        <h3 className="total-num counter"><CountUp end={8943} /></h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="4 xl-50 box-col-6" md="6">
                                        <Card className="ecommerce-widget">
                                            <CardBody className="support-ticket-font">
                                                <Row>
                                                    <div className="col-5"><span>{Running}</span>
                                                        <h3 className="total-num counter"><CountUp end={2500} /></h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="progress-showcase mt-4">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="4 xl-50 box-col-6" md="6">
                                        <Card className="ecommerce-widget">
                                            <CardBody className="support-ticket-font">
                                                <Row>
                                                    <div className="col-5"><span>{Smooth}</span>
                                                        <h3 className="total-num counter"><CountUp end={2060} /></h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="progress-showcase mt-4">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="4 xl-50 box-col-6" md="6">
                                        <Card className="ecommerce-widget">
                                            <CardBody className="support-ticket-font">
                                                <Row>
                                                    <div className="col-5"><span>{Done}</span>
                                                        <h3 className="total-num counter"><CountUp end={5600} /></h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="progress-showcase mt-4">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="4 xl-50 box-col-6" md="6">
                                        <Card className="ecommerce-widget">
                                            <CardBody className="support-ticket-font">
                                                <Row>
                                                    <div className="col-5"><span>{Cancel}</span>
                                                        <h3 className="total-num counter"><CountUp end={2560} /></h3>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="text-md-right">
                                                            <ul>
                                                                <li>{Profit}<span className="product-stts txt-success ml-2">{"8989"}<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                                <li>{Loss}<span className="product-stts txt-danger ml-2">{"2560"}<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <div className="table-responsive support-table">
                                    <DataTable
                                        columns={supportColumns}
                                        data={supportData}
                                        striped={true}
                                        center={true}
                                        pagination
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default SupportTicket;