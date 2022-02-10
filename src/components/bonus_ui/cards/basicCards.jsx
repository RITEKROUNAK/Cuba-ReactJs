import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter} from "reactstrap";
import {BasicCard,FlatCard,WithoutShadowCard,IconInHeading,CardSubTitle,CardWithFooter,Card_Footer,SuccessColorCard,PrimaryColorCard,SecondaryColorCard,PrimaryColorBody,PrimaryColorHeader,PrimaryColorFooter} from "../../../constant";

const BasicCards = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Bonus Ui" title="Basic Card"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader>
                                <h5>{BasicCard}</h5>
                            </CardHeader>
                            <CardBody>
                                <p className="mb-0"> 
                                    {"Lorem Ipsum is simply dummy text of the printing and"}
                                    {"typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                                    {"ever since the 1500s, when an unknown printer took a galley of type and"}
                                    {"scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the"}
                                    {"1500s, when an unknown printer took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card className="b-r-0">
                            <CardHeader>
                                <h5>{FlatCard}</h5>
                            </CardHeader>
                            <CardBody>
                                <p className="mb-0"> 
                                    {"Lorem Ipsum is simply dummy text of the printing and"}
                                    {"typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                                    {"ever since the 1500s, when an unknown printer took a galley of type and"}
                                    {"scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the industry's standard dummy text ever since the"}
                                    {"1500s, when an unknown printer took a galley of type and scrambled. "}
                                </p>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card className="shadow-0 border">
                            <CardHeader>
                                <h5>{WithoutShadowCard}</h5>
                            </CardHeader>
                            <CardBody>
                                <p> 
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"}
                                    {"Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy"}
                                    {"text of the printing and typesetting industry. Lorem Ipsum has been the"}
                                    {"industry's standard dummy text ever since the 1500s, when an unknown printer"}
                                    {"took a galley of type and scrambled. "}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader>
                                <h5><i className="icofont icofont-truck mr-2"></i> {IconInHeading}</h5>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"}
                                    {"Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy"}
                                    {"text of the printing and typesetting industry. Lorem Ipsum has been the"}
                                    {"industry's standard dummy text ever since the 1500s, when an unknown printer"}
                                    {"took a galley of type and scrambled."}
                                 </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card className="height-equal">
                            <CardHeader>
                                <h5>{CardSubTitle}</h5>
                                <span>{"Using the"} <a href="#javascript">{"card"}</a> {"component, you can extend the default collapse behavior to create an accordion."}</span>
                            </CardHeader>
                            <CardBody>
                                <p> 
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"}
                                    {"Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}
                                    {"unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy"}
                                    {"text of the printing and typesetting industry. Lorem Ipsum has been the"}
                                    {"industry's standard dummy text ever since the 1500s, when an unknown printer"}
                                    {"took a galley of type and scrambled."}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card className="height-equal" style={{minHeight:"356px"}}>
                            <CardHeader>
                                <h5>{CardWithFooter}</h5>
                            </CardHeader>
                            <CardBody>
                                <p> 
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"}
                                    {"Ipsum has been the the industry's standard dummy text ever."}
                                </p>
                            </CardBody>
                            <CardFooter>
                                <h6 className="mb-0">{Card_Footer}</h6>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="bg-primary">
                                <h5>{PrimaryColorCard}</h5>
                            </CardHeader>
                            <CardBody className="bg-primary">
                                <p className="mb-0"> 
                                    {"Lorem Ipsum is simply dummy text of the printing and"}
                                    {"typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                                    {"ever since the 1500s, when an unknown printer took a galley of type and"}
                                    {"scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the."}
                               </p>
                            </CardBody>
                            <CardFooter className="bg-primary">
                                <h6 className="mb-0">{Card_Footer}</h6>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="bg-secondary">
                                <h5>{SecondaryColorCard}</h5>
                            </CardHeader>
                            <CardBody className="bg-secondary">
                                <p className="mb-0"> 
                                    {"Lorem Ipsum is simply dummy text of the printing and"}
                                    {"typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                                    {"ever since the 1500s, when an unknown printer took a galley of type and"}
                                    {"scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the."} 
                              </p>
                            </CardBody>
                            <CardFooter className="bg-secondary">
                                <h6 className="mb-0">{Card_Footer}</h6>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="bg-success">
                                <h5>{SuccessColorCard}</h5>
                            </CardHeader>
                            <CardBody className="bg-success">
                                <p className="mb-0"> 
                                    {"Lorem Ipsum is simply dummy text of the printing and"}
                                    {"typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                                    {"ever since the 1500s, when an unknown printer took a galley of type and"}
                                    {"scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the."} 
                                </p>
                           </CardBody>
                            <CardFooter className="bg-success">
                                <h6 className="mb-0">{Card_Footer}</h6>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader className="bg-primary">
                                <h5>{PrimaryColorHeader}</h5>
                            </CardHeader>
                            <CardBody>
                                <p className="mb-0"> 
                                    {"Lorem Ipsum is simply dummy text of the printing and"}
                                    {"typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                                    {"ever since the 1500s, when an unknown printer took a galley of type and"}
                                    {"scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the."}
                                </p>
                            </CardBody>
                            <CardFooter>
                                <h6 className="mb-0">{Card_Footer}</h6>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader>
                                <h5>{PrimaryColorBody}</h5>
                            </CardHeader>
                            <CardBody className="bg-primary">
                                <p className="mb-0"> 
                                    {"Lorem Ipsum is simply dummy text of the printing and"}
                                    {"typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                                    {"ever since the 1500s, when an unknown printer took a galley of type and"}
                                    {"scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the."} 
                               </p>
                            </CardBody>
                            <CardFooter>
                                <h6 className="mb-0">{Card_Footer}</h6>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader>
                                <h5>{PrimaryColorFooter}</h5>
                            </CardHeader>
                            <CardBody>
                                <p className="mb-0"> 
                                    {"Lorem Ipsum is simply dummy text of the printing and"}
                                    {"typesetting industry. Lorem Ipsum has been the industry's standard dummy text"}
                                    {"ever since the 1500s, when an unknown printer took a galley of type and"}
                                    {"scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting"}
                                    {"industry. Lorem Ipsum has been the."} 
                               </p>
                            </CardBody>
                            <CardFooter className="bg-primary">
                                <h6 className="mb-0">{Card_Footer}</h6>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default BasicCards;