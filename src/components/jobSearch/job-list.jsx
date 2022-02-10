import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody,Media} from 'reactstrap'
import JobFilter from './job-filter';
import { ReactandReact_Native_Developer,UIandUX_IT_Frontend_Developer,New,SeniorUXDesigner,FrontEndWebDeveloper,GraphicDesigner,DesignerCRM,UIDesigner_E_commerce } from "../../constant";
const JobList = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Job Search" title="List View"/>
            <Container fluid={true}>
                <Row>
                    <JobFilter />
                    <Col xl="9 xl-60">
                        <Card>
                        <div className="job-search">
                            <CardBody>
                            <Media><img className="img-40 img-fluid m-r-20" src={require("../../assets/images/job-search/1.jpg")} alt=""/>
                                <Media body>
                                <h6 className="f-w-600"><a href="#javascript">{UIandUX_IT_Frontend_Developer}</a><span className="badge badge-primary pull-right">{New}</span></h6>
                                <p>{"(L6) Salt Lake City, UT"}<span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span></p>
                                </Media>
                            </Media>
                            <p>
                                {"We are looking for an experienced and creative designer and/or frontend engineer with expertise in accessibility to join our team , 3+ years of experience working in as a Frontend Engineer or comparable role. You won’t be a team of one though — you’ll be collaborating closely with other..."}
                            </p>
                            </CardBody>
                        </div>
                        </Card>
                        <Card>
                        <div className="job-search">
                            <CardBody>
                            <Media><img className="img-40 img-fluid m-r-20" src={require("../../assets/images/job-search/2.jpg")} alt=""/>
                                <Media body>
                                <h6 className="f-w-600"><a href="#javascript">{ReactandReact_Native_Developer}</a><span className="badge badge-primary pull-right">{New}</span></h6>
                                <p>{"San Diego, CA"} <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-o"></i></span></p>
                                </Media>
                            </Media>
                            <p>{"Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and"}</p>
                            </CardBody>
                        </div>
                        </Card>
                        <Card className="ribbon-vertical-left-wrapper">
                        <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"><i className="icofont icofont-love"></i></div>
                        <div className="job-search">
                            <CardBody>
                            <Media><img className="img-40 img-fluid m-r-20" src={require("../../assets/images/job-search/3.jpg")} alt=""/>
                                <Media body>
                                <h6 className="f-w-600"><a href="#javascript">{SeniorUXDesigner}</a><span className="pull-right">{"2 days ago"}</span></h6>
                                <p>{"Minneapolis, MN"}<span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-half-o"></i><i className="fa fa-star font-warning-o"></i></span></p>
                                </Media>
                            </Media>
                            <p>{"The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards."}</p>
                            </CardBody>
                        </div>
                        </Card>
                        <Card>
                        <div className="job-search">
                            <CardBody>
                            <Media><img className="img-40 img-fluid m-r-20" src={require("../../assets/images/job-search/4.jpg")} alt=""/>
                                <Media body>
                                <h6 className="f-w-600"><a href="#javascript">{FrontEndWebDeveloper}</a><span className="pull-right">{"3 days ago"}</span></h6>
                                <p>{"Cisco"} <span>{"Lelystad, Netherlands"} </span><span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-half-o"></i></span></p>
                                </Media>
                            </Media>
                            <p>{"Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become."}</p>
                            </CardBody>
                        </div>
                        </Card>
                        <Card>
                        <div className="job-search">
                            <CardBody>
                            <Media><img className="img-40 img-fluid m-r-20" src={require("../../assets/images/job-search/5.jpg")} alt=""/>
                                <Media body>
                                <h6 className="f-w-600"><a href="#javascript">{GraphicDesigner}</a><span className="pull-right">{"3 days ago"}</span></h6>
                                <p>{"Infosys"} <span>{"Lelystad, Netherlands"} </span><span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-half-o"></i><i className="fa fa-star font-warning-o"></i></span></p>
                                </Media>
                            </Media>
                            <p>{"Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was."}</p>
                            </CardBody>
                        </div>
                        </Card>
                        <Card>
                        <div className="job-search">
                            <CardBody>
                            <Media><img className="img-40 img-fluid m-r-20" src={require("../../assets/images/job-search/6.jpg")} alt=""/>
                                <Media body>
                                <h6 className="f-w-600"><a href="#javascript">{DesignerCRM}</a><span className="pull-right">{"3 days ago"}</span></h6>
                                <p>{"Citrix"} <span>{"Lelystad, Netherlands"} </span><span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-o"></i><i className="fa fa-star font-warning-o"></i></span></p>
                                </Media>
                            </Media>
                            <p>{"Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered."}</p>
                            </CardBody>
                        </div>
                        </Card>
                        <Card className="ribbon-vertical-left-wrapper">
                        <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"><i className="icofont icofont-love"></i></div>
                        <div className="job-search">
                            <CardBody>
                            <Media><img className="img-40 img-fluid m-r-20" src={require("../../assets/images/job-search/2.jpg")} alt=""/>
                                <Media body>
                                <h6 className="f-w-600"><a href="#javascript">{UIDesigner_E_commerce}</a><span className="pull-right">{"5 days ago"}</span></h6>
                                <p>{"Ericsson"} <span>{"Lelystad, Netherlands"} </span><span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-o"></i></span></p>
                                </Media>
                            </Media>
                            <p>{"Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered."}</p>
                            </CardBody>
                        </div>
                        </Card>
                        <Card>
                        <div className="job-search">
                            <CardBody>
                            <Media><img className="img-40 img-fluid m-r-20" src={require("../../assets/images/job-search/3.jpg")} alt=""/>
                                <Media body>
                                <h6 className="f-w-600"><a href="#javascript">{SeniorUXDesigner}</a><span className="pull-right">{"5 days ago"}</span></h6>
                                <p>{"Minneapolis, MN"} <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-half-o"></i><i className="fa fa-star font-warning-o"></i></span></p>
                                </Media>
                            </Media>
                            <p>{"The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards."}</p>
                            </CardBody>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default JobList;