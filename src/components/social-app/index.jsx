import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, Media, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import TimelineTab from './timelineTab';
import AboutTab from './aboutTab';
import FriendsTab from './friendsTab';
import PhotosTab from './photosTab';
import {Timline,Friends,About,Photos,GeneralManager} from "../../constant";

const SocialApp = () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <Fragment>
            <Breadcrumb parent="Apps" title="Social App" />
            <Container fluid={true}>
                <div className="user-profile social-app-profile">
                    <Row>
                        <Col sm="12">
                            <Card className="hovercard text-center">
                                <div className="cardheader socialheader"></div>
                                <div className="user-image">
                                    <div className="avatar">
                                        <Media body alt="user" src={require("../../assets/images/user/1.jpg")} />
                                    </div>
                                    <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5"></i></div>
                                    <ul className="share-icons">
                                        <li><a className="social-icon bg-primary" href="#javascripts"><i className="fa fa-smile-o"></i></a></li>
                                        <li><a className="social-icon bg-secondary" href="#javascripts"><i className="fa fa-wechat"></i></a></li>
                                        <li><a className="social-icon bg-warning" href="#javascripts"><i className="fa fa-share-alt"></i></a></li>
                                    </ul>
                                </div>
                                <div className="info market-tabs p-0">
                                    <Nav tabs className="border-tab tabs-scoial">
                                        <NavItem className="nav" id="myTab" role="tablist">
                                            <NavLink tag="a" href="#javascript" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                                {Timline}
                                        </NavLink>
                                        </NavItem>
                                        <NavItem className="nav" id="myTab" role="tablist">
                                            <NavLink tag="a" href="#javascript" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                                {About}
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <div className="user-designation"></div>
                                            <div className="title"><a target="_blank" href="#javascripts">{"ElANA"}</a></div>
                                            <div className="desc mt-2">{GeneralManager}</div>
                                        </NavItem>
                                        <NavItem className="nav" id="myTab" role="tablist">
                                            <NavLink tag="a" href="#javascript" className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                                {Friends}
                                        </NavLink>
                                        </NavItem>
                                        <NavItem className="nav" id="myTab" role="tablist">
                                            <NavLink tag="a" href="#javascript" className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                                {Photos}
                                        </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <TabContent activeTab={activeTab} className="tab-content">
                        <TabPane tabId="1">
                            <TimelineTab />
                        </TabPane>
                        <TabPane tabId="2">
                            <AboutTab />
                        </TabPane>
                        <TabPane tabId="3">
                            <FriendsTab />
                        </TabPane>
                        <TabPane tabId="4">
                            <PhotosTab />
                        </TabPane>
                    </TabContent>
                </div>
            </Container>
        </Fragment>
    );
};

export default SocialApp;