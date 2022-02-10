import React,{Fragment} from 'react';
import Breadcrumbss from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import { Hometxt,Library,Data,NavBreadcrumb,Bootstrap,ColoredBreadcrumb,DefaultBootstrapBreadcrumb } from '../../constant';
const Breadcrumbs = (props) => {
    return (
        <Fragment>
        <Breadcrumbss parent="Bouns Ui" title="Breadcrumb"/>
        <Container fluid={true}>
            <Row>

              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{DefaultBootstrapBreadcrumb}</h5><span>{"use class"} <code>{".breadcrumb to ol"}</code></span>
                  </CardHeader>
                  <CardBody>
                  <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                      <BreadcrumbItem  active>{Hometxt}</BreadcrumbItem>
                  </ol>
                  <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                      <BreadcrumbItem tag="a" href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active>{Library}</BreadcrumbItem>
                    </ol>
                    <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                      <BreadcrumbItem tag="a" href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem tag="a" href="#">{Library}</BreadcrumbItem>
                      <BreadcrumbItem active>{Data}</BreadcrumbItem>
                    </ol>
                    <ol className="breadcrumb m-b-0 bg-white p-t-0 p-l-0">
                      <BreadcrumbItem tag="a" href="#"><i className="fa fa-home"></i></BreadcrumbItem>
                      <BreadcrumbItem>{Library}</BreadcrumbItem>
                      <BreadcrumbItem active>{Data}</BreadcrumbItem>
                    </ol>
                  </CardBody>
                </Card>
              </Col>
            
             <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{NavBreadcrumb}</h5><span>{"use class"} <code>{".breadcrumb to nav"}</code> {"similar to navigation"}</span>
                  </CardHeader>
                  <CardBody>
                    <Breadcrumb className="m-b-0">
                    
                        <BreadcrumbItem tag="a" href="#">{Hometxt}</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="#">{Library}</BreadcrumbItem>
                        <BreadcrumbItem active>{Bootstrap}</BreadcrumbItem>
                      
                    </Breadcrumb>
                  </CardBody>
                </Card>
              </Col>
         
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>{ColoredBreadcrumb}</h5><span>{"use class"} <code>{".breadcrumb-colored .bg-primary"}</code></span>
                  </CardHeader>
                  <CardBody>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-primary">
                      <BreadcrumbItem  href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active>{Library}</BreadcrumbItem>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-secondary">
                      <BreadcrumbItem  href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active>{Library}</BreadcrumbItem>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-success">
                      <BreadcrumbItem href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active>{Library}</BreadcrumbItem>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-info">
                      <BreadcrumbItem  href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active>{Library}</BreadcrumbItem> 
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-warning">
                      <BreadcrumbItem  href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active>{Library}</BreadcrumbItem>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored m-b-30 bg-danger">
                      <BreadcrumbItem  href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active>{Library}</BreadcrumbItem>
                   </ol>
                   <ol className="breadcrumb breadcrumb-colored m-b-30 bg-light">
                      <BreadcrumbItem  href="#" className="txt-dark">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active className="txt-dark">{Library}</BreadcrumbItem>
                    </ol>
                    <ol className="breadcrumb breadcrumb-colored m-b-0 bg-dark">
                      <BreadcrumbItem  href="#">{Hometxt}</BreadcrumbItem>
                      <BreadcrumbItem active>{Library}</BreadcrumbItem>
                   </ol>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default Breadcrumbs;