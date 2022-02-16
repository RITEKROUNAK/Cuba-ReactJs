import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { BorderLeft,BorderRight,BorderTop,BorderBottom,BorderColorState,AbsoluteStyle,ColorState } from "../../../constant";
const CreativeCards = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Bonus Ui" title="Creative Card" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-l-primary">
                                <h5>{BorderLeft}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-r-secondary">
                                <h5>{BorderRight}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-t-success">
                                <h5>{BorderTop}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-b-info">
                                <h5>{BorderBottom}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-l-warning">
                                <h5>{BorderColorState}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-l-danger">
                                <h5>{BorderColorState}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-l-light">
                                <h5>{BorderColorState}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-l-primary">
                                <h5>{BorderColorState}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-l-secondary border-2">
                                <h5>{BorderColorState}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="b-l-primary border-3">
                                <h5>{BorderColorState}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card className="card-absolute">
                            <CardHeader className="bg-primary">
                                <h5>{AbsoluteStyle}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card className="card-absolute">
                            <CardHeader className="bg-secondary">
                                <h5>{ColorState}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}
                                    {"the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}
                                    {"of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default CreativeCards;