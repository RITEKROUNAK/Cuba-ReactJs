import React,{Fragment,useState,useEffect} from 'react'
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import {lineChart1, lineChart2, lineChart3, barChart, radialChart, radialChartLive, progress1, progress2, progress3, progress4, progress5, columnChart, browserUses, product, turnOver, monthlySale, uses} from './charts-data'
import Chart from 'react-apexcharts'
import {ShoppingBag, TrendingUp, Navigation} from 'react-feather'
import {Sparklines,SparklinesLine,SparklinesSpots} from 'react-sparklines'
import {SALE,PRODUCTS,PROJECTS,MarketinExpenses,TotalEarning,SkillStatus,OrderStatus,LiveProducts,Turnover,MonthlySales,Uses,BrowserUses,Finance} from '../../../constant'
const primary = localStorage.getItem('default_color')

const Charts = () =>  {

  const boxMullerRandom = () => {
    let phase = false,
        x1, x2, w;

    return (function () {
    // eslint-disable-next-line
        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

    const [chartData,setChartData] = useState([]);

    useEffect(() => {
        let interval = setInterval(() => {
            setChartData(chartData.concat([boxMullerRandom()]))
        }, 1000);
        return () => clearInterval(interval);
    },[chartData])

    return (
      <Fragment>
        <Breadcrumb parent="Widgets" title="Chart" />
        <Container fluid={true}>
        <Row>
          <Col xl="4" md="12" className="box-col-12">
            <Card className="o-hidden">
              <div className="chart-widget-top">
                <Row className="card-body">
                    <Col xs="8">
                    <h6 className="f-w-600 font-primary">{SALE}</h6><span className="num"><span className="counter">{"90"}</span>{"%"}<i className="icon-angle-up f-12 ml-1"></i></span>
                    </Col>
                    <Col xs="4" className="text-right">
                    <h4 className="num total-value">{"$"}<span className="counter">{"3654"}</span>{".00"}</h4>
                    </Col>                  
                 </Row>
                <div>
                  <div id="chart-widget1">
                  <Chart options={lineChart1.options} series={lineChart1.series} height="170" type="area" />                  
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xl="4" md="12" className="box-col-12">
            <Card className="o-hidden">
              <div className="chart-widget-top">
                <Row className="card-body">
                      <Col xs="8">
                        <h6 className="f-w-600 font-success">{PROJECTS}</h6><span className="num"><span className="counter">{"30"}</span>{"%"}<i className="icon-angle-up f-12 ml-1"></i></span>
                      </Col>
                      <Col xs="4" className="text-right">
                        <h4 className="num total-value"><span className="counter">{"12569"}</span></h4>
                      </Col>
                </Row>
                <div>
                  <div id="chart-widget2">
                    <Chart className="flot-chart-placeholder" options={lineChart2.options} series={lineChart2.series} height="170" type="area" />                  
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xl="4" md="12" className="box-col-12">
             <Card className="o-hidden">
              <div className="chart-widget-top">
                <Row className="card-body">
                    <Col xs="8">
                    <h6 className="f-w-600 font-success">{PRODUCTS}</h6><span className="num"><span className="counter">{"68"}</span>{"%"}<i className="icon-angle-up f-12 ml-1"></i></span>
                    </Col>
                    <Col xs="4" className="text-right">
                    <h4 className="num total-value"><span className="counter">{"93"}</span>{"M"}</h4>
                    </Col>                  
                 </Row>
                <div>
                  <div id="chart-widget3">
                  <Chart className="flot-chart-placeholder" options={lineChart3.options} series={lineChart3.series} height="170" type="area" />                  
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col xl="7" md="12" className="box-col-12">
            <Card className="o-hidden">
                <CardHeader>
                <h5>{MarketinExpenses}</h5>
                </CardHeader>
                <div className="bar-chart-widget">
                <CardBody className="bottom-content">
                    <Row className="row">
                      <Col xs="12">
                          <div id="chart-widget4">
                          <Chart options={barChart.options} series={barChart.series} height="350" type="bar" />                  
                          </div>
                      </Col>
                    </Row>
                </CardBody>
                </div>
            </Card>
            </Col>
        <Col xl="5" md="12" className="box-col-12">
        <Card className="o-hidden">
            <CardHeader>
            <h5>{TotalEarning}</h5>
            </CardHeader>
            <div className="bar-chart-widget">
            <div className="top-content bg-primary"></div>
            <div className="bottom-content card-body">
                <Row>
                <Col xs="12">
                    <div id="chart-widget5">
                    <Chart options={radialChart.options} series={radialChart.series} height="360" type="radialBar" />                  
                    </div>
                </Col>
                </Row>
                <Row className="text-center f-w-600">
                <Col xs="4" className="b-r-light">
                    <div><span className="num font-primary">{"12%"}<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{"Year"}</span>
                    <h4 className="num m-0"><span className="counter color-bottom">{"3659"}</span>{"M"}</h4>
                    </div>
                </Col>
                <Col xs="4" className="b-r-light">
                    <div><span className="num font-primary">{"15%"}<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{"Month"}</span>
                    <h4 className="num m-0"><span className="counter color-bottom">{"698"}</span>{"M"}</h4>
                    </div>
                </Col>
                <Col xs="4">
                    <div><span className="num font-primary">{"34%"}<i className="icon-angle-up f-12 ml-1"></i></span><span className="text-muted mt-2 mb-2 block-bottom">{"Today"}</span>
                    <h4 className="num m-0"><span className="counter color-bottom">{"9361"}</span>{"M"}</h4>
                    </div>
                </Col>
                </Row>
            </div>
            </div>
        </Card>
        </Col>
        <Col xl="4" lg="12" className="box-col-6 xl-50">
            <Card>
                <CardHeader>
                <Row>
                    <Col xs="9">
                    <h5>{SkillStatus}</h5>
                    </Col>
                    <Col xs="3" className="text-right"><TrendingUp className="text-muted" /></Col>
                </Row>
                </CardHeader>
                <CardBody>
                <div className="chart-container">
                    <div id="circlechart">
                    <Chart options={radialChartLive.options} series={radialChartLive.series} height="350" type="radialBar" />                  
                    </div>
                </div>
                </CardBody>
            </Card>
            </Col>
        <Col xl="8" lg="12" className="box-col-6 xl-50">
            <Card>
                <CardHeader>
                <Row>
                    <Col xs="9">
                    <h5>{OrderStatus}</h5>
                    </Col>
                    <Col xs="3" className="text-right"><ShoppingBag className="text-muted" /></Col>
                </Row>
                </CardHeader>
                <CardBody>
                <div className="chart-container">
                    <div id="progress1">
                    <Chart options={progress1.options} series={progress1.series} height="70" type="bar" />                  
                    </div>
                    <div id="progress2">
                    <Chart options={progress2.options} series={progress2.series} height="70" type="bar" /> 
                    </div>
                    <div id="progress3">
                    <Chart options={progress3.options} series={progress3.series} height="70" type="bar" /> 
                    </div>
                    <div id="progress4">
                    <Chart options={progress4.options} series={progress4.series} height="70" type="bar" /> 
                    </div>
                    <div id="progress5">
                    <Chart options={progress5.options} series={progress5.series} height="70" type="bar" /> 
                    </div>
                </div>
                </CardBody>
            </Card>
            </Col>
        </Row>
        <Row>
            <Col md="7" className="xl-50">
              <div className="small-chart-widget chart-widgets-small">
                <Card>
                  <CardHeader>
                    <h5>{LiveProducts}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-container">
                      <Row>
                        <Col xs="12">
                          <div id="chart-widget6">
                          <Chart options={product.options} series={product.series} height="320" type="line" /> 
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col md="5" className="xl-50">
              <div className="small-chart-widget chart-widgets-small">
                <Card>
                  <CardHeader>
                    <h5>{Turnover}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-container">
                      <Row>
                        <Col xs="12">
                          <div id="chart-widget7">
                          <Chart options={turnOver.options} series={turnOver.series} height="320" type="area" />                  
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col md="5" className="xl-50">
              <div className="small-chart-widget chart-widgets-small">
                <Card>
                  <CardHeader>
                    <h5>{MonthlySales}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-container">
                      <Row>
                        <Col xs="12">
                          <div id="chart-widget8">
                          <Chart options={monthlySale.options} series={monthlySale.series} height="300" type="radar" /> 
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col md="7" className="xl-50">
                <div className="small-chart-widget chart-widgets-small">
                  <Card>
                    <CardHeader>
                      <h5>{Uses}</h5>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-container">
                        <Row>
                          <Col xs="12">
                            <div id="chart-widget9">
                            <Chart options={uses.options} series={uses.series} height="320" type="bubble" /> 
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
        </Row>
        <Row>
        <Col sm="12" className="box-col-12">
        <div className="donut-chart-widget">
            <Card>
            <CardHeader>
                <h5>{BrowserUses}</h5>
            </CardHeader>
            <CardBody>
                <div id="chart-widget13">
                <Chart options={browserUses.options} series={browserUses.series} height="500" type="candlestick" />                  
                </div>
            </CardBody>
            </Card>
        </div>
        </Col>
        </Row>
        <Row>
            <Col xl="5" lg="12" className="box-col-6">
            <Card>
                <CardHeader>
                <Row>
                    <Col xs="9">
                    <h5>{Finance}</h5>
                    </Col>
                    <Col xs="3" className="text-right"><Navigation className="text-muted" /></Col>
                </Row>
                </CardHeader>
                <CardBody>
                <div className="chart-container">
                    <div id="columnchart">
                    <Chart options={columnChart.options} series={columnChart.series} height="350" type="bar" />                  
                    </div>
                </div>
                </CardBody>
            </Card>
            </Col>
            <Col xl="7" lg="12" className="box-col-6">
                <Card>
                    <CardHeader>
                    <Row>
                        <Col xs="9">
                        <h5>{OrderStatus}</h5>
                        </Col>
                        <Col xs="3" className="text-right"><ShoppingBag className="text-muted"/></Col>
                    </Row>
                    </CardHeader>
                    <CardBody>
                    <div className="chart-container">
                        <div id="linechart">
                        <Sparklines data={chartData} limit={20} height={100}>
                            <SparklinesLine  color={primary} style={{ strokeWidth: 0.4 }} />
                            <SparklinesSpots />
                        </Sparklines>
                        </div>
                    </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
       
        </Container>
        </Fragment>
    )
}
export default Charts
