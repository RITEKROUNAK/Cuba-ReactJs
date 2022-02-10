import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import {Examples,LargerShadow,SmallShadow,NoShadow,RegularShadow} from '../../constant'
const Shadow = (props) => {
    return (
        <Fragment>
        <Breadcrumb parent="Ui Kits" title="Box Shadow"/>
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card className="box-shadow-title">
              <CardHeader>
                <h5>{Examples}</h5><span>{"While shadows on components are disabled by default in Bootstrap and can be enabled via"} <code>{"$enable-shadows"}</code>, {"you can also quickly add or remove a shadow with our"} <code>{"box-shadow"}</code> {"utility classes. Includes support for"} <code>{".shadow-none"}</code> {"and three default sizes (which have associated variables to match)."}</span>
              </CardHeader>
              <CardBody className="row">
                <Col className="col-12">
                  <h6 className="sub-title mt-0">{LargerShadow}</h6>
                </Col>
                <Col sm="4">
                  <div className="shadow-lg p-25 shadow-showcase text-center">
                    <h5 className="m-0 f-18">{LargerShadow}</h5>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="shadow-lg p-25 shadow-showcase text-center">
                    <h5 className="m-0 f-18">{LargerShadow}</h5>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="shadow-lg p-25 shadow-showcase text-center">
                    <h5 className="m-0 f-18">{LargerShadow}</h5>
                  </div>
                </Col>
                <Col className="col-12">
                  <h6 className="sub-title">{RegularShadow}</h6>
                </Col>
                <Col sm="4">
                  <div className="shadow shadow-showcase p-25 text-center">
                    <h5 className="m-0 f-18">{RegularShadow}</h5>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="shadow shadow-showcase p-25 text-center">
                    <h5 className="m-0 f-18">{RegularShadow}</h5>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="shadow shadow-showcase p-25 text-center">
                    <h5 className="m-0 f-18">{RegularShadow}</h5>
                  </div>
                </Col>
                <Col className="col-12">
                  <h6 className="sub-title">{SmallShadow}</h6>
                </Col>
                <Col sm="4">
                  <div className="shadow-sm shadow-showcase p-25 text-center">
                    <h5 className="m-0 f-18">{SmallShadow}</h5>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="shadow-sm shadow-showcase p-25 text-center">
                    <h5 className="m-0 f-18">{SmallShadow}</h5>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="shadow-sm shadow-showcase p-25 text-center">
                    <h5 className="m-0 f-18">{SmallShadow}</h5>
                  </div>
                </Col>
                <Col className="col-12">
                  <h6 className="sub-title">{NoShadow}</h6>
                </Col>
                <Col sm="4">
                  <div className="shadow-none shadow-showcase p-25 text-center">
                    <h5 className="m-0 f-18">{NoShadow}</h5>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="shadow-none shadow-showcase p-25 text-center">
                    <h5 className="m-0 f-18">{NoShadow}</h5>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="shadow-sm shadow-showcase shadow-none p-25 text-center">
                    <h5 className="m-0 f-18">{NoShadow}</h5>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
}

export default Shadow;