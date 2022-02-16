import React, {Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Media} from 'reactstrap'
import {HoverEffect} from "../../constant";
const ImageHover = () => {
        return(
            <Fragment>
                <Breadcrumb parent="Gallery" title="Image Hover Effects"/>
                <Container fluid={true}>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"1"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials" className="row my-gallery gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-1">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-1">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-1">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-1">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"2"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials1" className="row my-gallery gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-2">
                                                <div className="">
                                                <Media src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-2">
                                                <div className="">
                                                <Media src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-2">
                                                <div className="">
                                                <Media src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-2">
                                                <div className="">
                                                <Media src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"3"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials2" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-3">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-3">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-3">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-3">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"4"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials3" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-4">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-4">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-4">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-4">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"5"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials4" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-5">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-5">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-5">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-5">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"6"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials5" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-6">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-6">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-6">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-6">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"7"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials6" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-7">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-7">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-7">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-7">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"8"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials7" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-8">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-8">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-8">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-8">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"9"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials8" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-9">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-9">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-9">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-9">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"10"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials9" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-10">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-10">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-10">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-10">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"11"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials10" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-11">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-11">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-11">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-11">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"12"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials11" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-12">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-12">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-12">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-12">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"13"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials12" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-13">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-13">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-13">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia"
                                                className="col-md-3 col-6 img-hover hover-13">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"14"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials13" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-14">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-14">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-14">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-14">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>{HoverEffect} <span className="digits">{"15"}</span></h5>
                                </CardHeader>
                                <CardBody>
                                    <div id="aniimated-thumbnials14" className="row gallery my-gallery">
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-15">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/08.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-15">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/09.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-15">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/010.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                        <figure itemProp="associatedMedia" className="col-md-3 col-6 img-hover hover-15">
                                                <div className="">
                                                <Media className="img-fluid" src={require('../../assets/images/lightgallry/011.jpg')} itemProp="thumbnail"
                                                 alt=""/>
                                                </div>
                                        </figure>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
}
export default ImageHover
