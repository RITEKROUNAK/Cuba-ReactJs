import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import Timeline1 from './timeline1';
import VerticalTimelineComp from './verticalTimelineComp';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import {Examples} from "../../../constant";

const Timeline = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Bonus Ui" title="Timeline 1"/>
            <Container fluid={true}>
                <Row>
                    <Col  sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{Examples} {"1"}</h5>
                            </CardHeader>
                            <CardBody>
                                <Timeline1 />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col  sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{Examples} {"2"}</h5>
                            </CardHeader>
                            <CardBody>
                                <VerticalTimelineComp />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Timeline;