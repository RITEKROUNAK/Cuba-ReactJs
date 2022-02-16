import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import Board from '@lourenci/react-kanban'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import {DragBothTitleCard,DragOnlyCard,DragOnlyContent} from "../../../constant";
const DraggingCards = (props) => {
    
    const board = {
        lanes: [
            {
                id: 1,
                title: 'Basic card',
                cards: [
                    {
                        id: 1,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 2,
                title: 'Flat Card',
                cards: [
                    {
                        id: 2,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            }
        ]
    }
    const board1 = {
        lanes: [
            {
                id: 3,
                title: 'Heading Card',
                cards: [
                    {
                        id: 3,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 4,
                title: 'Without Shadow',
                cards: [
                    {
                        id: 4,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
        ]
    }
    const board2 = {
        lanes: [
            {
                id: 5,
                title: 'Card Sub-Title',
                cards: [
                    {
                        id: 5,
                        title: 'You can extend default collapse behaviour to create an accordion',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 6,
                title: 'Card Sub-Title',
                cards: [
                    {
                        id: 6,
                        title: 'You can extend default collapse behaviour to create an accordion',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            }
        ]
    }

    return (
        <Fragment>
            <Breadcrumb parent="Bonus Ui" title="Draggable Cards" />
            <Container fluid={true}>
                <Row className="ui-sortable" >
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>
                                    {DragBothTitleCard}
                            </h5>
                            </CardHeader>
                            <CardBody className="draggable-card">
                                <Board>{board}</Board>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>
                                    {DragOnlyCard}
                            </h5>
                            </CardHeader>
                            <CardBody className="draggable-card">
                                <Board disableCardDrag>{board1}</Board>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>
                                    {DragOnlyContent}
                            </h5>
                            </CardHeader>
                            <CardBody className="draggable-card">
                                <Board disableLaneDrag>{board2}</Board>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default DraggingCards;