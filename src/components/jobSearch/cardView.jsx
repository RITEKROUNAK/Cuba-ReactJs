import React, {Fragment,useState,useEffect} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody,Media} from 'reactstrap'
import JobFilter from './job-filter';
import {Link}  from 'react-router-dom'
import axios from 'axios'

const CardView = (props) => {

    const [JobData,setJobData] = useState([])
    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/jobSearch.json`).then(res => setJobData(res.data))
    },[])

    return (
        <Fragment>
            <Breadcrumb parent="Job Search" title="Cards View"/>
            <Container fluid={true}>
                <Row>
                    <JobFilter />
                    <Col xl="9 xl-60">
                        <Row>
                            {JobData.map((data, i) => {
                                return (
                                    <Col xl="6 xl-100" key={i}>
                                        <Card className={`${data.badgeValue ? '' : 'ribbon-vertical-left-wrapper'}`}>
                                            <div className="job-search">
                                                <CardBody>
                                                    <Media>
                                                        <img className="img-40 img-fluid m-r-20" src={require(`../../assets/images/${data.logo}`)} alt="" />
                                                        <Media body>
                                                            <h6 className="f-w-600">
                                                                <Link to={`${process.env.PUBLIC_URL}/app/jobSearch/job-detail`}> 
                                                                    {data.job_name}
                                                                </Link>
                                                                {(data.badgeType === 'primary' ?
                                                                    <span className="badge badge-primary pull-right">
                                                                        {data.badgeValue}
                                                                    </span>
                                                                    : <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
                                                                        <i className="icofont icofont-love"></i>
                                                                    </div>
                                                                )}
                                                            </h6>
                                                            <p>{data.job_area}, {data.job_city}
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
                                                    <p>{data.Job_description}</p>
                                                </CardBody>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default CardView;