import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import IconMarkUp from './Icon-markup';
import {Container,Row,Col,Card,CardHeader,CardBody,Media} from 'reactstrap'
import axios from 'axios'
import {Feather,Icons} from "../../constant";
import * as feather from 'feather-icons';

const FeatherIcons = () => {

    const [data,setData] = useState([])
    const [iTag, setiTag] = useState('');
    const [feathericon, setfeatherIcon] = useState('');

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/featherData.json`).then(res => setData(res.data))
    },[])

    const getItag = (tag) => {

        setiTag({
            iTag: '<i data-feather="' + tag + '"></i>',
        })
        setfeatherIcon({
            feathericon : tag
        })
        
    }
    return (
            <Fragment>
            <Breadcrumb parent="Icons" title="Feather Icons"/>
            <Container fluid={true}>
                {
                    data.map((icons, index) => {
                        return (
                            <Row key={index} >
                                <Col sm="12">
                                    <Card>
                                        <CardHeader>
                                            <h5 className="m-b-0"><span className="digits">{Feather}</span> {Icons}</h5>
                                        </CardHeader>
                                        <CardBody>
                                            <Row className="icon-lists feather-icons">
                                                {
                                                    icons.feather_icons.map((icon, i) => {
                                                    return (
                                                        <Col  sm="6 col-12" xl="4" key={i} onClick={(e) => getItag(icon)}>
                                                            <Media>
                                                            <div dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg(icon) }} />
                                                                <Media  body className="align-self-center">
                                                                    <h6 className="mt-0">{icon}</h6>
                                                                </Media>
                                                            </Media>
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
            <IconMarkUp itag={iTag} icons={feathericon} /> 
        </Fragment>
    );
};

export default FeatherIcons;