import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import Chart from 'react-apexcharts'
import {
  areaSpaline,
  apexAreaChart,
  apexColumnChartsone,
  apexPieChart,
  apex3DbubbleCharts,
  apexRadialBarChart,
  apexCandleStickCharts,
  apexRadarPolygonfillCharts,
  apexSteplineChart,
  apexLineWithAnnotationCharts,
  apexDonutCharts,
  apexMixedCharts,
  apexBarChart
} from "./apexData";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import {BasicAreaChart,AreaSpalineChart,BarChart,ColumnChart,PieChart,DonutChart,MixedChart,CandlestickChart,RadarChart,RadialBarChart,BubbleChart,SteplineChart} from "../../../constant";

const Apexcharts = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Charts" title="Apex Chart" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{BasicAreaChart} </h5>
              </CardHeader>
              <CardBody>
                <div id="basic-apex">
                  <Chart options={apexAreaChart.options} series={apexAreaChart.series} type="area" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{AreaSpalineChart} </h5>
              </CardHeader>
              <CardBody>
                <Chart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" />
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{BarChart}</h5>
              </CardHeader>
              <CardBody>
                <div id="basic-bar">
                  <Chart options={apexBarChart.options} series={apexBarChart.series} type="bar" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{ColumnChart} </h5>
              </CardHeader>
              <CardBody>
                <div id="column-chart">
                  <Chart options={apexColumnChartsone.options} series={apexColumnChartsone.series} type="bar" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{BubbleChart} </h5>
              </CardHeader>
              <CardBody>
                <div id="chart-bubble">
                  <Chart options={apex3DbubbleCharts.options} series={apex3DbubbleCharts.series} type="bubble" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{SteplineChart} </h5>
              </CardHeader>
              <CardBody>
                <div id="stepline">
                  <Chart options={apexSteplineChart.options} series={apexSteplineChart.series} type="line" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{ColumnChart}</h5>
              </CardHeader>
              <CardBody>
                <div id="annotationchart">
                  <Chart options={apexLineWithAnnotationCharts.options} series={apexLineWithAnnotationCharts.series} type="line" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{PieChart} </h5>
              </CardHeader>
              <CardBody className="apex-chart">
                <div id="piechart">
                  <Chart options={apexPieChart.options} series={apexPieChart.series} type="pie" width={380} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{DonutChart}</h5>
              </CardHeader>
              <CardBody className="apex-chart">
                <div id="donutchart">
                  <Chart options={apexDonutCharts.options} series={apexDonutCharts.series} type="donut" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{MixedChart}</h5>
              </CardHeader>
              <CardBody>
                <div id="mixedchart">
                  <Chart options={apexMixedCharts.options} series={apexMixedCharts.series} type="line" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{CandlestickChart} </h5>
              </CardHeader>
              <CardBody>
                <div id="candlestick">
                  <Chart options={apexCandleStickCharts.options} series={apexCandleStickCharts.series} type="candlestick" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{RadarChart} </h5>
              </CardHeader>
              <CardBody>
                <div id="radarchart">
                  <Chart options={apexRadarPolygonfillCharts.options} series={apexRadarPolygonfillCharts.series} type="radar" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{RadialBarChart}</h5>
              </CardHeader>
              <CardBody>
                <div id="circlechart">
                  <Chart options={apexRadialBarChart.options} series={apexRadialBarChart.series} type="radialBar" height={320} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Apexcharts;