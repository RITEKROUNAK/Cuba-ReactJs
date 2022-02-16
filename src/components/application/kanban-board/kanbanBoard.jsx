import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col} from 'reactstrap'
import DefaultBoard from './defaultBoard'
import CustomeBoard from './customeBoard'
import ApiBoard from './apiBoard'

const kanbanBoard = (props) => {
    return (
        <Fragment>
        <Breadcrumb parent="Apps" title="Kanban Board" />
        <Container fluid={true} className="jkanban-container">
            <Row>
                <Col xs="12">
                    <DefaultBoard/>
                </Col>

                <Col xs="12">
                    <CustomeBoard/>
                </Col>

                <Col xs="12">
                    <ApiBoard/>
                </Col>
            </Row>
            
        </Container>
        </Fragment>
    );
}

export default kanbanBoard;