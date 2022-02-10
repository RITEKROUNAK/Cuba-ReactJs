import React,{useState,Fragment} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Nav,NavItem,NavLink,TabContent,TabPane} from 'reactstrap'
import {MaterialColorTab,MaterialBottomTab,MaterialRightTab,MaterialLeftTab,SimpleMaterialTab,Hometxt,Profile,Contact,Inbox,Settings} from '../../../constant'
 
const TabLine = (props) => {

  const [BasicLineTab, setBasicLineTab] = useState('1');
  const [BottomLineTab, setBottomLineTab] = useState('1');
  const [LeftLineTab, setLeftLineTab] = useState('1');
  const [RightLineTab, setRightLineTab] = useState('1');
  const [PrimarycolorLineTab, setPrimarycolorLineTab] = useState('1');
  const [SecondarycolorLineTab, setSecondarycolorLineTab] = useState('1');
  const [SuccessLeftLineTab, setSuccessLeftLineTab] = useState('1');
  const [InfoRightLineTab, setInfoRightLineTab] = useState('1');

    return (
      <Fragment>
        <Breadcrumb parent="Ui Kits" title="Line Tabs"/>
        <Container fluid={true}>
            <Row>
              <Col  sm="12" xl="6 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{SimpleMaterialTab}</h5><span>{"Add"} <code>{".border-tab"}</code> {"class with nav class"}</span>
                  </CardHeader>
                  <CardBody>
                     <Nav className="border-tab" tabs>
                       <NavItem>
                           <NavLink href="#javascript"  className={BasicLineTab === '1' ? 'active' : ''} onClick={() => setBasicLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="#javascript" className={BasicLineTab === '2' ? 'active' : ''} onClick={() => setBasicLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="#javascript" className={BasicLineTab === '3' ? 'active' : ''} onClick={() => setBasicLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                       </NavItem>
                     </Nav>
                     <TabContent activeTab={BasicLineTab}>
                       <TabPane  className="fade show" tabId="1">
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
              <Col  sm="12" xl="6 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{MaterialBottomTab}</h5><span>{"Add"} <code>{".border-tab"}</code> {"class with nav class"}</span>
                  </CardHeader>
                  <CardBody>
                     <TabContent activeTab={BottomLineTab}>
                       <TabPane  className="fade show" tabId="1">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                       <TabPane tabId="2">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                       <TabPane tabId="3">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                     </TabContent> 
                     <Nav className="border-tab" tabs>
                       <NavItem>
                           <NavLink href="#javascript"  className={BottomLineTab === '1' ? 'active' : ''} onClick={() => setBottomLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="#javascript" className={BottomLineTab === '2' ? 'active' : ''} onClick={() => setBottomLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="#javascript" className={BottomLineTab === '3' ? 'active' : ''} onClick={() => setBottomLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                       </NavItem>
                     </Nav>
                  </CardBody>
                </Card>
              </Col>
              <Col  sm="12" xl="6 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{MaterialLeftTab}</h5><span>{"Add"} <code>{".border-tab"}</code> {"class with nav class"}</span>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col sm="3"className="tabs-responsive-side">
                      <Nav className="flex-column nav-pills border-tab nav-left" >
                      <NavItem>
                          <NavLink href="#javascript"  className={LeftLineTab === '1' ? 'active' : ''} onClick={() => setLeftLineTab('1')}>{Hometxt}</NavLink>
                      </NavItem>
                      <NavItem >
                        <NavLink href="#javascript" className={LeftLineTab === '2' ? 'active' : ''} onClick={() => setLeftLineTab('2')}>{Profile}</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={LeftLineTab === '3' ? 'active' : ''} onClick={() => setLeftLineTab('3')}>{Inbox}</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={LeftLineTab === '4' ? 'active' : ''} onClick={() => setLeftLineTab('4')}>{Settings}</NavLink>
                      </NavItem>
                    </Nav>
                    </Col>
                    <Col sm="9">
                        <TabContent activeTab={LeftLineTab}>
                          <TabPane  className="fade show" tabId="1">
                          <p>{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
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
              <Col  sm="12" xl="6 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{MaterialRightTab}</h5><span>{"Add"} <code>{".border-tab"}</code> {"class with nav class"}</span>
                  </CardHeader>
                  <CardBody>
                    <Row>
                       <Col sm="9">
                        <TabContent activeTab={RightLineTab} className="text-right">
                          <TabPane  className="fade show" tabId="1">
                          <p>{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
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
                      <Col sm="3"className="tabs-responsive-side">
                      <Nav className="flex-column border-tab nav-right" >
                      <NavItem>
                          <NavLink href="#javascript"  className={RightLineTab === '1' ? 'active' : ''} onClick={() => setRightLineTab('1')}>{Hometxt}</NavLink>
                      </NavItem>
                      <NavItem >
                        <NavLink href="#javascript" className={RightLineTab === '2' ? 'active' : ''} onClick={() => setRightLineTab('2')}>{Profile}</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={RightLineTab === '3' ? 'active' : ''} onClick={() => setRightLineTab('3')}>{Inbox}</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={RightLineTab === '4' ? 'active' : ''} onClick={() => setRightLineTab('4')}>{Settings}</NavLink>
                      </NavItem>
                    </Nav>
                    </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col  sm="12" xl="6 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{MaterialColorTab}</h5><span>{"Add"} <code>{".nav-primary"}</code> {"class with nav class"}</span>
                  </CardHeader>
                  <CardBody>
                     <Nav className="border-tab nav-primary" tabs>
                       <NavItem>
                           <NavLink href="#javascript"  className={PrimarycolorLineTab === '1' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="#javascript" className={PrimarycolorLineTab === '2' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="#javascript" className={PrimarycolorLineTab === '3' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                       </NavItem>
                     </Nav>
                     <TabContent activeTab={PrimarycolorLineTab}>
                       <TabPane  className="fade show" tabId="1">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                       <TabPane tabId="2">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                       <TabPane tabId="3">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                     </TabContent> 
                  </CardBody>
                </Card>
              </Col>
              <Col  sm="12" xl="6 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{MaterialColorTab}</h5><span>{"Add"} <code>{".nav-secondary"}</code> {"class with nav class"}</span>
                  </CardHeader>
                  <CardBody>
                     <Nav className="border-tab nav-secondary" tabs>
                       <NavItem>
                           <NavLink href="#javascript"  className={SecondarycolorLineTab === '1' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="#javascript" className={SecondarycolorLineTab === '2' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink href="#javascript" className={SecondarycolorLineTab === '3' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
                       </NavItem>
                     </Nav>
                     <TabContent activeTab={SecondarycolorLineTab}>
                       <TabPane  className="fade show" tabId="1">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                       <TabPane tabId="2">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                       <TabPane tabId="3">
                       <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                       </TabPane>
                     </TabContent> 
                  </CardBody>
                </Card>
              </Col>
              <Col  sm="12" xl="6 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{MaterialLeftTab}</h5><span>{"Add"} <code>{".nav-success"}</code> {"class with nav class"}</span>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col sm="3" className="tabs-responsive-side">
                      <Nav className="flex-column nav-success border-tab nav-left">
                      
                        <NavLink href="#javascript"  className={SuccessLeftLineTab === '1' ? 'active' : ''} onClick={() => setSuccessLeftLineTab('1')}>{Hometxt}</NavLink>
                     
                        <NavLink href="#javascript" className={SuccessLeftLineTab === '2' ? 'active' : ''} onClick={() => setSuccessLeftLineTab('2')}>{Profile}</NavLink>
                    
                        <NavLink href="#javascript" className={SuccessLeftLineTab === '3' ? 'active' : ''} onClick={() => setSuccessLeftLineTab('3')}>{Inbox}</NavLink>
                    
                        <NavLink href="#javascript" className={SuccessLeftLineTab === '4' ? 'active' : ''} onClick={() => setSuccessLeftLineTab('4')}>{Settings}</NavLink>
                      
                       </Nav>
                    </Col>
                    <Col sm="9">
                        <TabContent activeTab={SuccessLeftLineTab}>
                          <TabPane  className="fade show" tabId="1">
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                          </TabPane>
                          <TabPane tabId="2">
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
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
              <Col  sm="12" xl="6 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{MaterialRightTab}</h5><span>{"Add"} <code>{".nav-info"}</code> {"class with nav class"}</span>
                  </CardHeader>
                  <CardBody>
                    <Row>
                       <Col sm="9">
                        <TabContent activeTab={InfoRightLineTab} className="text-right">
                          <TabPane  className="fade show" tabId="1" >
                          <p>{"Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
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
                      <Col sm="3" className="tabs-responsive-side">
                      <Nav className="nav flex-column nav-info border-tab nav-right" >
                     
                        <NavLink href="#javascript"  className={InfoRightLineTab === '1' ? 'active' : ''} onClick={() => setInfoRightLineTab('1')}>{Hometxt}</NavLink>

                        <NavLink href="#javascript" className={InfoRightLineTab === '2' ? 'active' : ''} onClick={() => setInfoRightLineTab('2')}>{Profile}</NavLink>

                        <NavLink href="#javascript" className={InfoRightLineTab === '3' ? 'active' : ''} onClick={() => setInfoRightLineTab('3')}>{Inbox}</NavLink>

                        <NavLink href="#javascript" className={InfoRightLineTab === '4' ? 'active' : ''} onClick={() => setInfoRightLineTab('4')}>{Settings}</NavLink>

                      </Nav>
                    </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default TabLine;