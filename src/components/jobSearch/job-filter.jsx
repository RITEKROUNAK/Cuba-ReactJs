import React, { Fragment, useState } from 'react';
import { Search, MapPin } from 'react-feather';
import {Row,Col,Card,CardHeader,CardBody,Input,Label,Button,Collapse } from 'reactstrap';
import { Filters,Location,FindJobs,AllLocations,AllJobTitle,Industry,SpecificSkills,AllSkills,JobTitle,AllIndustries } from "../../constant";

const JobFilter = () => {
    
    const [isFilter, setIsFilter] = useState(true);
    const [location, setLocation] = useState(true);
    const [isJobTitle, setisJobTitle] = useState(true);
    const [isIndustry, setisIndustry] = useState(true);
    const [isSkill, setisSkill] = useState(true);

    return (
        <Fragment>
            <Col xl="3 xl-40">
                <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                    <Row>
                        <Col xl="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="mb-0">
                                        <Button color="link pl-0" data-toggle="collapse" onClick={() => setIsFilter(!isFilter)}
                                            data-target="#collapseicon" aria-expanded={isFilter} aria-controls="collapseicon">{Filters}</Button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={isFilter}>
                                    <CardBody className="filter-cards-view animate-chk">
                                        <div className="job-filter">
                                            <div className="faq-form">
                                                <Input className="form-control" type="text" placeholder="Search.." />
                                                <Search className="search-icon" />
                                            </div>
                                        </div>
                                        <div className="job-filter">
                                            <div className="faq-form">
                                                <Input className="form-control" type="text" placeholder="location.." />
                                                <MapPin className="search-icon" />
                                            </div>
                                        </div>
                                        <div className="checkbox-animated">
                                            <Label className="d-block" htmlFor="chk-ani">
                                                <Input className="checkbox_animated" id="chk-ani" type="checkbox" />{"Full-time (8688)"}
                                            </Label>
                                            <Label className="d-block" htmlFor="chk-ani1">
                                                <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />{"Contract (503)"}
                                            </Label>
                                            <Label className="d-block" htmlFor="chk-ani2">
                                                <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />{"Part-time (288)"}
                                            </Label>
                                            <Label className="d-block" htmlFor="chk-ani3">
                                                <Input className="checkbox_animated" id="chk-ani3" type="checkbox" />{"Internship (236)"}
                                            </Label>
                                            <Label className="d-block" htmlFor="chk-ani4">
                                                <Input className="checkbox_animated" id="chk-ani4" type="checkbox" />{"Temporary (146)"}
                                            </Label>
                                            <Label className="d-block" htmlFor="chk-ani5">
                                                <Input className="checkbox_animated" id="chk-ani5" type="checkbox" />{"Commission (25)"}
                                            </Label>
                                        </div>
                                        <Button color="primary" className="text-center">{FindJobs}</Button>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>

                        <Col xl="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="mb-0">
                                        <Button color="link pl-0" data-toggle="collapse" onClick={() => setLocation(!location)}
                                            data-target="#collapseicon1" aria-expanded={location} aria-controls="collapseicon1">{Location}  </Button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={location}>
                                    <CardBody className="animate-chk">
                                        <div className="location-checkbox">
                                            <Label className="d-block" htmlFor="chk-ani6">
                                                <Input className="checkbox_animated" id="chk-ani6" type="checkbox" />
                                                {"New York"}<span className="d-block">{"NY (399)"}</span>
                                                </Label>
                                            <Label className="d-block" htmlFor="chk-ani7">
                                                <Input className="checkbox_animated" id="chk-ani7" type="checkbox" />
                                                {"San Francisco"}<span className="d-block">{"CA (252)"}</span>
                                                </Label>
                                            <Label className="d-block mb-0" htmlFor="chk-ani8">
                                                <Input className="checkbox_animated" id="chk-ani8" type="checkbox" />
                                                {"Washington"}<span className="d-block">{"DC (226)"}</span>
                                                </Label>
                                            <Label className="d-block mb-0" htmlFor="chk-ani9">
                                                <Input className="checkbox_animated" id="chk-ani9" type="checkbox" />
                                                {"Seattle"}<span className="d-block">{"WA (242)"}</span>
                                                </Label>
                                            <Label className="d-block mb-0" htmlFor="chk-ani10">
                                                <Input className="checkbox_animated" id="chk-ani10" type="checkbox" />
                                                {"Chicago"}<span className="d-block">{"IL (187)"}</span>
                                                </Label>
                                        </div>
                                    </CardBody>
                                    <Button className="btn-block text-center" color="primary">{AllLocations}</Button>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xl="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="mb-0">
                                        <Button color="link pl-0" onClick={() => setisJobTitle(!isJobTitle)}
                                            data-toggle="collapse" data-target="#collapseicon2" aria-expanded={isJobTitle} aria-controls="collapseicon2">{JobTitle}</Button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={isJobTitle}>
                                    <CardBody className="animate-chk">
                                        <Label className="d-block" htmlFor="chk-ani11">
                                            <Input className="checkbox_animated" id="chk-ani11" type="checkbox" />
                                            {"UI/Ux designer(25)"}
                                        </Label>
                                        <Label className="d-block" htmlFor="chk-ani12">
                                            <Input className="checkbox_animated" id="chk-ani12" type="checkbox" />
                                            {"Graphic designer(10)"}
                                        </Label>
                                        <Label className="d-block" htmlFor="chk-ani13">
                                            <Input className="checkbox_animated" id="chk-ani13" type="checkbox" />
                                            {"Front end designer(15)"}
                                        </Label>
                                        <Label className="d-block" htmlFor="chk-ani14">
                                            <Input className="checkbox_animated" id="chk-ani14" type="checkbox" />
                                            {"PHP developer(42)"}
                                        </Label>
                                        <Label className="d-block mb-0" htmlFor="chk-ani15">
                                            <Input className="checkbox_animated" id="chk-ani15" type="checkbox" />
                                            {"React Developer(5)"}
                                        </Label>
                                    </CardBody>
                                    <Button className="btn-block text-center" color="primary">{AllJobTitle}</Button>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xl="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="mb-0">
                                        <Button color="link pl-0" onClick={() => setisIndustry(!isIndustry)}
                                            data-toggle="collapse" data-target="#collapseicon3" aria-expanded={isIndustry} aria-controls="collapseicon3">{Industry}</Button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={isIndustry}>
                                    <div className="collapse show" id="collapseicon3" data-parent="#accordion" aria-labelledby="collapseicon3">
                                        <CardBody className="animate-chk">
                                            <Label className="d-block" htmlFor="chk-ani16">
                                                <Input className="checkbox_animated" id="chk-ani16" type="checkbox" />
                                                {"Computer Software(14)"}
                                            </Label>
                                            <Label className="d-block" htmlFor="chk-ani17">
                                                <Input className="checkbox_animated" id="chk-ani17" type="checkbox" />
                                                {"IT Engineer(10)"}
                                            </Label>
                                            <Label className="d-block" htmlFor="chk-ani18">
                                                <Input className="checkbox_animated" id="chk-ani18" type="checkbox" />
                                                {"Service industry(20)"}
                                            </Label>
                                            <Label className="d-block" htmlFor="chk-ani19">
                                                <Input className="checkbox_animated" id="chk-ani19" type="checkbox" />
                                                {"Accounting(34)"}
                                            </Label>
                                            <Label className="d-block mb-0" htmlFor="chk-ani20">
                                                <Input className="checkbox_animated" id="chk-ani20" type="checkbox" />
                                                {"Financial Services(5)"}
                                            </Label>
                                        </CardBody>
                                        <Button className="btn-block text-center" color="primary">{AllIndustries}</Button>
                                    </div>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xl="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="mb-0">
                                        <Button color="link pl-0" onClick={() => setisSkill(!isSkill)}
                                            data-toggle="collapse" data-target="#collapseicon4" aria-expanded={isSkill} aria-controls="collapseicon4">{SpecificSkills}</Button>
                                    </h5>
                                </CardHeader>
                                <Collapse isOpen={isSkill}>
                                    <div className="collapse show" id="collapseicon4" data-parent="#accordion" aria-labelledby="collapseicon4">
                                        <CardBody className="animate-chk">
                                            <Label className="d-block" htmlFor="chk-ani21">
                                                <Input className="checkbox_animated" id="chk-ani21" type="checkbox" />
                                                {"HTML,scss & sass"}
                                             </Label>
                                            <Label className="d-block" htmlFor="chk-ani22">
                                                <Input className="checkbox_animated" id="chk-ani22" type="checkbox" />
                                                {"Javascript"}
                                             </Label>
                                            <Label className="d-block" htmlFor="chk-ani23">
                                                <Input className="checkbox_animated" id="chk-ani23" type="checkbox" />
                                                {"Node.js"}
                                             </Label>
                                            <Label className="d-block" htmlFor="chk-ani24">
                                                <Input className="checkbox_animated" id="chk-ani24" type="checkbox" />
                                                {"Gulp & Pug"}
                                             </Label>
                                            <Label className="d-block mb-0" htmlFor="chk-ani25">
                                                <Input className="checkbox_animated" id="chk-ani25" type="checkbox" />
                                                {"Angular.js"}
                                             </Label>
                                        </CardBody>
                                        <Button className="btn-block text-center" color="primary">{AllSkills}</Button>
                                    </div>
                                </Collapse>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Fragment>
    );
};

export default JobFilter;