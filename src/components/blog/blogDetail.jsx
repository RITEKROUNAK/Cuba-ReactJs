import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import blog from "../../assets/images/blog/blog.jpg";
import blog2 from "../../assets/images/blog/blog-2.jpg";
import blog3 from "../../assets/images/blog/blog-3.jpg";
import blog5 from "../../assets/images/blog/blog-5.jpg";
import blog6 from "../../assets/images/blog/blog-6.jpg";
import { Container, Row, Col, Card, Media } from "reactstrap"
import {MarkJecno} from "../../constant";

const BlogDetail = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Blog" title="Blog Details" />
            <Container fluid={true}>
                <Row>
                    <Col xl="6 box-col-12 xl-100">
                        <Card>
                            <div className="blog-box blog-shadow">
                                <Media className="img-fluid" src={blog} alt="" />
                                <div className="blog-details">
                                    <p className="digits">{"25 July 2019"}</p>
                                    <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
                                    <ul className="blog-social">
                                        <li><i className="icofont icofont-user"></i>{MarkJecno}</li>
                                        <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                        <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="6 box-col-12 xl-100">
                        <Card>
                            <div className="blog-box blog-list row">
                                <Col sm="5">
                                    <Media className="img-fluid sm-100-w" src={blog2} alt="" />
                                </Col>
                                <Col sm="7">
                                    <div className="blog-details">
                                        <div className="blog-date digits"><span>{"02"}</span> {"January 2019"}</div>
                                        <h6>{"Perspiciatis unde omnis iste natus error sit voluptatem"} </h6>
                                        <div className="blog-bottom-content">
                                            <ul className="blog-social">
                                                <li>{"by: Admin"}</li>
                                                <li className="digits">{"0 Hits"}</li>
                                            </ul>
                                            <hr />
                                            <p className="mt-0">{"inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit."}</p>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card>
                        <Card>
                            <div className="blog-box blog-list row">
                                <Col sm="5">
                                    <Media className="img-fluid sm-100-w" src={blog3} alt="" />
                                </Col>
                                <Col sm="7">
                                    <div className="blog-details">
                                        <div className="blog-date digits"><span>{"03"}</span> {"January 2019"}</div>
                                        <h6>{"Perspiciatis unde omnis iste natus error sit voluptatem"} </h6>
                                        <div className="blog-bottom-content">
                                            <ul className="blog-social">
                                                <li >{"by: Admin"}</li>
                                                <li className="digits">{"02 Hits"}</li>
                                            </ul>
                                            <hr />
                                            <p className="mt-0">{"inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit."}</p>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card>
                    </Col>
                    <Col md="6" xl="3 box-col-6 xl-50">
                        <Card>
                            <div className="blog-box blog-grid text-center">
                                <Media className="img-fluid top-radius-blog" src={blog5} alt="" />
                                <div className="blog-details-main">
                                    <ul className="blog-social">
                                        <li className="digits">{"9 April 2019"}</li>
                                        <li className="digits">{"by: Admin"}</li>
                                        <li className="digits">{"0 Hits"}</li>
                                    </ul>
                                    <hr />
                                    <h6 className="blog-bottom-details">{"Perspiciatis unde omnis iste natus error sit.Dummy text"}</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md="6" xl="3 box-col-6 xl-50">
                        <Card>
                            <div className="blog-box blog-grid text-center">
                                <Media className="img-fluid top-radius-blog" src={blog6} alt="" />
                                <div className="blog-details-main">
                                    <ul className="blog-social">
                                        <li className="digits">{"9 April 2019"}</li>
                                        <li className="digits">{"by: Admin"}</li>
                                        <li className="digits">{"0 Hits"}</li>
                                    </ul>
                                    <hr />
                                    <h6 className="blog-bottom-details">{"Perspiciatis unde omnis iste natus error sit.Dummy text"}</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md="6" xl="3 box-col-6 xl-50">
                        <Card>
                            <div className="blog-box blog-grid text-center">
                                <Media className="img-fluid top-radius-blog" src={blog5} alt="" />
                                <div className="blog-details-main">
                                    <ul className="blog-social">
                                        <li className="digits">{"9 April 2019"}</li>
                                        <li className="digits">{"by: Admin"}</li>
                                        <li className="digits">{"0 Hits"}</li>
                                    </ul>
                                    <hr />
                                    <h6 className="blog-bottom-details">{"Perspiciatis unde omnis iste natus error sit.Dummy text"}</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md="6" xl="3 box-col-6 xl-50">
                        <Card>
                            <div className="blog-box blog-grid text-center">
                                <Media className="img-fluid top-radius-blog" src={blog6} alt="" />
                                <div className="blog-details-main">
                                    <ul className="blog-social">
                                        <li className="digits">{"9 April 2019"}</li>
                                        <li className="digits">{"by: Admin"}</li>
                                        <li className="digits">{"0 Hits"}</li>
                                    </ul>
                                    <hr />
                                    <h6 className="blog-bottom-details">{"Perspiciatis unde omnis iste natus error sit.Dummy text"}</h6>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default BlogDetail;