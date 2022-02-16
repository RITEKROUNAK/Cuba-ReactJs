import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, Table } from "reactstrap"
import { HorizontalBorders,VerticalBorders,BothBordeds,BorderlessTable,DefaultTableBorder,DoubleBorder,BorderBottomColor,DottedBorder,DashedBorder,SolidBorder} from "../../constant";

const BorderTable = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Tables" title="Border Table" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{HorizontalBorders}</h5><span>{"Example of"} <code>{"horizontal"}</code> {"table borders.This is a default table border style attached to"} <code> {".table"}</code> {"class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using"}<code> {".table-border-horizontal"}</code>{"class added to the table with"} <code>{".table"}</code>{"class."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table className="table-border-horizontal">
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
                                <h5>{VerticalBorders}</h5><span>{"Example of"} <code>{"Vertical"} </code> {"table borders. This is a default table border style attached to"} <code> {".table"}</code> {"class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using"}<code> {".table-border-vertical"}</code>{"class added to the table with"} <code>{".table"}</code>{"class."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table className="table-border-vertical">
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
                                <h5>{BothBordeds}</h5><span>{"Example of"} <code>{"horizontal"}</code> {"table borders. This is a default table border style attached to"} <code> {".table"}</code> {"class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using"}<code> {".table-bordered"}</code>{"class added to the table with"} <code>{".table"}</code>{"class."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table bordered>
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
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@TwBootstrap"}</td>
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
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{BorderlessTable}</h5><span>{"Example of"} <code>{"horizontal"}</code> {"table borders. This is a default table border style attached to"} <code> {".table"}</code> {"class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using"}<code> {".table-bordernone"}</code>{"class added to the table with"} <code>{".table"}</code>{"class."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table borderless>
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
                                            <th className="bd-t-none" scope="row">{"1"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@mdo"}</td>
                                        </tr>
                                        <tr>
                                            <th className="bd-t-none" scope="row">{"2"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@TwBootstrap"}</td>
                                        </tr>
                                        <tr>
                                            <th className="bd-t-none" scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{DefaultTableBorder}</h5><span>{"Example of"} <code>{"Default Table Border"}</code>.{"This is a default table border style attached to"} <code>{".table"}</code> {"class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using"}<code> {".table"}</code>{"class added to the table with"} <code>{".table"}</code>{"class."}</span>
                            </CardHeader>
                            <div className="table-responsive">
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
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@TwBootstrap"}</td>
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
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{SolidBorder}</h5><span>{"Example of a"} <code>{"solid"}</code> {"border inside table"} <code>{"thead"}</code>. {"This border inherits all styling options from the default border style, the only difference is it has"} <code>{"2px"}</code> {"width. Sometimes it could be useful for visual separation and addition highlight. To use this border add"} <code>{".border-solid"}</code> {"to the table head row. This border style works only with row borders."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table className="table">
                                    <thead>
                                        <tr className="border-solid">
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
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@TwBootstrap"}</td>
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
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{DoubleBorder}</h5><span>{"Example of a"} <code>{"double"}</code> {"border inside table head. This border has"} <code>{"3px"}</code> {"width,"} <code>{"double"}</code> {"style and inherits all styling options from the default border style. Visually it displays table"} <code>{"head"}</code> {"and"} <code>{"body"}</code> {"as 2 separated table areas. To use this border add"} <code>{".border-double"}</code> {"to the table head row."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr className="double">
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First Name"}</th>
                                            <th scope="col">{"Last Name"}</th>
                                            <th scope="col">{"Username"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="double">
                                            <th scope="row">{"1"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@mdo"}</td>
                                        </tr>
                                        <tr className="double">
                                            <th scope="row">{"2"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@TwBootstrap"}</td>
                                        </tr>
                                        <tr className="double">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{DottedBorder}</h5><span>{"Example of a"} <code>{"dotted"}</code> {"border inside table head. This border has"} <code>{"3px"}</code> {"width,"} <code>{"dotted"}</code> {"style and inherits all styling options from the default border style. Visually it displays table"} <code>{"head"}</code> {"and"} <code>{"body"}</code> {"as 2 separated table areas. To use this border add"} <code>{".border-dotted"}</code> {"to the table head row."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr className="dotted">
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First Name"}</th>
                                            <th scope="col">{"Last Name"}</th>
                                            <th scope="col">{"Username"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="dotted">
                                            <th scope="row">{"1"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@mdo"}</td>
                                        </tr>
                                        <tr className="dotted">
                                            <th scope="row">{"2"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@TwBootstrap"}</td>
                                        </tr>
                                        <tr className="dotted">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{DashedBorder}</h5><span>{"Example of a"} <code>{"dashed"}</code> {"border inside table head. This border has"} <code>{"3px"}</code> {"width,"} <code>{"dashed"}</code> {"style and inherits all styling options from the default border style. Visually it displays table"} <code>{"head"}</code> {"and"} <code>{"body"}</code> {"as 2 separated table areas. To use this border add"} <code>{".border-dashed"}</code> {"to the table head row."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr className="dashed">
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First Name"}</th>
                                            <th scope="col">{"Last Name"}</th>
                                            <th scope="col">{"Username"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="dashed">
                                            <th scope="row">{"1"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@mdo"}</td>
                                        </tr>
                                        <tr className="dashed">
                                            <th scope="row">{"2"}</th>
                                            <td>{"Mark"}</td>
                                            <td>{"Otto"}</td>
                                            <td>{"@TwBootstrap"}</td>
                                        </tr>
                                        <tr className="dashed">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{BorderBottomColor} </h5><span>{"Example of a table head border with"}<code>{"custom"} </code>  {"color. According to the custom color system options, you can set any of predefined colors by adding"}  <code>{".border-bottom-*"}</code> {"class to the table head row. This technique works with all border styles demonstrated above."}</span>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr className="border-bottom-primary">
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First Name"}</th>
                                            <th scope="col">{"Last Name"}</th>
                                            <th scope="col">{"Username"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-bottom-secondary">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr className="border-bottom-success">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr className="border-bottom-info">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr className="border-bottom-warning">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr className="border-bottom-danger">
                                            <th scope="row">{"3"}</th>
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
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default BorderTable;