import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Search, Edit, Globe, BookOpen, FileText, Youtube, MessageCircle, Mail, RotateCcw, DollarSign, Check, Link, Codepen, HelpCircle, Aperture, Settings, MessageSquare } from 'react-feather';
import one from '../../assets/images/faq/1.jpg';
import two from '../../assets/images/faq/2.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import { Container, Row, Col, Card, CardBody, CardHeader, Media} from 'reactstrap';
import { Articles,Knowledgebase,Support,IntellectualProperty,SellingAndBuying,UserAccounts,SearchArticles,Navigation,AskOurCommunity,AskQuestion,Tutorials,HelpCenter,ContactUs,VideoTutorials,DavidLinner,UserChristopher,VictoriaWilson,LatestUpdates,UIDesign,UXDesign,WebDesign,FeaturedTutorials ,SeeAll,WebDevelopment} from "../../constant";
import { Accordion } from 'react-bootstrap';

const FaqComponent = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Apps" title="FAQ" />
            <Container fluid={true}>
                <div className="faq-wrap">
                    <Row>
                        <Col xl="4 xl-100">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Articles}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><FileText />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4 xl-50" sm="6">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Knowledgebase}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><BookOpen />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col  xl="4 xl-50" sm="6">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Support}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><Aperture />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="12">
                            <div className="header-faq">
                                <h5 className="mb-0">{"Quick Questions are answered"}</h5>
                            </div>
                            <Row className="default-according style-1 faq-accordion" id="accordionoc">
                                <Col xl="8 xl-60" lg="6" md="7">
                                <Accordion>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                    <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="0" aria-expanded={true}>
                                                        <HelpCircle />
                                                        {"Integrating WordPress with Your Website?"}
                                                    </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="0">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="1" aria-expanded={true}>
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="1">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="2" aria-expanded={true}>
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="2">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="3" aria-expanded={true}>
                                                    <HelpCircle />  {"WordPress in Your Language ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="3">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <div className="faq-title">
                                        <h6>{IntellectualProperty}</h6>
                                    </div>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="4" aria-expanded={true}>
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="4">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="5" aria-expanded={true}>
                                                    <HelpCircle /> {"WordPress in Your Language ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="5">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="6" aria-expanded={true}>
                                                    <HelpCircle /> {"Integrating WordPress with Your Website ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="6">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <div className="faq-title">
                                        <h6>{SellingAndBuying}</h6>
                                    </div>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="7" aria-expanded={true}>
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="7">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="8" aria-expanded={true}>
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="8">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="9" aria-expanded={true}>
                                                    <HelpCircle />{"Validating a Website ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="9">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="10" aria-expanded={true}>
                                                    <HelpCircle />{"Know Your Sources ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="10">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <div className="faq-title">
                                        <h6>{UserAccounts}</h6>
                                    </div>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="11" aria-expanded={true}>
                                                    <HelpCircle />{"Integrating WordPress with Your Website ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="11">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="12" aria-expanded={true}>
                                                    <HelpCircle />{"WordPress Site Maintenance ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="12">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="13" aria-expanded={true}>
                                                    <HelpCircle /> {"WordPress in Your Language ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="13">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="14" aria-expanded={true}>
                                                    <HelpCircle />  {"Validating a Website ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="14">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                            <Accordion.Toggle as={Card.Header} className="btn btn-link collapsed pl-0" eventKey="15" aria-expanded={true}>
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}
                                            </Accordion.Toggle>
                                            </h5>
                                        </CardHeader>
                                        <Accordion.Collapse eventKey="15">
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </Col>
                                <Col xl="4 xl-40" lg="6" md="5">
                                    <Row>
                                        <Col lg="12">
                                            <div className="card card-mb-faq xs-mt-search">
                                                <CardHeader className="faq-header">
                                                    <h5>{SearchArticles}</h5>
                                                    <HelpCircle />
                                                </CardHeader>
                                                <CardBody className="faq-body">
                                                    <div className="faq-form">
                                                        <input className="form-control" type="text" placeholder="Search.." />
                                                        <Search className="search-icon" />
                                                    </div>
                                                </CardBody>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <Card className="card-mb-faq">
                                                <CardHeader className="faq-header">
                                                    <h5>{Navigation}</h5><Settings />
                                                </CardHeader>
                                                <CardBody className="faq-body">
                                                    <div className="navigation-btn"><a className="btn btn-primary" style={{color:"#fff"}}  href="#javascript">
                                                        <MessageSquare className="m-r-10" />{AskQuestion}</a></div>
                                                    <div className="navigation-option">
                                                        <ul>
                                                            <li><a href="#javascript"><Edit />{Tutorials}</a></li>
                                                            <li><a href="#javascript"><Globe />{HelpCenter}</a></li>
                                                            <li><a href="#javascript"><BookOpen />{Knowledgebase}</a></li>
                                                            <li><a href="#javascript"><FileText />{Articles}</a><span className="badge badge-primary badge-pill pull-right">{"42"}</span></li>
                                                            <li><a href="#javascript"><Youtube />{VideoTutorials}</a><span className="badge badge-primary badge-pill pull-right">{"648"}</span></li>
                                                            <li><a href="#javascript"><MessageCircle />{AskOurCommunity}</a></li>
                                                            <li><a href="#javascript"><Mail />{ContactUs}</a></li>
                                                        </ul>
                                                        <hr />
                                                        <ul>
                                                            <li><a href="#javascript"><MessageCircle />{AskOurCommunity}</a></li>
                                                            <li><a href="#javascript"><Mail />{ContactUs}</a></li>
                                                        </ul>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="12">
                                            <Card>
                                                <CardHeader className="faq-header">
                                                    <h5 className="d-inline-block">{LatestUpdates}</h5><span className="pull-right d-inline-block">{SeeAll}</span>
                                                </CardHeader>
                                                <CardBody className="faq-body">
                                                    <Media className="updates-faq-main">
                                                        <div className="updates-faq"><RotateCcw className="font-primary" /></div>
                                                        <Media body className="updates-bottom-time">
                                                            <p><a href="#javascript">{DavidLinner} </a>{"requested money back for a double debit card charge"}</p>
                                                            <p>{"10 minutes ago"}</p>
                                                        </Media>
                                                    </Media>
                                                    <Media className="updates-faq-main">
                                                        <div className="updates-faq"><DollarSign className="font-primary" /></div>
                                                        <Media body className="updates-bottom-time">
                                                            <p>{"All sellers have received monthly payouts"}</p>
                                                            <p>{"2 hours ago"}</p>
                                                        </Media>
                                                    </Media>
                                                    <Media className="updates-faq-main">
                                                        <div className="updates-faq"><Link className="font-primary" /></div>
                                                        <Media body className="updates-bottom-time">
                                                            <p>{UserChristopher} <a href="#javascript">{"Wallace"}</a> {"is on hold and awaiting for staff reply"}</p>
                                                            <p>{"45 minutes ago"}</p>
                                                        </Media>
                                                    </Media>
                                                    <Media className="updates-faq-main">
                                                        <div className="updates-faq"><Check className="font-primary" /></div>
                                                        <Media body className="updates-bottom-time">
                                                            <p>{"Ticket #43683 has been closed by"} <a href="#javascript">{VictoriaWilson}</a></p>
                                                            <p>{"Dec 7, 11:48"}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                       
                       </Col>
                        <Col lg="12">
                            <div className="header-faq">
                                <h5 className="mb-0">{FeaturedTutorials}</h5>
                            </div>
                            <Row>
                                <Col xl="3 xl-50 box-col-6" md="6">
                                    <Card className="features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={one} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link"></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <h6>{WebDesign}</h6>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </CardBody>
                                        <div className="card-footer"><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></div>
                                    </Card>
                                </Col>
                                <Col xl="3 xl-50 box-col-6" md="6">
                                    <Card className="features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={two} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link"></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <h6>{WebDevelopment}</h6>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </CardBody>
                                        <div className="card-footer"><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-o font-primary"></i></span></div>
                                    </Card>
                                </Col>
                                <Col xl="3 xl-50 box-col-6" md="6">
                                    <Card className="features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={three} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link"></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <h6>{UIDesign}</h6>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </CardBody>
                                        <div className="card-footer"><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></div>
                                    </Card>
                                </Col>
                                <Col xl="3 xl-50 box-col-6" md="6">
                                    <Card className="features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={four} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link"></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <h6>{UXDesign}</h6>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </CardBody>
                                        <div className="card-footer"><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-half-o font-primary"></i></span></div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12">
                            <div className="header-faq">
                                <h5 className="mb-0">{"Latest articles and videos"}</h5>
                            </div>
                            <Row>
                                <Col xl="4" md="6">
                                    <Row>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Using Video"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Vel illum qu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media><Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Cum sociis natoqu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."} </p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl="4" md="6">
                                    <Row>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Donec pede justo"}</h6>
                                                            <p>{" Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."} </p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Nam quam nunc"}</h6>
                                                            <p>{" Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Using Video"} </h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl="4">
                                    <Row>
                                        <Col xl="12" md="6">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Vel illum qu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl="12" md="6">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Cum sociis natoqu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl="12">
                                            <Card>
                                                <CardBody>
                                                    <Media><Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Donec pede justo"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};

export default FaqComponent;