import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,Table} from "reactstrap";
import { BasicTable,InverseTable,InverseTablePrimaryBackground,HoverableRows,ContextualClasses,TextBackgroundUtilities,TableHeadOptions,StripedRow,StripedRowInverseTable,Caption,ResponsiveTables,BreckpointSpecific } from "../../constant";

const BasicTables = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Tables" title="Basic Tables"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{BasicTable}</h5>
                                <span> {"Use a class"} <code> {"table"} </code> {"to any table."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First Name"}</th>
                                            <th scope="col">{"Last Name"}</th>
                                            <th scope="col">{"Username"}</th>
                                            <th scope="col">{"Role"}</th>
                                            <th scope="col">{"Country"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"1"}</th>
                                            <td>{"Alexander"}</td>
                                            <td>{"Orton"}</td>
                                            <td>{"@mdorton"}</td>
                                            <td>{"Admin"}</td>
                                            <td>{"USA"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"2"}</th>
                                            <td>{"John Deo"}</td>
                                            <td>{"Deo"}</td>
                                            <td>{"@johndeo"}</td>
                                            <td>{"User"}</td>
                                            <td>{"USA"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"3"}</th>
                                            <td>{"Randy Orton"}</td>
                                            <td>{"the Bird"}</td>
                                            <td>{"@twitter"}</td>
                                            <td>{"admin"}</td>
                                            <td>{"UK"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"4"}</th>
                                            <td>{"Randy Mark"}</td>
                                            <td>{"Ottandy"}</td>
                                            <td>{"@mdothe"}</td>
                                            <td>{"user"}</td>
                                            <td>{"AUS"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"5"}</th>
                                            <td>{"Ram Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@twitter"}</td>
                                            <td>{"admin"}</td>
                                            <td>{"IND"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{InverseTable}</h5>
                                <span> {"Use a class"} <code> {"table-inverse"} </code> {"inside table element."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table className="table-inverse">
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First Name"}</th>
                                            <th scope="col">{"Last Name"}</th>
                                            <th scope="col">{"Username"}</th>
                                            <th scope="col">{"Role"}</th>
                                            <th scope="col">{"Country"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"1"}</th>
                                            <td>{"Alexander"}</td>
                                            <td>{"Orton"}</td>
                                            <td>{"@mdorton"}</td>
                                            <td>{"Admin"}</td>
                                            <td>{"USA"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"2"}</th>
                                            <td>{"John Deo"}</td>
                                            <td>{"Deo"}</td>
                                            <td>{"@johndeo"}</td>
                                            <td>{"User"}</td>
                                            <td>{"USA"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"3"}</th>
                                            <td>{"Randy Orton"}</td>
                                            <td>{"the Bird"}</td>
                                            <td>{"@twitter"}</td>
                                            <td>{"admin"}</td>
                                            <td>{"UK"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"4"}</th>
                                            <td>{"Randy Mark"}</td>
                                            <td>{"Ottandy"}</td>
                                            <td>{"@mdothe"}</td>
                                            <td>{"user"}</td>
                                            <td>{"AUS"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"5"}</th>
                                            <td>{"Ram Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@twitter"}</td>
                                            <td>{"admin"}</td>
                                            <td>{"IND"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{InverseTablePrimaryBackground}</h5>
                                <span> {"Use a class"} <code> {".bg-info, .bg-success, .bg-warning and .bg-danger classes."} </code> {"with light text on dark backgrounds inside table element."} <span className="d-block"> {"To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal"} </span></span>
                            </CardHeader>
                                <div className="table-responsive">
                                    <Table striped className="bg-primary">
                                        <thead className="tbl-strip-thad-bdr">
                                            <tr>
                                                <th scope="col">{"#"}</th>
                                                <th scope="col">{"First Name"}</th>
                                                <th scope="col">{"Last Name"}</th>
                                                <th scope="col">{"Username"}</th>
                                                <th scope="col">{"Role"}</th>
                                                <th scope="col">{"Country"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{"1"}</th>
                                                <td>{"Alexander"}</td>
                                                <td>{"Orton"}</td>
                                                <td>{"@mdorton"}</td>
                                                <td>{"Admin"}</td>
                                                <td>{"USA"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">{"2"}</th>
                                                <td>{"John Deo"}</td>
                                                <td>{"Deo"}</td>
                                                <td>{"@johndeo"}</td>
                                                <td>{"User"}</td>
                                                <td>{"USA"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">{"3"}</th>
                                                <td>{"Randy Orton"}</td>
                                                <td>{"the Bird"}</td>
                                                <td>{"@twitter"}</td>
                                                <td>{"admin"}</td>
                                                <td>{"UK"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">{"4"}</th>
                                                <td>{"Randy Mark"}</td>
                                                <td>{"Ottandy"}</td>
                                                <td>{"@mdothe"}</td>
                                                <td>{"user"}</td>
                                                <td>{"AUS"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">{"5"}</th>
                                                <td>{"Ram Jacob"}</td>
                                                <td>{"Thornton"}</td>
                                                <td>{"@twitter"}</td>
                                                <td>{"admin"}</td>
                                                <td>{"IND"}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverableRows}</h5>
                                    <span>{"Use a class"} <code> {"table-hover"} </code> {"to enable a hover state on table rows within a"} <code>{"tbody"}</code>.</span>
                                </CardHeader>
                                <div className="table-responsive">
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">{"#"}</th>
                                                <th scope="col">{"First Name"}</th>
                                                <th scope="col">{"Last Name"}</th>
                                                <th scope="col">{"Username"}</th>
                                                <th scope="col">{"Role"}</th>
                                                <th scope="col">{"Country"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{"1"}</th>
                                                <td>{"Alexander"}</td>
                                                <td>{"Orton"}</td>
                                                <td>{"@mdorton"}</td>
                                                <td>{"Admin"}</td>
                                                <td>{"USA"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">{"2"}</th>
                                                <td>{"John Deo"}</td>
                                                <td>{"Deo"}</td>
                                                <td>{"@johndeo"}</td>
                                                <td>{"User"}</td>
                                                <td>{"USA"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">{"3"}</th>
                                                <td>{"Randy Orton"}</td>
                                                <td>{"the Bird"}</td>
                                                <td>{"@twitter"}</td>
                                                <td>{"admin"}</td>
                                                <td>{"UK"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">{"4"}</th>
                                                <td>{"Randy Mark"}</td>
                                                <td>{"Ottandy"}</td>
                                                <td>{"@mdothe"}</td>
                                                <td>{"user"}</td>
                                                <td>{"AUS"}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">{"5"}</th>
                                                <td>{"Ram Jacob"}</td>
                                                <td>{"Thornton"}</td>
                                                <td>{"@twitter"}</td>
                                                <td>{"admin"}</td>
                                                <td>{"IND"}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{ContextualClasses}</h5>
                                    <span>{"Use contextual classes to color table rows or individual cells. you may use Classes"} <code>{"table-primary"}</code>,<code>{"table-secondary"}</code>,<code>{"table-success"}</code>,<code>{"table-info"}</code>,<code>{"table-warning"}</code>,<code>{"table-danger"}</code>,<code>{"table-light"}</code>,<code>{"table-active"}</code> {"in"}<code>{"tr"}</code></span>
                                </CardHeader>
                                <div className="table-responsive">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th scope="col">{"Class"}</th>
                                                <th scope="col">{"Heading"}</th>
                                                <th scope="col">{"Heading"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-primary">
                                                <th scope="row">{"Primary"}</th>
                                                <td>{"Cell"}</td>
                                                <td>{"Cell"}</td>
                                            </tr>
                                            <tr className="table-secondary">
                                                <th scope="row">{"Secondary"}</th>
                                                <td>{"Cell"}</td>
                                                <td>{"Cell"}</td>
                                            </tr>
                                            <tr className="table-success">
                                                <th scope="row">{"Success"}</th>
                                                <td>{"Cell"}</td>
                                                <td>{"Cell"}</td>
                                            </tr>
                                            <tr className="table-info">
                                                <th scope="row">{"Info"}</th>
                                                <td>{"Cell"}</td>
                                                <td>{"Cell"}</td>
                                            </tr>
                                            <tr className="table-warning">
                                                <th scope="row">{"Warning"}</th>
                                                <td>{"Cell"}</td>
                                                <td>{"Cell"}</td>
                                            </tr>
                                            <tr className="table-danger">
                                                <th scope="row">{"Danger"}</th>
                                                <td>{"Cell"}</td>
                                                <td>{"Cell"}</td>
                                            </tr>
                                            <tr className="table-light">
                                                <th scope="row">{"Light"}</th>
                                                <td>{"Cell"}</td>
                                                <td>{"Cell"}</td>
                                            </tr>
                                            <tr className="table-active">
                                                <th scope="row">{"Active"}</th>
                                                <td>{"Cell"}</td>
                                                <td>{"Cell"}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{TextBackgroundUtilities}</h5>
                                    <span>{"Regular table background variants are not available with the inverse table, however, you may use Classes"} <code>{"bg-dark"}</code>,<code>{"bg-warning"}</code>,<code>{"bg-success"}</code>,<code>{"bg-info"}</code>,<code>{"bg-danger"}</code>,<code>{"bg-primary"}</code>,<code>{"bg-secondary"}</code>,<code>{"bg-light"}</code> {"in"}<code>{"td"}</code></span>
                                </CardHeader>
                                <div className="table-responsive">
                                    <Table className="table-borderedfor">
                                        <thead>
                                            <tr>
                                                <th scope="col">{"#"}</th>
                                                <th scope="col">{"Heading"}</th>
                                                <th scope="col">{"Heading"}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-active">
                                                <td className="bg-primary">{"1"}</td>
                                                <td className="bg-primary">{"primary"}</td>
                                                <td className="bg-primary">{"primary"}</td>
                                            </tr>
                                            <tr className="table-active">
                                                <td className="bg-secondary">{"2"}</td>
                                                <td className="bg-secondary">{"secondary"}</td>
                                                <td className="bg-secondary">{"secondary"}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-success">{"3"}</td>
                                                <td className="bg-success">{"success"}</td>
                                                <td className="bg-success">{"success"}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-info">{"4"}</td>
                                                <td className="bg-info">{"info"}</td>
                                                <td className="bg-info">{"info"}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-warning">{"5"}</td>
                                                <td className="bg-warning">{"warning"}</td>
                                                <td className="bg-warning">{"warning"}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-danger">{"6"}</td>
                                                <td className="bg-danger">{"danger"}</td>
                                                <td className="bg-danger">{"danger"}</td>
                                            </tr>
                                            <tr className="table-active">
                                                <td className="bg-light">{"7"}</td>
                                                <td className="bg-light">{"light"}</td>
                                                <td className="bg-light">{"light"}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{TableHeadOptions}</h5>
                                    <span>{"Similar to tables and dark tables, use the modifier classes"} <code>{".thead-dark"}</code>  {"to make"} <code>{"thead"}</code> {"appear light or dark gray."}</span>
                                </CardHeader>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <Table>
                                                <thead className="thead-dark">
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
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{TableHeadOptions}</h5>
                                    <span>{"Similar to tables and dark tables, use the modifier classes"} <code>{".bg-*"}</code>{"and"}  <code>{".thead-light"}</code> {"to make"} <code>{"thead"}</code> {"appear light or dark gray."}</span>
                                </CardHeader>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <Table>
                                                <thead className="thead-light">
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
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{StripedRow} </h5>
                                    <span>{"Use"} <code>{".table-striped"}</code> {"to add zebra-striping to any table row within the"} <code></code>. {"This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported."}</span>
                                </CardHeader>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <Table striped>
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
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{StripedRowInverseTable}</h5>
                                    <span>{"Use"} <code>{".table-striped"}</code> {"to add zebra-striping to any table row within the"} <code></code>. {"This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported."}</span>
                                </CardHeader>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <Table className="table-inverse" striped>
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
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{Caption}</h5>
                                    <span>{"A"} <code>&lt;{"caption"}&gt;</code> {"functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it."}</span>
                                </CardHeader>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <Table>
                                                <caption>{"List of users"}</caption>
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
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{ResponsiveTables}</h5>
                                    <span>{"A"} <code>&lt;{"caption"}&gt;</code> {"functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it."}</span>
                                </CardHeader>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">{"#"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{"1"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"2"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"3"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{BreckpointSpecific}</h5>
                                </CardHeader>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <Table className="table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">{"#"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{"1"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"2"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"3"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </div>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <table className="table table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">{"#"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{"1"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"2"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"3"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </div>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <table className="table table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">{"#"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{"1"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"2"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"3"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </div>
                                <div className="card-block row">
                                    <Col sm="12" lg="12" xl="12">
                                        <div className="table-responsive">
                                            <table className="table table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">{"#"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                        <th scope="col">{"Table heading"}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{"1"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"2"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">{"3"}</th>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                        <td>{"Table cell"}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
            );
        };
        
export default BasicTables;