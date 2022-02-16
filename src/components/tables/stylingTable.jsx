import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,Table} from "reactstrap"
import { DefultStyling,TableHeadOptions,TableHeadOptionsPrimaryBackground,TableFooterStyling,CustomTableColorHoverStripped,CustomTableColor } from "../../constant";

const StylingTable = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Tables" title="Styling Tables"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{DefultStyling}</h5><span>{"use class"} <code>{"table table-styling"}</code>   {"inside table element"}</span>
                            </CardHeader>
                            <Row className="card-block">
                                <Col sm="12" lg="12" xl="12">
                                    <div className="table-responsive">
                                        <Table className="table-styling">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{TableHeadOptions}</h5><span>{"Use class"}<code>{".table-primary"}</code> {"inside thead tr element."}</span>
                            </CardHeader>
                            <Row className="card-block">
                                <Col sm="12" lg="12" xl="12">
                                    <div className="table-responsive">
                                        <Table>
                                            <thead className="table-primary">
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{TableHeadOptionsPrimaryBackground}</h5><span>{"Use background classes"}<code>{".bg-*"}</code>{"and"} <code>{"table-primary"}</code>,<code>{"table-secondary"}</code>,<code>{"table-success"}</code>,<code>{"table-danger"}</code> ,<code>{"table-info"}</code>,<code>{"table-warning"}</code>  {"to make custom"} <code>{"thead"}</code> {"background. You can also use Stack Admin color palette classes for background."}</span>
                            </CardHeader>
                            <Row className="card-block">
                                <Col sm="12" lg="12" xl="12">
                                    <div className="table-responsive">
                                        <Table>
                                            <thead className="bg-primary">
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="card-block">
                                <Col sm="12" lg="12" xl="12">
                                    <div className="table-responsive">
                                        <Table>
                                            <thead className="table-success">
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{TableFooterStyling}</h5><span>{"Use class"} <code>{"table-info"}</code>,<code>{"table-success"}</code>,<code>{"table-success"}</code>,<code>{"table-info"}</code>,<code>{"table-danger"}</code>,<code>{"table-primary"}</code>,<code>{"table-secondary"}</code>,<code>{"table-light"}</code>,<code>{"table-active"}</code>{"and also use"} <code>{"bg-*"}</code> {"inside tfoot  element."}</span>
                            </CardHeader>
                            <Row className="card-block">
                                <Col sm="12" lg="12" xl="12">
                                    <div className="table-responsive table-border-radius">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className="table-success">
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tfoot>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{CustomTableColor}</h5><span>{"Use class"}<code>{"table-*"}</code> {"inside table element."}</span>
                            </CardHeader>
                            <Row className="card-block">
                                <Col sm="12" lg="12" xl="12">
                                    <div className="table-responsive table-border-radius">
                                        <Table className="table-styling table-primary">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{CustomTableColorHoverStripped}</h5><span>{"Use class"}<code>{"table-hover, table-striped table-*"}</code><code>{"table-info"}</code>,<code>{"table-success"}</code>,<code>{"table-success"}</code>,<code>{"table-info"}</code>,<code>{"table-danger"}</code>,<code>{"table-primary"}</code>,<code>{"table-secondary"}</code>,<code>{"table-light"}</code>,<code>{"table-active"}</code> {"inside table element."}</span>
                            </CardHeader>
                            <Row className="card-block">
                                <Col sm="12" lg="12" xl="12">
                                    <div className="table-responsive table-border-radius">
                                        <Table hover striped className="table-styling  table-primary">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{"#"}</th>
                                                    <th scope="col">{"First Name"}</th>
                                                    <th scope="col">{"Last Name"}</th>
                                                    <th scope="col">{"Username"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Mark"}</td>
                                                    <td>{"Otto"}</td>
                                                    <td>{"@mdo"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Jacob"}</td>
                                                    <td>{"Thornton"}</td>
                                                    <td>{"@fat"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Larry"}</td>
                                                    <td>{"the Bird"}</td>
                                                    <td>{"@twitter"}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default StylingTable;