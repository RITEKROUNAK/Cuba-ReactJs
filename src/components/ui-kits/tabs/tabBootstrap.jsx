import React, { useState, Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Nav, NavItem, NavLink, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, TabContent, TabPane } from 'reactstrap'
import {BasicTabs,TabsBottomLeftAlign,TabsWithIcon,TabsRightAlign,TabsVertical,PillTabs,PillTabsWithIcon,PillDarkColor,PrimaryColor,SecondaryColor,SuccessColor,InfoColor,WarningColor,DangerColor,Hometxt,Action,Contact,Profile,Messages,Settings} from '../../../constant'

const TabBootstrap = (props) => {

  const [BasicTab, setBasicTab] = useState('1');
  const [BottomTab, setBottomTab] = useState('1');
  const [IconWithTab, setIconWithTab] = useState('1');
  const [RightTab, setRightTab] = useState('1');
  const [VerticleTab, setVerticleTab] = useState('1');
  const [pillTab, setpillTab] = useState('1');
  const [pillWithIconTab, setpillWithIconTab] = useState('1');
  const [pillDarkTab, setpillDarkTab] = useState('1');
  const [primarycolorTab, setprimarycolorTab] = useState('1');
  const [secondaryTab, setsecondaryTab] = useState('1');
  const [successTab, setsuccessTab] = useState('1');
  const [infoTab, setinfoTab] = useState('1');
  const [warningTab, setwarningTab] = useState('1');
  const [dangerTab, setdangerTab] = useState('1');

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Fragment>
      <Breadcrumb parent="Ui Kits" title="Bootstrap Tabs" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="6 xl-100" >
            <Card>
              <CardHeader>
                <h5>{BasicTabs}</h5>
              </CardHeader>
              <CardBody>
                <Nav tabs>
                  <NavItem>
                    <NavLink href="#javascript" className={BasicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}>{Hometxt}</NavLink>
                  </NavItem>
                  <Dropdown className="nav-item" isOpen={dropdownOpen} toggle={toggle}>
                    <NavItem>
                      <DropdownToggle className="nav-link" tag="a" href="#javascript" color="default" caret>
                        {"Dropdown"}
                        </DropdownToggle>
                      <DropdownMenu>
                        <NavLink href="#javascript" className={BasicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}>{Action}</NavLink>
                        <DropdownItem href="#javascript">{"Another action"}</DropdownItem>
                        <DropdownItem href="#javascript">{"Something else here"}</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#javascript">{"Separated link"}</DropdownItem>
                      </DropdownMenu>
                    </NavItem>
                  </Dropdown>
                  <NavItem>
                    <NavLink href="#javascript" className={BasicTab === '3' ? 'active' : ''} onClick={() => setBasicTab('3')}>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={BasicTab === '4' ? 'active' : ''} onClick={() => setBasicTab('4')}>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={BasicTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is 111 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="4">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{TabsBottomLeftAlign}</h5>
              </CardHeader>
              <CardBody>
                <TabContent activeTab={BottomTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-b-30">{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-b-30">{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-b-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
                <Nav className="nav nav-tabs nav-bottom" >
                  <NavItem>
                    <NavLink href="#javascript" className={BottomTab === '1' ? 'active' : ''} onClick={() => setBottomTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={BottomTab === '2' ? 'active' : ''} onClick={() => setBottomTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={BottomTab === '3' ? 'active' : ''} onClick={() => setBottomTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{TabsWithIcon} </h5>
              </CardHeader>
              <CardBody>
                <Nav tabs>
                  <NavItem>
                    <NavLink href="#javascript" className={IconWithTab === '1' ? 'active' : ''} onClick={() => setIconWithTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={IconWithTab === '2' ? 'active' : ''} onClick={() => setIconWithTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={IconWithTab === '3' ? 'active' : ''} onClick={() => setIconWithTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={IconWithTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{TabsRightAlign}</h5>
              </CardHeader>
              <CardBody>
                <Nav className="nav nav-tabs nav-right" >
                  <NavItem>
                    <NavLink href="#javascript" className={RightTab === '1' ? 'active' : ''} onClick={() => setRightTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={RightTab === '2' ? 'active' : ''} onClick={() => setRightTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={RightTab === '3' ? 'active' : ''} onClick={() => setRightTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={RightTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100 box-col-12">
            <Card>
              <CardHeader>
                <h5>{TabsVertical}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="3" xs="12">
                    <Nav className="nav flex-column nav-pills">
                      <NavItem>
                        <NavLink href="#javascript" className={VerticleTab === '1' ? 'active' : ''} onClick={() => setVerticleTab('1')}>{Hometxt}</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={VerticleTab === '2' ? 'active' : ''} onClick={() => setVerticleTab('2')}>{Profile}</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={VerticleTab === '3' ? 'active' : ''} onClick={() => setVerticleTab('3')}>{Messages}</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={VerticleTab === '4' ? 'active' : ''} onClick={() => setVerticleTab('4')}>{Settings}</NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col sm="9" xs="12">
                    <TabContent activeTab={VerticleTab}>
                      <TabPane className="fade show" tabId="1">
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}</p>
                      </TabPane>
                      <TabPane tabId="2">
                        <p>{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                      </TabPane>
                      <TabPane tabId="3">
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                      </TabPane>
                      <TabPane tabId="4">
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100 box-col-12">
            <Card>
              <CardHeader>
                <h5>{PillTabs}</h5>
              </CardHeader>
              <CardBody>
                <Nav className="nav-pills">
                  <NavItem>
                    <NavLink href="#javascript" className={pillTab === '1' ? 'active' : ''} onClick={() => setpillTab('1')}>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={pillTab === '2' ? 'active' : ''} onClick={() => setpillTab('2')}>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={pillTab === '3' ? 'active' : ''} onClick={() => setpillTab('3')}>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={pillTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card className="height-equal">
              <CardHeader>
                <h5>{PillTabsWithIcon}</h5>
              </CardHeader>
              <CardBody>
                <Nav className="nav-pills">
                  <NavItem>
                    <NavLink href="#javascript" className={pillWithIconTab === '1' ? 'active' : ''} onClick={() => setpillWithIconTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={pillWithIconTab === '2' ? 'active' : ''} onClick={() => setpillWithIconTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={pillWithIconTab === '3' ? 'active' : ''} onClick={() => setpillWithIconTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={pillWithIconTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card className="height-equal">
              <CardHeader>
                <h5>{PillDarkColor}</h5><span>{"Add"} <code>{".nav-*"}</code> {"class with nav class"}</span><span>{"remove"}  <code>{"nav-pill"}</code> {"class from pill style Tab"}</span>
              </CardHeader>
              <CardBody>
                <Nav className="nav-dark">
                  <NavItem>
                    <NavLink href="#javascript" className={pillDarkTab === '1' ? 'active' : ''} onClick={() => setpillDarkTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={pillDarkTab === '2' ? 'active' : ''} onClick={() => setpillDarkTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={pillDarkTab === '3' ? 'active' : ''} onClick={() => setpillDarkTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={pillDarkTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,It has survived not only five"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{PrimaryColor}</h5><span>{"Add"} <code>{".nav-primary"}</code> {"class with nav class"}</span>
              </CardHeader>
              <CardBody>
                <Nav className="nav-primary" tabs>
                  <NavItem>
                    <NavLink href="#javascript" className={primarycolorTab === '1' ? 'active' : ''} onClick={() => setprimarycolorTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={primarycolorTab === '2' ? 'active' : ''} onClick={() => setprimarycolorTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={primarycolorTab === '3' ? 'active' : ''} onClick={() => setprimarycolorTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={primarycolorTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{SecondaryColor}</h5><span>{"Add"} <code>{".nav-secondary"}</code> {"class with nav class"}</span>
              </CardHeader>
              <CardBody>
                <Nav className="nav-secondary nav-pills" >
                  <NavItem>
                    <NavLink href="#javascript" className={secondaryTab === '1' ? 'active' : ''} onClick={() => setsecondaryTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={secondaryTab === '2' ? 'active' : ''} onClick={() => setsecondaryTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={secondaryTab === '3' ? 'active' : ''} onClick={() => setsecondaryTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={secondaryTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{SuccessColor}</h5><span>{"Add"} <code>{".nav-success"}</code> {"class with nav class"}</span>
              </CardHeader>
              <CardBody>
                <Nav className="nav-success nav-pills" >
                  <NavItem>
                    <NavLink href="#javascript" className={successTab === '1' ? 'active' : ''} onClick={() => setsuccessTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={successTab === '2' ? 'active' : ''} onClick={() => setsuccessTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={successTab === '3' ? 'active' : ''} onClick={() => setsuccessTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={successTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{InfoColor}</h5><span>{"Add"} <code>{".nav-info"}</code> {"class with nav class"}</span>
              </CardHeader>
              <CardBody>
                <Nav className="nav-info nav-pills" >
                  <NavItem>
                    <NavLink href="#javascript" className={infoTab === '1' ? 'active' : ''} onClick={() => setinfoTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={infoTab === '2' ? 'active' : ''} onClick={() => setinfoTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={infoTab === '3' ? 'active' : ''} onClick={() => setinfoTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={infoTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{WarningColor}</h5><span>{"Add"} <code>{".nav-warning"}</code> {"class with nav class"}</span>
              </CardHeader>
              <CardBody>
                <Nav className="nav-warning nav-pills" >
                  <NavItem>
                    <NavLink href="#javascript" className={warningTab === '1' ? 'active' : ''} onClick={() => setwarningTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={warningTab === '2' ? 'active' : ''} onClick={() => setwarningTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={warningTab === '3' ? 'active' : ''} onClick={() => setwarningTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={warningTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{DangerColor}</h5><span>{"Add"} <code>{".nav-danger"}</code> {"class with nav class"}</span>
              </CardHeader>
              <CardBody>
                <Nav className="nav-danger nav-pills" >
                  <NavItem>
                    <NavLink href="#javascript" className={dangerTab === '1' ? 'active' : ''} onClick={() => setdangerTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#javascript" className={dangerTab === '2' ? 'active' : ''} onClick={() => setdangerTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={dangerTab === '3' ? 'active' : ''} onClick={() => setdangerTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={dangerTab}>
                  <TabPane className="fade show" tabId="1">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default TabBootstrap;