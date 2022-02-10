import React, { Fragment, useEffect, useState} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody,Media,Button} from 'reactstrap'
import JobFilter from './job-filter';
import one from '../../assets/images/job-search/1.jpg';
import two from '../../assets/images/job-search/6.jpg';
import {Link}  from 'react-router-dom'
import {CreativeUnitedStates,JobDescription,Qualifications,AgencyExperience,Perks,Share,SimilarJobs,SeniorUXDesigner} from "../../constant";
import axios from 'axios'

const JobDetail = (props) => {

    const [JobData,setJobData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/jobSearch.json`).then(res => setJobData(res.data))
    },[])
    
    return (
        <Fragment>
            <Breadcrumb parent="Job Search" title="Job Details"/>
            <Container fluid={true}>
                <Row>
                    <JobFilter />
                    <Col xl="9 xl-60">
                        <Card>
                            <div className="job-search">
                                <CardBody>
                                    <Media>
                                        <img className="img-40 img-fluid m-r-20" src={one} alt="" />
                                        <Media body>
                                            <h6 className="f-w-600">
                                                <a href="#javascript">{"Product Designer (UI/UX Designer)"}</a>
                                                <span className="pull-right">
                                                    <Link to={`${process.env.PUBLIC_URL}/app/jobSearch/job-apply`}> 
                                                    <Button color="primary">{"Apply for this job"}</Button>
                                                    </Link>
                                                </span>
                                            </h6>
                                                <p>{CreativeUnitedStates}
                                                <span>
                                                    <i className="fa fa-star font-warning"></i>
                                                    <i className="fa fa-star font-warning"></i>
                                                    <i className="fa fa-star font-warning"></i>
                                                    <i className="fa fa-star font-warning"></i>
                                                    <i className="fa fa-star font-warning"></i>
                                                </span>
                                            </p>
                                        </Media>
                                    </Media>
                                    <div className="job-description">
                                        <h6>{JobDescription}</h6>
                                        <p>{"Creative is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team."}</p>
                                    </div>
                                    <div className="job-description">
                                        <h6>{Qualifications} </h6>
                                        <ul>
                                            <li>{"Have shipped multiple iOS, Android, and/or web products "}</li>
                                            <li>{"5+ years UI/UX experience"}</li>
                                            <li>{"Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"}</li>
                                            <li>{"Ability to autonomously pursue elegant solutions to open-ended problems"}</li>
                                            <li>{"Comfort with ambiguity"}</li>
                                            <li>{"Proven ability to create interactive prototypes"}</li>
                                            <li>{"Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"}</li>
                                            <li>{"Strong written communication skills with ability to make transparent design documentation and client-facing presentations"}</li>
                                            <li>{"Ability to create and maintain flow charts, wire frames, prototypes, and mockups."}</li>
                                            <li>{"Ability to effectively work on more than one project at a time"}</li>
                                            <li>{"Experience conducting user research and stakeholder interviews"}</li>
                                            <li>{"Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."}</li>
                                            <li>{"Bonus Considerations "}</li>
                                        </ul>
                                    </div>
                                    <div className="job-description">
                                        <h6>{AgencyExperience}</h6>
                                        <ul>
                                            <li>{"Experience working with Agile development teams"}</li>
                                            <li>{"Experience with RITE method usability testing"}</li>
                                            <li>{"Experience in visual and motion design; ability to translate UX design into high quality visuals"}</li>
                                            <li>{"Mastery of Sketch & InVision"}</li>
                                            <li>{"Knowledge of mobile or front-end web programming"}</li>
                                        </ul>
                                    </div>
                                    <div className="job-description">
                                        <h6>{Perks}</h6>
                                        <ul>
                                            <li>{"Competitive pay"}</li>
                                            <li>{"Competitive medical, dental, and vision insurance plans"}</li>
                                            <li>{"Company-provided 401(k) plan"}</li>
                                            <li>{"Paid vacation and sick time"}</li>
                                            <li>{"Free snacks and beverages"}</li>
                                        </ul>
                                    </div>
                                    <div className="job-description">
                                        <Button color="primary mr-1"><span><i className="fa fa-check"></i></span> {"Save this job"}</Button>
                                        <Button color="primary"><span><i className="fa fa-share-alt"></i></span> {Share}</Button>
                                    </div>
                                </CardBody>
                            </div>
                        </Card>
                        <div className="header-faq">
                            <h6 className="mb-0 f-w-600">{SimilarJobs}</h6>
                        </div>
                        <Row>
                            {JobData.slice(0, 4).map((data, i) => {
                                return (
                                    <Col xl="6 xl-100" key={i}>
                                        <Card>
                                            <div className="job-search">
                                                <CardBody>
                                                    <Media>
                                                        <img className="img-40 img-fluid m-r-20" src={require(`../../assets/images/${data.logo}`)} alt="" />
                                                        <Media body>
                                                            <h6 className="f-w-600"><a href="#javascript">{data.job_name}</a>
                                                                {(data.badgeType === 'primary' ? <span className="badge badge-primary pull-right">{data.badgeValue}</span>
                                                                    : ''
                                                                )}
                                                            </h6>
                                                            <p>{data.job_area} <span>{data.job_city}</span>
                                                                <span>
                                                                    <i className="fa fa-star font-warning"></i>
                                                                    <i className="fa fa-star font-warning"></i>
                                                                    <i className="fa fa-star font-warning"></i>
                                                                    <i className="fa fa-star font-warning"></i>
                                                                    <i className="fa fa-star font-warning-o"></i>
                                                                </span>
                                                            </p>
                                                        </Media>
                                                    </Media>
                                                    <p>{data.Job_description}</p>
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                            <Col xl="12">
                                <Card>
                                    <div className="job-search">
                                        <CardBody>
                                            <Media>
                                                <img className="img-40 img-fluid m-r-20" src={two} alt="" />
                                                <Media body>
                                                    <h6 className="f-w-600"><a href="#javascript">{SeniorUXDesigner}</a><span className="pull-right">{"5 days ago"}</span></h6>
                                                    <p>{"Sutherland"} <span>{"Lelystad, Netherlands"} </span><span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning-half-o"></i><i className="fa fa-star font-warning-o"></i></span></p>
                                                </Media>
                                            </Media>
                                            <p>{"Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no."}</p>
                                        </CardBody>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default JobDetail;