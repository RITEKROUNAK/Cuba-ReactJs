import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Masonry from 'react-masonry-css';
import { Container, Row, Col, Card, CardHeader, CardBody, Media } from 'reactstrap'
import { useEffect } from 'react';
import axios from 'axios'
import { PortfolioTitle,MasonryGalleryWithDescription } from '../../constant';


const MesonryDesc = () => {
    
    const [masonryImg,setMasonryImg] = useState([])
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1
    };

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/masonry.json`).then((response) => {
            setMasonryImg(response.data);
        })
    },[])
     
    return (
        <Fragment>
            <Breadcrumb parent="Gallery" title="Masonry Gallery With Description" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{MasonryGalleryWithDescription}</h5>
                            </CardHeader>
                            <CardBody className="photoswipe-pb-responsive">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid masonry-with-dec my-gallery gallery-with-description row grid"
                                    columnClassName="col-xl-3 col-sm-6 col-md-4 grid-item"
                                >
                                    {masonryImg.map((element, index) =>
                                        <li style={{ listStyle: "none" }} key={index} >
                                            <a href="#javascript" data-size="1600x950">
                                                <Media src={require(`../../assets/images/${element.src}`)} style={{ width: '100%' }} alt="" />
                                                <div className="caption">
                                                    <h4>{PortfolioTitle}</h4>
                                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                                </div>
                                            </a>
                                        </li>
                                    )}
                                </Masonry>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default MesonryDesc;