import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, ListGroup, ListGroupItem } from 'reactstrap'
import {DefaultColor,Primary,secondary,Warning,Danger,Grey,Info,Success,Pink,Color} from "../../constant"
const Statecolor = (props) => {

  let color = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  let Listcolor = color.map((key) => <ListGroupItem key={key} as="li"><span></span></ListGroupItem>)

  return (
    <Fragment>
      <Breadcrumb parent="Ui Kits" title="State Color" />
      <Container fluid={true}>
        <Row>
          <Col className="col-sm-12">
            <Card>
              <CardHeader>
                <h5>{DefaultColor}</h5>
              </CardHeader>
              <CardBody>
                <div className="color-box">
                  <Button className="btn btn-square digits" color="primary">{"#7366ff"}</Button>
                  <Button className="btn btn-square digits" color="secondary">{"#f73164"}</Button>
                  <Button className="btn btn-square digits" color="success">{"#51bb25"}</Button>
                  <Button className="btn btn-square digits" color="info">{"#7a15f7"}</Button>
                  <Button className="btn btn-square digits" color="warning">{"#ff5f24"}</Button>
                  <Button className="btn btn-square digits" color="danger">{"#fd2e64"}</Button>
                  <Button className="btn btn-square digits" color="light">{"#e8ebf2"}</Button>
                  <Button className="btn btn-square digits" color="dark">{"#2c323f"}</Button>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{Color}</h5>
              </CardHeader>
              <CardBody>
                <Row className="bottom-color-space">
                  <Col lg="3" sm="6">
                    <h6 className="sub-title text-uppercase">{Primary}</h6>
                    <div className="primary-color">
                      <ListGroup as="ul" className="m-b-30">
                        {Listcolor}
                      </ListGroup>
                    </div>
                  </Col>
                  <Col lg="3" sm="6">
                    <h6 className="sub-title text-uppercase">{secondary}</h6>
                    <div className="secondary-color">
                      <ListGroup as="ul" className="m-b-30">
                        {Listcolor}
                      </ListGroup>
                    </div>
                  </Col>
                  <Col lg="3" sm="6">
                    <h6 className="sub-title text-uppercase">{Success}</h6>
                    <div className="success-color">
                      <ListGroup as="ul" className="m-b-30">
                        {Listcolor}
                      </ListGroup>
                    </div>
                  </Col>
                  <Col lg="3" sm="6">
                    <h6 className="sub-title text-uppercase">{Info}</h6>
                    <div className="info-color">
                      <ListGroup as="ul" className="m-b-30">
                        {Listcolor}
                      </ListGroup>
                    </div>
                  </Col>
                  <Col lg="3" sm="6">
                    <h6 className="sub-title text-uppercase">{Warning}</h6>
                    <div className="yellow-color">
                      <ListGroup as="ul" className="m-b-30">
                        {Listcolor}
                      </ListGroup>
                    </div>
                  </Col>
                  <Col lg="3" sm="6">
                    <h6 className="sub-title text-uppercase">{Danger}</h6>
                    <div className="red-color">
                      <ListGroup as="ul" className="m-b-30">
                        {Listcolor}
                      </ListGroup>
                    </div>
                  </Col>
                  <Col lg="3" sm="6">
                    <h6 className="sub-title text-uppercase">{Pink}</h6>
                    <div className="pink-color">
                      <ListGroup as="ul" className="m-b-30">
                        {Listcolor}
                      </ListGroup>
                    </div>
                  </Col>
                  <Col lg="3" sm="6">
                    <h6 className="sub-title text-uppercase">{Grey}</h6>
                    <div className="gray-color">
                      <ListGroup as="ul" className="m-b-30">
                        {Listcolor}
                      </ListGroup>
                    </div>
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

export default Statecolor;