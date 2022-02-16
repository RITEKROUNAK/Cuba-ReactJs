import React, { useState, Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, ListGroup, ListGroupItem, TabContent, TabPane, Media } from 'reactstrap'
import {DefaultList,LinksAndButtons,FlushStyle,ContextualClasses,WithBadges,WithIcon,WithImages,WithImageRounded,JavaScriptBehavior,CustomContent,Hometxt,Profile,Messages,Settings} from '../../constant'

const List = (props) => {

  const [activeTab, setActiveTab] = useState('1');
  
  return (
    <Fragment>
      <Breadcrumb parent="Ui Kits" title="Lists" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{DefaultList}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>{"Cras justo odio"}</ListGroupItem>
                  <ListGroupItem>{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem>{"Morbi leo risus"}</ListGroupItem>
                  <ListGroupItem>{"Porta ac consectetur ac"}</ListGroupItem>
                  <ListGroupItem>{"Vestibulum at eros"}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{LinksAndButtons}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript" active>{"Cras justo odio"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">{"Morbi leo risus"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">{"Porta ac consectetur ac"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript" disabled>{"Vestibulum at eros"}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{FlushStyle}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{"Cras justo odio"}</ListGroupItem>
                  <ListGroupItem>{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem>{"Morbi leo risus"}</ListGroupItem>
                  <ListGroupItem>{"Porta ac consectetur ac"}</ListGroupItem>
                  <ListGroupItem>{"Vestibulum at eros"}</ListGroupItem>
                  <ListGroupItem>{"Cras justo odio"}</ListGroupItem>
                  <ListGroupItem>{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem>{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem>{"Dapibus ac facilisis in"}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{ContextualClasses}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <li className="list-group-item">{"Dapibus ac facilisis in"}</li>
                  <li className="list-group-item list-group-item-primary">{"This is a primary list group item"}</li>
                  <li className="list-group-item list-group-item-secondary">{"This is a secondary list group item"}</li>
                  <li className="list-group-item list-group-item-success">{"This is a success list group item"}</li>
                  <li className="list-group-item list-group-item-danger">{"This is a danger list group item"}</li>
                  <li className="list-group-item list-group-item-warning">{"This is a warning list group item"}</li>
                  <li className="list-group-item list-group-item-info">{"This is a info list group item"}</li>
                  <li className="list-group-item list-group-item-light">{"This is a light list group item"}</li>
                  <li className="list-group-item list-group-item-dark">{"This is a dark list group item"}</li>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{WithBadges}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">{"Cras justo odio"}<span className="badge badge-primary counter digits">{"14"}</span></ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">{"Dapibus ac facilisis in"}<span className="badge badge-secondary counter digits">{"2"}</span></ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">{"Morbi leo risus"}<span className="badge badge-success badge-pill counter digits">{"1"}</span></ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">{"Dapibus ac facilisis in"}<span className="badge badge-info badge-pill digits">{"100%"}</span></ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">{"Dapibus ac facilisis in"}<span className="badge badge-warning counter digits">{"2"}</span></ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">{"Morbi leo risus"}<span className="badge badge-danger badge-pill digits">{"sale"}</span></ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">{"Cras justo odio"}<span className="badge badge-light counter digits">{"14"}</span></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{CustomContent}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="list-group-item-action flex-column align-items-start active" >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{"List group item heading"}</h5><small>{"3 days ago"}</small>
                    </div>
                    <p className="mb-1">{"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}</p>
                    <small>{"Donec id elit non mi porta."}</small>
                  </ListGroupItem>

                  <ListGroupItem className="list-group-item-action flex-column align-items-start" >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{"List group item heading"}</h5><small className="text-muted">{"3 days ago"}</small>
                    </div>
                    <p className="mb-1">{"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}</p>
                    <small className="text-muted">{"Donec id elit non mi porta."}</small>
                  </ListGroupItem>

                  <ListGroupItem className="list-group-item-action flex-column align-items-start" >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{"List group item heading"}</h5><small className="text-muted">{"3 days ago"}</small>
                    </div>
                    <p className="mb-1">{"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}</p>
                    <small className="text-muted">{"Donec id elit non mi porta."}</small>
                  </ListGroupItem>

                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{JavaScriptBehavior}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="4 tab-javascript">
                    <ListGroup className="nav-primary nav-pills">
                      <ListGroupItem href="#javascript" className={activeTab === '1' ? 'list-group-item-action active' : ''} onClick={() => setActiveTab('1')}>{Hometxt}</ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem href="#javascript" className={activeTab === '2' ? 'list-group-item-action active' : ''} onClick={() => setActiveTab('2')}>{Profile}</ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem href="#javascript" className={activeTab === '3' ? 'list-group-item-action active' : ''} onClick={() => setActiveTab('3')}>{Messages}</ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem href="#javascript" className={activeTab === '4' ? 'list-group-item-action active' : ''} onClick={() => setActiveTab('4')}>{Settings}</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col sm="8">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1" className="fade show">{"1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</TabPane>
                      <TabPane tabId="2" className="fade show">{"2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</TabPane>
                      <TabPane tabId="3" className="fade show">{"3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</TabPane>
                      <TabPane tabId="4" className="fade show">{"4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{WithIcon}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript"><i className="icon-save-alt"></i>{"Cras justo odio"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript"><i className="icon-target"></i>{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript"><i className="icon-mobile"></i>{"Morbi leo risus"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action disabled"><i className="icon-shopping-cart-full"></i>{"Vestibulum at eros"}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{WithImages}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">
                    <Media body src={require("../../assets/images/user/1.jpg")} alt="" />{"Cras justo odio"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">
                    <Media body src={require("../../assets/images/user/1.jpg")} alt="" />{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">
                    <Media body src={require("../../assets/images/user/1.jpg")} alt="" />{"Morbi leo risus"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action disabled"><Media body src={require("../../assets/images/user/1.jpg")} alt="" />{"Vestibulum at eros"}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{WithImageRounded}</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">
                    <Media body className="rounded-circle" src={require("../../assets/images/user/1.jpg")} alt="" />{"Cras justo odio"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">
                    <Media body className="rounded-circle" src={require("../../assets/images/user/1.jpg")} alt="" />{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript">
                    <Media body className="rounded-circle" src={require("../../assets/images/user/1.jpg")} alt="" />{"Morbi leo risus"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action disabled">
                    <Media body className="rounded-circle" src={require("../../assets/images/user/1.jpg")} alt="" />{"Vestibulum at eros"}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default List;