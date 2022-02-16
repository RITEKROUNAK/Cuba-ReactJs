import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Progress } from 'reactstrap'
import {BasicProgressBars,SmallProgressBars,LargeProgressBars,CustomHeightProgressBars,ProgressBarsAnimated,ProgressBarsStriped,MultipleBars,ProgressBarsStates} from '../../constant'
const Progressbar = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Ui Kits" title="Progress" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{BasicProgressBars}</h5><span>{"Progress components are built with two HTML elements, some CSS to set the width, and a few attributes."}</span>
              </CardHeader>
              <CardBody className="card-body progress-showcase row">
                <Col>
                  <Progress value="0" />
                  <Progress color="primary" value="25" />
                  <Progress color="secondary" value="50" />
                  <Progress color="success" value="75" />
                  <Progress color="info" value="100" />
                </Col>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{SmallProgressBars}</h5><span>{"Use"} <code> {".sm-progress-bar"}</code>{"class to change progress size to small:"}</span>
              </CardHeader>
              <CardBody className="card-body progress-showcase row">
                <Col>
                  <Progress value="25" color="primary" className="sm-progress-bar" />
                  <Progress color="secondary" value="50" className="sm-progress-bar" />
                  <Progress color="success" value="75" className="sm-progress-bar" />
                  <Progress color="info" value="100" className="sm-progress-bar" />
                </Col>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{LargeProgressBars}</h5><span>{"Use"} <code> {".lg-progress-bar"}</code>{"class to change progress size to small:"}</span>
              </CardHeader>
              <CardBody className="card-body progress-showcase row">
                <Col>
                  <Progress color="primary" value="25" className="lg-progress-bar" />
                  <Progress color="secondary" value="50" className="lg-progress-bar" />
                  <Progress color="success" value="75" className="lg-progress-bar" />
                  <Progress color="info" value="100" className="lg-progress-bar" />
                </Col>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
              <h5>{CustomHeightProgressBars}</h5><span>{"Set a height value on the"} <code>{".progress-bar"}</code>{", so if you change that value the outer"} <code>{".progress"} </code> {"will automatically resize accordingly."}</span>
              </CardHeader>
              <CardBody className="card-body progress-showcase row">
                <Col>
                  <Progress color="primary" value="25" className="xs-progress-bar" />
                  <Progress color="secondary" value="50" className="sm-progress-bar" />
                  <Progress color="success" value="75" className="md-progress-bar" />
                  <Progress color="info" value="100" className="lg-progress-bar" />
                </Col>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{ProgressBarsStates}</h5><span>{"Use state utility classes to change the appearance of individual progress bars."}</span>
              </CardHeader>
              <CardBody className="card-body progress-showcase row">
                <Col>
                  <Progress color="primary" value="25" />
                  <Progress color="secondary" value="50" />
                  <Progress color="success" value="75" />
                  <Progress color="info" value="100" />
                </Col>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{MultipleBars}</h5><span>{"Include multiple progress bars in a progress component if you need."}</span>
              </CardHeader>
              <CardBody className="card-body progress-showcase row">
                <Col>
                  <Progress multi>
                    <Progress bar color="primary" value="30" />
                    <Progress bar color="secondary" value="20" />
                    <Progress bar color="success" value="15" />
                  </Progress>
                  <Progress multi>
                    <Progress bar color="primary" value="10" />
                    <Progress bar color="secondary" value="10" />
                    <Progress bar color="success" value="10" />
                    <Progress bar color="info" value="10" />
                    <Progress bar color="warning" value="10" />
                    <Progress bar color="danger" value="10" />
                    <Progress bar color="primary" value="10" />
                    <Progress bar color="light" value="10" />
                  </Progress>
                </Col>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{ProgressBarsStriped}</h5><span>{"Add"} <code>{".progress-bar-striped"}</code> {"to any"} <code>{".progress-bar"}</code> {"to apply a stripe via CSS gradient over the progress bar’s background color."}</span>
              </CardHeader>
              <CardBody className="card-body progress-showcase row">
                <Col>
                  <Progress striped color="primary" value="10" />
                  <Progress striped color="secondary" value="25" />
                  <Progress striped color="success" value="50" />
                  <Progress striped color="info" value="75" />
                </Col>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{ProgressBarsAnimated}</h5><span>{"The striped gradient can also be animated. Add"} <code>{".progress-bar-animated"}</code> {"to"} <code>{".progress-bar"} </code> {"to animate the stripes right to left via CSS3 animations."}</span>
              </CardHeader>
              <CardBody className="card-body progress-showcase row">
                <Col>
                  <Progress animated color="primary" value="10" />
                  <Progress animated color="secondary" value="25" />
                  <Progress animated color="success" value="50" />
                  <Progress animated color="info" value="75" />
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Progressbar;