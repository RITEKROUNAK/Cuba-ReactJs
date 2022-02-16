import React,{Fragment} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Radar, Line, Bar, Doughnut, Polar } from 'react-chartjs-2';
import { doughnutData, doughnutOption,barChartData, barChartOptions ,lineChartData,lineChartOptions,polarOption,polarData, lineChart2Data,lineChart2option ,data} from './chartsData';
import {Container,Row,Col,Card,CardHeader,CardBody} from "reactstrap";
import {BarChart,LineChart,LineChart2,DoughnutChart,PolarChart,RadarChart} from "../../../constant";

const Charts = (props) => {
    const datasetKeyProvider = () =>{
      return Math.random();
    }
    return (
        <Fragment>
        <Breadcrumb parent="Charts" title="ChartJS Chart"/>
        <Container fluid={true}>
        <Row>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{BarChart}</h5>
              </CardHeader>
              <CardBody className="chart-block">
                  <Bar data={barChartData} options={barChartOptions} width={778} height={400} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{LineChart}</h5>
              </CardHeader>
              <CardBody className="chart-block">
                 <Line data={lineChartData} options={lineChartOptions}  datasetKeyProvider={datasetKeyProvider} width={778} height={400} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{RadarChart}</h5>
              </CardHeader>
              <CardBody className="chart-block chart-vertical-center">
                  <Radar data={data}  width={778} height={400} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{LineChart2}</h5>
              </CardHeader>
              <CardBody className="chart-block">
                  <Line data={lineChart2Data} options={lineChart2option}  datasetKeyProvider={datasetKeyProvider} width={778} height={400} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{DoughnutChart}</h5>
              </CardHeader>
              <CardBody className="chart-block">
                 <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
              </CardBody>
            </Card>
          </Col>
          
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{PolarChart}</h5>
              </CardHeader>
              <CardBody className="chart-block chart-vertical-center">
                 <Polar data={polarData} options={polarOption} width={778} height={400} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
}

export default Charts;