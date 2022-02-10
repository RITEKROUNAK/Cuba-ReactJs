import React, { Fragment, useState } from 'react';
import {Card,Row,Col,TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {Febric,Video,Details,Brand} from '../../../constant'
const Tabset = () => {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <Fragment>
            <Card>
                <Row className="product-page-main m-0">
                    <Col sm="12">
                    <Nav tabs className="border-tab">
                        <NavItem  id="myTab" role="tablist">
                            <NavLink href="#" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                {Febric}
                            </NavLink>
                            <div className="material-border"></div>
                        </NavItem>
                        <NavItem  id="myTab" role="tablist">
                            <NavLink href="#"  className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                {Video}
                            </NavLink>
                            <div className="material-border"></div>
                        </NavItem>
                        <NavItem  id="myTab" role="tablist">
                            <NavLink href="#"  className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                {Details}
                            </NavLink>
                            <div className="material-border"></div>
                        </NavItem>
                        <NavItem   id="myTab" role="tablist">
                            <NavLink href="#"  className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                {Brand}
                            </NavLink>
                            <div className="material-border"></div>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <p className="mb-0 m-t-20"> {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                            <p className="mb-0 m-t-20">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                        </TabPane>
                        <TabPane tabId="2">
                            <p className="mb-0 m-t-20">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                        </TabPane>
                        <TabPane tabId="3">
                            <p className="mb-0 m-t-20"> {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                        </TabPane>
                        <TabPane tabId="4">
                            <p className="mb-0 m-t-20">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                        </TabPane>
                    </TabContent>
                    </Col>
                </Row>
            </Card>
        </Fragment>
    );
}

export default Tabset;