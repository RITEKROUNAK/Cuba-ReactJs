import React,{Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container,Row,Col,Card,CardBody,CardHeader,Button} from 'reactstrap';
import { toast } from 'react-toastify';
import {BasicExamples,CustomDirections,CustomAutoclose,SuccessNotification,InfoNotification,WarningNotification,DangerNotification,BottomLeft,BottomCenter,RightBottom,AutoCloseIn1000Sec,AutoCloseIn15000Sec,AutoCloseIn500Sec,TopCenter,AutoCloseIn5000Sec} from '../../constant'
toast.configure();

const BootstrapNotify = (props) => {
  
    const basictoaster = (toastname) => {
        
        switch (toastname) {
            case 'basicsuccessToast':
                toast.success("Success Notification !", {
                position: toast.POSITION.TOP_RIGHT
                });
            break;
            case 'basicinfoToast':
                toast.info("Info Notification !", {
                position: toast.POSITION.TOP_RIGHT
                });
            break;
            case 'basicwarningToast':
            toast.warn("Warning Notification !", {
            position: toast.POSITION.TOP_RIGHT
            });
            break;
            case 'basicdangerToast':
                toast.error("Danger Notification !", {
                position: toast.POSITION.TOP_RIGHT
                });
            break;
            default:
            break;
        }
    }
    const directiontoaster = (toastname) => {
        switch (toastname) {
            case 'directionssuccessToast':
                toast.success("Success Notification !", {
                position: toast.POSITION.TOP_CENTER
                });
            break;
            case 'directionsinfoToast':
                toast.info("Info Notification !", {
                position: toast.POSITION.BOTTOM_CENTER
                });
            break;
            case 'directionswarningToast':
            toast.warn("Warning Notification !", {
            position: toast.POSITION.BOTTOM_LEFT
            });
            break;
            case 'directionsdangerToast':
                toast.error("Danger Notification !", {
                position: toast.POSITION.BOTTOM_RIGHT
                });
            break;
            default:
            break;
        }
    }

    const autoclosetoaster = (toastname) => {
        
        switch (toastname) {
            case 'autoclose1Toast':
                toast.success("Success Notification !", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 15000
                });
            break;
            case 'autoclose2Toast':
                toast.info("Info Notification !", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose:5000
                });
            break;
            case 'autoclose3Toast':
            toast.warn("Warning Notification !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1000
            });
            break;
            case 'autoclose4Toast':
                toast.error("Danger Notification !", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose:500
                });
            break;
            default:
            break;
        }
    }
    return (
        <Fragment>
        <Breadcrumb parent="Bouns Ui" title="Bootstrap Notify"/>
        <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{BasicExamples}</h5>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <Button  name="basicsuccessToast" color="success" onClick={(e) => basictoaster(e.target.name)}>{SuccessNotification}</Button>
                    <Button  name="basicinfoToast" color="info" onClick={(e) => basictoaster(e.target.name)}>{InfoNotification}</Button>
                    <Button  name="basicwarningToast" color="warning" onClick={(e) => basictoaster(e.target.name)}>{WarningNotification}</Button>
                    <Button  name="basicdangerToast" color="danger" onClick={(e) => basictoaster(e.target.name)}>{DangerNotification}</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{CustomDirections}</h5>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <Button  name="directionssuccessToast" color="success" onClick={(e) => directiontoaster(e.target.name)}>{TopCenter}</Button>
                    <Button  name="directionsinfoToast" color="info" onClick={(e) => directiontoaster(e.target.name)}>{BottomCenter}</Button>
                    <Button  name="directionswarningToast" color="warning" onClick={(e) => directiontoaster(e.target.name)}>{BottomLeft}</Button>
                    <Button  name="directionsdangerToast" color="danger" onClick={(e) => directiontoaster(e.target.name)}>{RightBottom}</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{CustomAutoclose}</h5>
                  </CardHeader>
                  <CardBody className="btn-showcase">
                    <Button  name="autoclose1Toast" color="success" onClick={(e) => autoclosetoaster(e.target.name)}>{AutoCloseIn15000Sec}</Button>
                    <Button  name="autoclose2Toast" color="info" onClick={(e) => autoclosetoaster(e.target.name)}>{AutoCloseIn5000Sec}</Button>
                    <Button  name="autoclose3Toast" color="warning" onClick={(e) => autoclosetoaster(e.target.name)}>{AutoCloseIn1000Sec}</Button>
                    <Button  name="autoclose4Toast" color="danger" onClick={(e) => autoclosetoaster(e.target.name)}>{AutoCloseIn500Sec}</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </Container>
        </Fragment>
    );
}

export default BootstrapNotify;