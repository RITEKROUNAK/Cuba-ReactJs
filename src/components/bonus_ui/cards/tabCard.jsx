import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,  Row, Col ,Card, CardHeader,CardBody,TabContent,TabPane,Nav,NavItem,NavLink} from 'reactstrap';
import { SimpleTab,TabsWithIcon,ColorTab,ColorOption,MaterialTabWithColor,MaterialTabWithIcon,Hometxt,Profile,Contact } from "../../../constant";

const TabCard = () => {
    
    const [activeTab, setActiveTab] = useState('1');
    const [activeTab2, setActiveTab2] = useState('1');
    const [activeTab3, setActiveTab3] = useState('1');
    const [activeTab4, setActiveTab4] = useState('1');
    const [activeTab5, setActiveTab5] = useState('1');
    const [activeTab6, setActiveTab6] = useState('1');

    return (
        <Fragment>
            <Breadcrumb parent="Bonus Ui" title="Tabbed Card"/>
            <Container fluid={true}>
                <Row>
                    <Col lg="12 box-col-12" xl="6 xl-100">
                        <Card>
                            <CardHeader>
                                <h5>{SimpleTab}</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="tabbed-card">
                                <Nav className="pull-right  nav-pills nav-primary">
                                    <NavItem>
                                        <NavLink  className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                            {Hometxt}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                            {Profile}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                            {Contact}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}</p>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12 box-col-12" xl="6 xl-100">
                        <Card>
                            <CardHeader>
                                <h5>{TabsWithIcon} </h5>
                            </CardHeader>
                            <CardBody className="tabbed-card">
                                <Nav  className="nav-pills nav-primary">
                                    <NavItem>
                                        <NavLink className={activeTab2 === '1' ? 'active' : ''} onClick={() => setActiveTab2('1')}>
                                            <i className="icofont icofont-ui-home"></i> {Hometxt} 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab2 === '2' ? 'active' : ''} onClick={() => setActiveTab2('2')}>
                                            <i className="icofont icofont-man-in-glasses"></i>{Profile}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab2 === '3' ? 'active' : ''} onClick={() => setActiveTab2('3')}>
                                            <i className="icofont icofont-contacts"></i>{Contact}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab2}>
                                    <TabPane tabId="1">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}</p>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12 box-col-12" xl="6 xl-100">
                        <Card className="height-equal">
                            <CardHeader>
                                <h5>{ColorTab}</h5>
                            </CardHeader>
                            <CardBody className="tabbed-card">
                                <Nav  className="nav-pills nav-primary">
                                    <NavItem>
                                        <NavLink className={activeTab3 === '1' ? 'active' : ''} onClick={() => setActiveTab3('1')}>
                                            <i className="icofont icofont-ui-home"></i> {Hometxt} 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab3 === '2' ? 'active' : ''} onClick={() => setActiveTab3('2')}>
                                            <i className="icofont icofont-man-in-glasses"></i> {Profile}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab3 === '3' ? 'active' : ''} onClick={() => setActiveTab3('3')}>
                                            <i className="icofont icofont-contacts"></i> {Contact}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab3}>
                                    <TabPane tabId="1">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}</p>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12 box-col-12" xl="6 xl-100">
                        <Card>
                            <CardHeader>
                                <h5>{ColorOption}</h5>
                            </CardHeader>
                            <CardBody className="tabbed-card">
                                <Nav  className="nav-pills nav-secondary">
                                    <NavItem>
                                        <NavLink className={activeTab4 === '1' ? 'active' : ''} onClick={() => setActiveTab4('1')}>
                                            <i className="icofont icofont-ui-home"></i> {Hometxt} 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab4 === '2' ? 'active' : ''} onClick={() => setActiveTab4('2')}>
                                            <i className="icofont icofont-man-in-glasses"></i> {Profile}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab4 === '3' ? 'active' : ''} onClick={() => setActiveTab4('3')}>
                                            <i className="icofont icofont-contacts"></i> {Contact}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab4}>
                                    <TabPane tabId="1">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}</p>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12 box-col-12" xl="6 xl-100">
                        <Card>
                            <CardHeader>
                                <h5>{MaterialTabWithColor}</h5>
                            </CardHeader>
                            <CardBody className="tabbed-card">
                                <Nav tabs className="pull-right  border-tab">
                                    <NavItem>
                                        <NavLink className={activeTab5 === '1' ? 'active' : ''} onClick={() => setActiveTab5('1')}>
                                          {Hometxt} 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab5 === '2' ? 'active' : ''} onClick={() => setActiveTab5('2')}>
                                            {Profile}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab5 === '3' ? 'active' : ''} onClick={() => setActiveTab5('3')}>
                                           {Contact}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab5}>
                                    <TabPane tabId="1">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}</p>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12 box-col-12" xl="6 xl-100">
                        <Card>
                            <CardHeader>
                                <h5>{MaterialTabWithIcon} </h5>
                            </CardHeader>
                            <CardBody className="tabbed-card">
                                <Nav tabs className="pull-right  border-tab">
                                    <NavItem>
                                        <NavLink className={activeTab6 === '1' ? 'active' : ''} onClick={() => setActiveTab6('1')}>
                                            <i className="icofont icofont-ui-home"></i> {Hometxt} 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab6 === '2' ? 'active' : ''} onClick={() => setActiveTab6('2')}>
                                            <i className="icofont icofont-man-in-glasses"></i>{Profile}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab6 === '3' ? 'active' : ''} onClick={() => setActiveTab6('3')}>
                                            <i className="icofont icofont-contacts"></i>{Contact}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab6}>
                                    <TabPane tabId="1">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}</p>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <p className="mb-0">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default TabCard;