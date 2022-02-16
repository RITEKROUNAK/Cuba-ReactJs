import React, { Fragment }  from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody,CardHeader,Alert } from 'reactstrap'
import {MultipleAlertWithDarkDismissing,MultipleAlertWithIcon,MultipleAlertWithLightDismissing,MultipleAlertWithIconOutline,MultipleAlertWithIconInverse} from './alertComponent'
import {Dismissing,AlertWithIcon,LightAlerts,LinkColor,OutlineAlerts,OutlineDarkAlerts,AlertWithIconInverse,AlertWithIconOutline,TextAsAction,AdditionalContent} from '../../../constant'

const Alerts  = (props) => {
    return (
            <Fragment>
            <Breadcrumb parent="Ui Kits" title="Alert"/>
            <Container fluid={true}>
            <Row>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{"Theme Color Alerts"}</h5><span>{"Theme color Archive just adding class"} <code>{".dark"}</code></span>
                  </CardHeader>
                  <CardBody className="card-body">
                    <Alert color="primary dark">
                      <p>{"This is a info alert—check it out!"}</p>
                    </Alert>
                    <Alert color="secondary dark">
                      <p>{"This is a light alert—check it out!"}</p>
                    </Alert>
                    <Alert color="success dark">
                      <p>{"This is a success alert—check it out!"}</p>
                    </Alert>
                    <Alert color="info dark">
                      <p>{"This is a danger alert—check it out!"}</p>
                    </Alert>
                    <Alert color="warning dark">
                      <p>{"This is a secondary alert—check it out!"}</p>
                    </Alert>
                    <Alert color="danger dark">
                      <p>{"This is a warning alert—check it out!"}</p>
                    </Alert>
                    <Alert color="light dark">
                      <p>{"This is a dark alert—check it out!"}</p>
                    </Alert>
                    <Alert color="dark dark">
                      <p>{"This is a dark alert—check it out!"}</p>
                    </Alert>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{"Link color in theme-color"}</h5><span>{"Use the"} <code>{".alert-link"}</code> {"utility class to quickly provide matching colored links within any alert"}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                    <Alert color="primary dark">
                      <p>{"This is a primary alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="secondary dark">
                      <p>{"This is a secondary alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="success dark">
                      <p>{"This is a success alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="info dark">
                      <p>{"This is a info alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="warning dark">
                      <p>{"This is a warning alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="danger dark">
                      <p>{"This is a danger alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="light dark">
                      <p>{"This is a light alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="dark dark">
                      <p>{"This is a light alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                  </CardBody>
                </Card>
              </Col>

              <Col sm="12" xl="6">
                <Card className="height-equal" style={{minHeight: '708px'}}>
                  <CardHeader>
                    <h5>{Dismissing}</h5><span>{"To animate alerts when dismissing them, be sure to add the .fade and .show classes."}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                   <MultipleAlertWithDarkDismissing/>
                  </CardBody>
                </Card>
              </Col>

               <Col sm="12" xl="6">
                <Card className="height-equal"  style={{minHeight: '708px'}}>
                  <CardHeader>
                    <h5>{AlertWithIcon}</h5><span>{"Just add Any icon before text"}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                   <MultipleAlertWithIcon/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{LightAlerts}</h5><span>{"Alerts are available for any length of text, as well as an optional dismiss button."}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                     <Alert color="primary">
                      <p>{"This is a info alert—check it out!"}</p>
                    </Alert>
                    <Alert color="secondary">
                      <p>{"This is a light alert—check it out!"}</p>
                    </Alert>
                    <Alert color="success">
                      <p>{"This is a success alert—check it out!"}</p>
                    </Alert>
                    <Alert color="info">
                      <p>{"This is a danger alert—check it out!"}</p>
                    </Alert>
                    <Alert color="warning">
                      <p>{"This is a secondary alert—check it out!"}</p>
                    </Alert>
                    <Alert color="danger">
                      <p>{"This is a warning alert—check it out!"}</p>
                    </Alert>
                    <Alert color="light">
                      <p>{"This is a dark alert—check it out!"}</p>
                    </Alert>
                    <Alert color="dark">
                      <p>{"This is a dark alert—check it out!"}</p>
                    </Alert>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{LinkColor}</h5><span>{"Use the"} <code>{".alert-link"}</code> {"utility class to quickly provide matching colored links within any alert"}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                     <Alert color="primary">
                      <p>{"This is a primary alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="secondary">
                      <p>{"This is a secondary alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="success">
                      <p>{"This is a success alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="info">
                      <p>{"This is a info alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="warning">
                      <p>{"This is a warning alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="danger">
                      <p>{"This is a danger alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="light">
                      <p>{"This is a light alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                    <Alert color="dark">
                      <p>{"This is a light alert with"} <a className="alert-link" href="#javascript">{"an example link"}</a>{".Click It"}</p>
                    </Alert>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card className="card height-equal"  style={{minHeight: '708px'}}>
                  <CardHeader>
                    <h5>{Dismissing}</h5><span>{"To animate alerts when dismissing them, be sure to add the .fade and .show classes."}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                    <MultipleAlertWithLightDismissing/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card className="card height-equal">
                  <CardHeader>
                    <h5>{OutlineAlerts}</h5><span>{"Outline Archive just adding class"} <code>{".outline"}</code></span>
                  </CardHeader>
                  <CardBody className="card-body">
                    <Alert color="primary outline">
                      <p>{"This is a info alert—check it out!"}</p>
                    </Alert>
                    <Alert color="secondary outline">
                      <p>{"This is a light alert—check it out!"}</p>
                    </Alert>
                    <Alert color="success outline">
                      <p>{"This is a success alert—check it out!"}</p>
                    </Alert>
                    <Alert color="info outline">
                      <p>{"This is a danger alert—check it out!"}</p>
                    </Alert>
                    <Alert color="warning outline">
                      <p>{"This is a secondary alert—check it out!"}</p>
                    </Alert>
                    <Alert color="danger outline">
                      <p>{"This is a warning alert—check it out!"}</p>
                    </Alert>
                    <Alert color="light outline">
                      <p>{"This is a dark alert—check it out!"}</p>
                    </Alert>
                    <Alert color="dark outline">
                      <p>{"This is a dark alert—check it out!"}</p>
                    </Alert>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card className="card height-equal" style={{minHeight: '708px'}}>
                  <CardHeader>
                    <h5>{OutlineDarkAlerts}</h5><span>{"Outline Archive just adding class"} <code>{".outline-2x"}</code></span>
                  </CardHeader>
                  <CardBody className="card-body">
                    <Alert color="primary outline-2x">
                      <p>{"This is a info alert—check it out!"}</p>
                    </Alert>
                    <Alert color="secondary outline-2x">
                      <p>{"This is a light alert—check it out!"}</p>
                    </Alert>
                    <Alert color="success outline-2x">
                      <p>{"This is a success alert—check it out!"}</p>
                    </Alert>
                    <Alert color="info outline-2x">
                      <p>{"This is a danger alert—check it out!"}</p>
                    </Alert>
                    <Alert color="warning outline-2x">
                      <p>{"This is a secondary alert—check it out!"}</p>
                    </Alert>
                    <Alert color="danger outline-2x">
                      <p>{"This is a warning alert—check it out!"}</p>
                    </Alert>
                    <Alert color="light outline-2x">
                      <p>{"This is a dark alert—check it out!"}</p>
                    </Alert>
                    <Alert color="dark outline-2x">
                      <p>{"This is a dark alert—check it out!"}</p>
                    </Alert>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card className="card height-equal"  style={{minHeight: '708px'}}>
                  <CardHeader>
                    <h5>{AlertWithIconOutline}</h5><span>{"Just add Any icon before text"}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                    <MultipleAlertWithIconOutline/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{AlertWithIconInverse}</h5><span>{"Use the"} <code>{".inverse"}</code> {"class to quickly provide matching colored links within any alert"}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                    <MultipleAlertWithIconInverse/>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>{TextAsAction}</h5><span>{"Use the"} <code>{".action-text"}</code> {"class to add dismiss text instead of icon"}</span>
                  </CardHeader>
                  <CardBody>
                    <Alert color="primary inverse alert-dismissible" ><i className="icon-timer"></i>
                     <p>{"Your time Over after"} <b>{"5"}</b> {"miniute"} <button className="close"><span className="bg-primary ">{"dismiss"}</span> </button></p>
                    </Alert>
                    <Alert color="secondary inverse alert-dismissible" ><i className="icon-heart"></i>
                     <p>{"Oh snap! Change a few things up and submit again."}
                     <button className="close"><span className="bg-secondary" >{"dismiss"}</span></button></p>
                    </Alert>
                    <Alert color="success inverse alert-dismissible" ><i className="icon-thumb-up alert-center"></i>
                    <p><b> {"Well done!"} </b>{"You successfully read this important alert message."}
                    <button className="close"><span className="bg-success" >{"dismiss"}</span></button></p>
                    </Alert>
                    <Alert color="info inverse alert-dismissible"><i className="icon-help-alt"></i>
                    <p><b>{"Welcome!"}</b> {"Start your day with some alerts."}
                    <button className="close"><span className="bg-info" >{"dismiss"}</span></button></p>
                    </Alert>
                    <Alert color="warning inverse alert-dismissible" ><i className="icon-bell"></i>
                    <p><b> {"Congratulation!"} </b>{"Your Product Added in Like List"}
                    <button className="close"><span className="bg-warning" >{"dismiss"}</span></button></p>
                    </Alert>
                    <Alert color="danger inverse alert-dismissible" ><i className="icon-thumb-down"></i>
                    <p>{"Your"}  <b> {"Perfomance"} </b> {"is down on this week"}
                    <button className="close"><span className="bg-danger" >{"dismiss"}</span></button></p>
                    </Alert>
                    <Alert color="light inverse alert-dismissible" ><i className="icon-alert txt-dark"></i>
                    <p>{"You can check in on some of those fields below."}
                    <button className="close"><span className="bg-light  txt-dark" >{"dismiss"}</span></button></p>
                    </Alert>
                    <Alert color="dark inverse alert-dismissible" ><i className="icon-info-alt"></i>
                    <p> {"You can check in on some of those fields below."}
                    <button className="close"><span className="bg-light txt-dark" >{"dismiss"}</span></button></p>
                    </Alert>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{AdditionalContent}</h5><span>{"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."}</span>
                  </CardHeader>
                  <CardBody className="card-body">
                    <Alert color="primary ">
                      <h4 className="alert-heading">{"Well done!"}</h4>
                      <p>{"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}</p>
                      <hr/>
                      <p className="mb-0">{"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}</p>
                    </Alert>
                    <Alert color="secondary">
                      <h4 className="alert-heading">{"Well done!"}</h4>
                      <p>{"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}</p>
                      <hr/>
                      <p className="mb-0">{"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}</p>
                    </Alert>
                    <Alert color="success">
                      <h4 className="alert-heading">{"Well done!"}</h4>
                      <p>{"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}</p>
                      <hr/>
                      <p className="mb-0">{"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}</p>
                    </Alert>
                    <Alert color="danger">
                      <h4 className="alert-heading">{"Well done!"}</h4>
                      <p>{"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}</p>
                      <hr/>
                      <p className="mb-0">{"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}</p>
                    </Alert>
                    <Alert color="info">
                      <h4 className="alert-heading">{"Well done!"}</h4>
                      <p>{"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}</p>
                      <hr/>
                      <p className="mb-0">{"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}</p>
                    </Alert>
                    <Alert color="light">
                      <h4 className="alert-heading">{"Well done!"}</h4>
                      <p>{"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}</p>
                      <hr/>
                      <p className="mb-0">{"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}</p>
                    </Alert>
                    <Alert color="dark">
                      <h4 className="alert-heading">{"Well done!"}</h4>
                      <p>{"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}</p>
                      <hr/>
                      <p className="mb-0">{"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}</p>
                    </Alert>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default Alerts