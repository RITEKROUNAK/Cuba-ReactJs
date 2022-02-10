import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import DatePicker from "react-datepicker";
import ApexCharts from 'react-apexcharts'
import ChartistChart from 'react-chartist';
import Knob from "knob";
import { Currentlysale, Marketvalue } from './chartsData/apex-charts-data'
import { smallchart1data, smallchart1option, smallchart2data, smallchart2option, smallchart3data, smallchart3option, smallchart4data, smallchart4option } from './chartsData/chartist-charts-data'
import { Send, Clock } from 'react-feather';
import {Dashboard,Summary,NewsUpdate,Appointment,Notification,MarketValue,Chat,New,Tomorrow,Yesterday,Daily,Weekly,Monthly,Store,Online,ReferralEarning,CashBalance,SalesForcasting,Purchase,Sales,SalesReturn,PurchaseRet,PurchaseOrderValue,ProductOrderValue,Pending,Yearly,Hot,Today,VenterLoren,Done,JohnLoren,Year,Month,Day,RightNow} from '../../constant'


const Default = (props) => {

  const [daytimes,setDayTimes] = useState()
  const today = new Date()
  const curHr = today.getHours()
  const curMi = today.getMinutes()
  const [meridiem,setMeridiem] = useState("AM")
  // eslint-disable-next-line
  const [date, setDate] = useState({ date: new Date() });
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setDate(date)
  };

  useEffect(() => {
 
    if (curHr < 12) {
      setDayTimes('Good Morning')
    }else if (curHr < 18) {
      setDayTimes('Good Afternoon')
    }else {
      setDayTimes('Good Evening')
    }

    if(curHr >= 12){
     setMeridiem('PM')
    }else{
      setMeridiem('AM')
    }
    
    var ordervalue1 = Knob({
      value: 60,
      angleOffset: 0,
      thickness: 0.3,
      width: 65,
      fgColor: "#7366ff",
      readOnly: false,
      dynamicDraw: true,
      tickColorizeValues: true,
      bgColor: '#eef5fb',
      lineCap: 'round',
      displayPrevious: false
    })
    document.getElementById('ordervalue1').appendChild(ordervalue1);

    var ordervalue2 = Knob({
      value: 60,
      angleOffset: 0,
      thickness: 0.3,
      fgColor: "#7366ff",
      readOnly: false,
      width: 65,
      dynamicDraw: true,
      lineCap: 'round',
      displayPrevious: false
    })
    document.getElementById('ordervalue2').appendChild(ordervalue2);

    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col xl="4 xl-50" lg="12" className="morning-sec box-col-12">
            <Card className="o-hidden profile-greeting">
              <CardBody>
                <div className="media">
                  <div className="badge-groups w-100">
                    <div className="badge f-12">
                      <Clock style={{width:"16px" ,height:"16px"}} className="mr-1"/>
                      <span id="txt">{curHr}:{curMi < 10 ? "0"+curMi :curMi} {meridiem}</span>
                    </div>
                    <div className="badge f-12"><i className="fa fa-spin fa-cog f-14"></i></div>
                  </div>
                </div>
                <div className="greeting-user text-center">
                  <div className="profile-vector"><img className="img-fluid" src={require("../../assets/images/dashboard/welcome.png")} alt="" /></div>
                  <h4 className="f-w-600"><span id="greeting">{daytimes}</span> <span className="right-circle"><i className="fa fa-check-circle f-14 middle"></i></span></h4>
                  <p><span> {"Today's earrning is $405 & your sales increase rate is 3.7 over the last 24 hours"}</span></p>
                  <div className="whatsnew-btn"><a className="btn btn-primary" href="#javascript">{"Whats New !"}</a></div>
                  <div className="left-icon"><i className="fa fa-bell"> </i></div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="8 xl-100" className="dashboard-sec box-col-12">
            <Card className="earning-card">
              <CardBody className="p-0">
                <Row className="m-0">
                  <Col xl="3" className="earning-content p-0">
                    <Row className="m-0 chart-left">
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{Dashboard}</h5>
                        <p className="font-roboto">{"Overview of last month"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"$4055.56"} </h5>
                        <p className="font-roboto">{"This Month Earning"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"$1004.11"}</h5>
                        <p className="font-roboto">{"This Month Profit"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"90%"}</h5>
                        <p className="font-roboto">{"This Month Sale"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left-btn"><a className="btn btn-gradient" href="#javascript">{Summary}</a></Col>
                    </Row>
                  </Col>
                  <Col xl="9" className="p-0">
                    <div className="chart-right">
                      <Row className="m-0 p-tb">
                        <Col xl="8" md="8" sm="8" className="col-12 p-0">
                          <div className="inner-top-left">
                            <ul className="d-flex list-unstyled">
                              <li>{Daily}</li>
                              <li className="active">{Weekly}</li>
                              <li>{Monthly}</li>
                              <li>{Yearly}</li>
                            </ul>
                          </div>
                        </Col>
                        <Col xl="4" md="4" sm="4" className="col-12 p-0 justify-content-end">
                          <div className="inner-top-right">
                            <ul className="d-flex list-unstyled justify-content-end">
                              <li>{Online}</li>
                              <li>{Store}</li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl="12">
                          <CardBody className="p-0">
                            <div className="current-sale-container">
                              <ApexCharts id="chart-currently" options={Currentlysale.options} series={Currentlysale.series} type='area' height={240} />
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </div>
                    <Row className="border-top m-0">
                      <Col xl="4" md="6" sm="6" className="pl-0">
                        <div className="media p-0">
                          <div className="media-left"><i className="icofont icofont-crown"></i></div>
                          <div className="media-body">
                            <h6>{ReferralEarning}</h6>
                            <p>{"$5,000.20"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="6" sm="6">
                        <div className="media p-0">
                          <div className="media-left bg-secondary"><i className="icofont icofont-heart-alt"></i></div>
                          <div className="media-body">
                            <h6>{CashBalance}</h6>
                            <p>{"$2,657.21"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="12" className="pr-0">
                        <div className="media p-0">
                          <div className="media-left"><i className="icofont icofont-cur-dollar"></i></div>
                          <div className="media-body">
                            <h6>{SalesForcasting}</h6>
                            <p>{"$9,478.50"}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="9 xl-100" className="chart_data_left box-col-12">
            <Card>
              <CardBody className="p-0">
                <Row className="m-0 chart-main">
                  <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
                    <div className="media align-items-center">
                      <div className="hospital-small-chart">
                        <div className="small-bar">
                          <ChartistChart
                            className="small-chart flot-chart-container"
                            data={smallchart1data}
                            options={smallchart1option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="right-chart-content">
                          <h4>{"1001"}</h4><span>{Purchase} </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
                    <div className="media align-items-center">
                      <div className="hospital-small-chart">
                        <div className="small-bar">
                          <ChartistChart
                            className="small-chart1 flot-chart-container"
                            data={smallchart2data}
                            options={smallchart2option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="right-chart-content">
                          <h4>{"1005"}</h4><span>{Sales}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
                    <div className="media align-items-center">
                      <div className="hospital-small-chart">
                        <div className="small-bar">
                          <ChartistChart
                            className="small-chart2 flot-chart-container"
                            data={smallchart3data}
                            options={smallchart3option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="right-chart-content">
                          <h4>{"100"}</h4><span>{SalesReturn}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
                    <div className="media border-none align-items-center">
                      <div className="hospital-small-chart">
                        <div className="small-bar">
                          <ChartistChart
                            className="small-chart3 flot-chart-container"
                            data={smallchart4data}
                            options={smallchart4option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="right-chart-content">
                          <h4>{"101"}</h4><span>{PurchaseRet}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3 xl-50" className="chart_data_right box-col-12">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>{"$95,900"}<span className="new-box">{Hot}</span></h4><span>{PurchaseOrderValue}</span>
                  </div>
                  <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue1"></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3 xl-50" className="chart_data_right second d-none">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>{"$95,000"}<span className="new-box">{New}</span></h4><span>{ProductOrderValue}</span>
                  </div>
                  <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue2"></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4 xl-50" className="news box-col-6">
            <Card>
              <CardHeader>
                <div className="header-top">
                  <h5 className="m-0">{NewsUpdate}</h5>
                  <div className="card-header-right-icon">
                    <select className="button btn btn-primary">
                      <option>{Today}</option>
                      <option>{Tomorrow}</option>
                      <option>{Yesterday}</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="news-update">
                  <h6>{"36% off For pixel lights Couslations Types."}</h6><span>{"Lorem Ipsum is simply dummy..."}</span>
                </div>
                <div className="news-update">
                  <h6>{"We are produce new product this"}</h6><span> {"Lorem Ipsum is simply text of the printing... "}</span>
                </div>
                <div className="news-update">
                  <h6>{"50% off For COVID Couslations Types."}</h6><span>{"Lorem Ipsum is simply dummy..."}</span>
                </div>
              </CardBody>
              <div className="card-footer">
                <div className="bottom-btn"><a href="#javascript">{"More..."}</a></div>
              </div>
            </Card>
          </Col>
          <Col xl="4 xl-50" className="appointment-sec box-col-6">
            <Row>
              <Col xl="12" className="appointment">
                <Card>
                  <CardHeader className="card-no-border">
                    <div className="header-top">
                          <h5 className="m-0">{Appointment}</h5>
                      <div className="card-header-right-icon">
                        <select className="button btn btn-primary">
                          <option>{Today}</option>
                          <option>{Tomorrow}</option>
                          <option>{Yesterday}</option>
                        </select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="appointment-table table-responsive">
                      <table className="table table-bordernone">
                        <tbody>
                          <tr>
                            <td><img className="img-fluid img-40 rounded-circle mb-3" src={require("../../assets/images/appointment/app-ent.jpg")} alt="" />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box"><span className="d-block">{VenterLoren}</span><span className="font-roboto">Now</span></td>
                            <td>
                              <p className="m-0 font-primary">{"28 Sept"}</p>
                            </td>
                            <td className="text-right">
                              <div className="button btn btn-primary">{Done}<i className="fa fa-check-circle ml-2"></i></div>
                            </td>
                          </tr>
                          <tr>
                            <td><img className="img-fluid img-40 rounded-circle" src={require("../../assets/images/appointment/app-ent.jpg")} alt="" />
                              <div className="status-circle bg-primary"></div>
                            </td>
                            <td className="img-content-box"><span className="d-block">{JohnLoren}</span><span className="font-roboto">{"11:00"}</span></td>
                            <td>
                              <p className="m-0 font-primary">{"22 Sept"}</p>
                            </td>
                            <td className="text-right">
                              <div className="button btn btn-danger">{Pending}<i className="fa fa-check-circle ml-2"></i></div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="12" className="alert-sec">
                <Card className="bg-img">
                  <CardHeader>
                    <div className="header-top">
                      <h5 className="m-0">{"Alert"}  </h5>
                      <div className="dot-right-icon"><i className="fa fa-ellipsis-h"></i></div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="body-bottom">
                      <h6>  {"10% off For drama lights Couslations..."}</h6><span className="font-roboto">{"Lorem Ipsum is simply dummy...It is a long established fact that a reader will be distracted by "} </span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="4 xl-50" className="notification box-col-6">
            <Card>
              <CardHeader className="card-no-border">
                <div className="header-top">
                  <h5 className="m-0">{Notification}</h5>
                  <div className="card-header-right-icon">
                    <select className="button btn btn-primary">
                      <option>{Today}</option>
                      <option>{Tomorrow}</option>
                      <option>{Yesterday}</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <div className="media">
                  <div className="media-body">
                    <p>{"20-04-2020"} <span>{"10:10"}</span></p>
                    <h6>{"Updated Product"}<span className="dot-notification"></span></h6><span>{"Quisque a consequat ante sit amet magna..."}</span>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <p>{"20-04-2020"}<span className="pl-1">{Today}</span><span className="badge badge-secondary">{New}</span></p>
                    <h6>{"Tello just like your product"}<span className="dot-notification"></span></h6><span>{"Quisque a consequat ante sit amet magna... "}</span>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <div className="d-flex mb-3">
                      <div className="inner-img"><img className="img-fluid" src={require("../../assets/images/notification/1.jpg")} alt="Product-1" /></div>
                      <div className="inner-img"><img className="img-fluid" src={require("../../assets/images/notification/2.jpg")} alt="Product-2" /></div>
                    </div><span className="mt-3">{"Quisque a consequat ante sit amet magna..."}</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4 xl-50" className="appointment box-col-6">
            <Card>
              <CardHeader>
                <div className="header-top">
                  <h5 className="m-0">{MarketValue}</h5>
                  <div className="card-header-right-icon">
                    <select className="button btn btn-primary">
                      <option>{Year}</option>
                      <option>{Month}</option>
                      <option>{Day}</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="radar-chart">
                  <ApexCharts id="marketchart" options={Marketvalue.options} series={Marketvalue.series} type='radar' height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4 xl-100" className="chat-sec box-col-6">
            <Card className="chat-default">
              <CardHeader className="card-no-border">
                <div className="media media-dashboard">
                  <div className="media-body">
                    <h5 className="mb-0">{Chat}</h5>
                  </div>
                  <div className="icon-box"><i className="fa fa-ellipsis-h"></i></div>
                </div>
              </CardHeader>
              <CardBody className="chat-box">
                <div className="chat">
                  <div className="media left-side-chat">
                    <div className="media-body d-flex">
                      <div className="img-profile"> <img className="img-fluid" src={require("../../assets/images/User.jpg")} alt="Profile" /></div>
                      <div className="main-chat">
                        <div className="message-main"><span className="mb-0">{"Hi deo, Please send me link."}</span></div>
                        <div className="sub-message message-main"><span className="mb-0">{RightNow}</span></div>
                      </div>
                    </div>
                    <p className="f-w-400">{"7:28 PM"}</p>
                  </div>
                  <div className="media right-side-chat">
                    <p className="f-w-400">{"7:28 PM"}</p>
                    <div className="media-body text-right">
                      <div className="message-main pull-right"><span className="mb-0 text-left">{"How can do for you"}</span>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="media left-side-chat">
                    <div className="media-body d-flex">
                      <div className="img-profile"> <img className="img-fluid" src={require("../../assets/images/User.jpg")} alt="Profile" /></div>
                      <div className="main-chat">
                        <div className="sub-message message-main mt-0"><span>{"It's argenty"}</span></div>
                      </div>
                    </div>
                    <p className="f-w-400">{"7:28 PM"}</p>
                  </div>
                  <div className="media right-side-chat">
                    <div className="media-body text-right">
                      <div className="message-main pull-right"><span className="loader-span mb-0 text-left" id="wave"><span className="dot"></span><span className="dot"></span><span className="dot"></span></span></div>
                    </div>
                  </div>
                  <div className="input-group">
                    <input className="form-control" id="mail" type="text" placeholder="Type Your Message..." name="text" />
                    <div className="send-msg"><Send /></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4 xl-50" lg="12" className="calendar-sec box-col-6">
            <Card className="gradient-primary o-hidden">
              <CardBody>
                <div className="default-datepicker">
                  <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    inline
                  />
                </div><span className="default-dots-stay overview-dots full-width-dots"><span className="dots-group"><span className="dots dots1"></span><span className="dots dots2 dot-small"></span><span className="dots dots3 dot-small"></span><span className="dots dots4 dot-medium"></span><span className="dots dots5 dot-small"></span><span className="dots dots6 dot-small"></span><span className="dots dots7 dot-small-semi"></span><span className="dots dots8 dot-small-semi"></span><span className="dots dots9 dot-small">                </span></span></span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Default;