import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import { CarsouselDemoone, CarsouselDemotwo, CarsouselDemothree } from './carouselComponent'
import {Carousel,UncontrolledCarousel,CarouselClassname} from '../../../constant'

const Carousels = (props) => {
    return (
        <Fragment>
            <Breadcrumb parent="Bouns Ui" title="Owl Carousel" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader>
                                <h5>{Carousel}</h5>
                            </CardHeader>
                            <CardBody>
                                <CarsouselDemoone />
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12" xl="6">
                        <Card>
                            <CardHeader>
                                <h5>{UncontrolledCarousel}</h5>
                            </CardHeader>
                            <CardBody>
                                <CarsouselDemotwo />
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12" xl="6 xl-100">
                        <Card>
                            <CardHeader>
                                <h5>{CarouselClassname}</h5>
                            </CardHeader>
                            <CardBody>
                                <CarsouselDemothree />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Carousels;