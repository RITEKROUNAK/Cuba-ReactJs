import React,{Fragment} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Col,Row,Card,CardHeader,CardBody} from "reactstrap";
import {GooglePieChart1,
        GooglePieChart2,
        GoogleDonutChart,
        GoogleRotatingPieChart1,
        GoogleRotatingPieChart2,
        GoogleSliceCharts,
        GoogleAreaChart,
        GoogleStackingChart,
        GoogleGhantChart,
        GoogleBasicbarChart,
        GoogleMaterialDesignChart,
        GoogleLineChart,
        GoogleComboChart,
        GoogleBarChart2,
        GoogleTreeChart} from "./googlechartData";

import { PieChart,DonutChart,RotatingPieChart,SliceVisibilityThreshold,AreaChart,GanttChart,LineChart,ComboChart,BarChart2,WordTree,StackingAreaChart,MaterialDesign,BasicBarChart } from "../../../constant";

const GoogleCharts = (props) => {
    return (
        <Fragment>
        <Breadcrumb parent="Charts" title="Google Chart"/>
        <Container fluid={true}>
            <Row>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{PieChart} <span className="digits">{"1"}</span></h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <div className="chart-overflow" id="pie-chart1">
                        <GooglePieChart1/>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{PieChart} <span className="digits">{"2"}</span></h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                        <GooglePieChart2/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{DonutChart}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleDonutChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{RotatingPieChart} <span className="digits">{"1"}</span></h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleRotatingPieChart1/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{RotatingPieChart} <span className="digits">{"2"}</span></h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleRotatingPieChart2/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{SliceVisibilityThreshold}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleSliceCharts/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{AreaChart}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleAreaChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{StackingAreaChart}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleStackingChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{BasicBarChart}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleBasicbarChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{MaterialDesign}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleMaterialDesignChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{GanttChart}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleGhantChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{LineChart}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleLineChart/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{ComboChart}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleComboChart/>
                  </CardBody>
                </Card>
              </Col>  

              <Col sm="12" xl="6 box-col-12 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{BarChart2}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                  <GoogleBarChart2/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6 box-col-12 xl-100">
                <Card>
                  <CardHeader>
                    <h5>{WordTree}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <GoogleTreeChart/>
                  </CardBody>
                </Card>
              </Col>
              
            </Row>
          </Container>
          </Fragment>
        );
}

export default GoogleCharts;