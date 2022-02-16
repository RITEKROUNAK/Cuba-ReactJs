import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import IconMarkUp from './Icon-markup';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import axios from 'axios'
import {ArrowsDirection,WebApp,Control,TextEditor,Brand,Icons} from "../../constant";

const ThemifyIcons = () => {

    const [data,setData] = useState([])
    const [iTag, setiTag] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/themifyData.json`).then(res => setData(res.data))
    },[])

    
    const getItag = (tag) => {
        setiTag({
            iTag: '<i className= "' + tag + '"></i>',
        })
        setIcon({
            icon : '' + tag + ' fa-2x'
        })
    }
    return (
        <Fragment>
            <Breadcrumb parent="Icons" title="Themify Icon"/>
            <Container fluid={true}>
                {
                    data.map((icons, index) => {
                        return (
                            <Row key={index}>
                                <Col sm="12">
                                    <Card>
                                        <CardHeader>
                                            <h5 className="m-b-0"><span className="digits">{ArrowsDirection}</span> {Icons}</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Row className="icon-lists">
                                                {icons.directional.map((icon, i) => {
                                                    return (
                                                        <Col sm="6" lg="4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </Col>
                                                    )
                                                })
                                                }
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12">
                                    <Card>
                                        <CardHeader>
                                            <h5 className="m-b-0"><span className="digits">{WebApp}</span> {Icons}</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Row className="icon-lists">
                                                {icons.webapp.map((icon, i) => {
                                                    return (
                                                        <Col sm="6" lg="4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </Col>
                                                    )
                                                })
                                                }
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12">
                                    <Card>
                                        <CardHeader>
                                            <h5 className="m-b-0"><span className="digits">{Control}</span> {Icons}</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Row className="icon-lists">
                                                {icons.control.map((icon, i) => {
                                                    return (
                                                        <Col sm="6" lg="4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </Col>
                                                    )
                                                })
                                                }
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12">
                                    <Card>
                                        <CardHeader>
                                            <h5 className="m-b-0"><span className="digits">{TextEditor}</span> {Icons}</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Row className="icon-lists">
                                                {icons.texteditor.map((icon, i) => {
                                                    return (
                                                        <Col sm="6" lg="4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </Col>
                                                    )
                                                })
                                                }
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12">
                                    <Card>
                                        <CardHeader>
                                            <h5 className="m-b-0"><span className="digits">{Brand}</span> {Icons}</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Row className="icon-lists">
                                                {icons.brand.map((icon, i) => {
                                                    return (
                                                        <Col sm="6" lg="4" key={i} onClick={(e) => getItag(icon)}>
                                                            <i className={`${icon}`}></i> {icon}
                                                        </Col>
                                                    )
                                                })
                                                }
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    })
                }
            </Container>
            <IconMarkUp itag={iTag} icons={icon} />
        </Fragment>
    );
};

export default ThemifyIcons;