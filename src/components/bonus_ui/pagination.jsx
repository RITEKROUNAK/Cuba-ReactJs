import React,{Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Pagination,PaginationItem,PaginationLink} from 'reactstrap'
import {Pagi_Nations,PaginationWithIcons,PaginationAlignment,PaginationActiveDisabled,PaginationColor,PaginationSizing,Previous,Next} from '../../constant'


const Paginations = (props) => {
    return (
        <Fragment>
        <Breadcrumb parent="Bouns Ui" title="Pagination"/>
        <Container fluid={true}>
            <Row>
              <Col xl="6">
                <Card>
                  <CardHeader>
                    <h5>{Pagi_Nations}</h5>
                  </CardHeader>
                  <CardBody>
                    <Pagination aria-label="Page navigation example"  className="pagination-primary">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6">
                <Card>
                  <CardHeader>
                    <h5>{PaginationWithIcons}</h5>
                  </CardHeader>
                  <CardBody>
                    <Pagination aria-label="Page navigation example" className="pagination-primary" >
                        <PaginationItem><PaginationLink href="#javascript"><span aria-hidden="true">«</span><span className="sr-only">{Previous}</span></PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript"><span aria-hidden="true">»</span><span className="sr-only">{Next}</span></PaginationLink></PaginationItem>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <h5>{PaginationAlignment}</h5>
                  </CardHeader>
                  <CardBody>
                  <nav className="m-b-30" aria-label="Page navigation example">
                    <Pagination className="pagination pagination-primary" aria-label="Page navigation example">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                    </Pagination>
                  </nav>
                  <nav className="m-b-30" aria-label="Page navigation example">
                    <Pagination className="pagination justify-content-center pagination-primary" aria-label="Page navigation example">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                    </Pagination>
                  </nav>
                  <nav aria-label="Page navigation example">
                    <Pagination className="pagination justify-content-end pagination-primary" aria-label="Page navigation example">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                    </Pagination>
                  </nav>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <h5>{PaginationActiveDisabled}</h5>
                  </CardHeader>
                  <CardBody>
                    <Pagination aria-label="...">
                      <ul className="pagination pagination-primary">
                        <PaginationItem disabled><PaginationLink>{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript" >{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem active><PaginationLink href="#javascript">{"2"} <span className="sr-only">{"(current)"}</span></PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <h5>{PaginationColor}</h5>
                  </CardHeader>
                  <CardBody>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                      <ul className="pagination pagination-primary">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                      <ul className="pagination pagination-secondary">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                      <ul className="pagination pagination-success">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                      <ul className="pagination pagination-info">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                      <ul className="pagination pagination-warning">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                    <Pagination aria-label="Page navigation example">
                      <ul className="pagination pagination-danger">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <h5>{PaginationSizing}</h5>
                  </CardHeader>
                  <CardBody>
                    <Pagination className="m-b-30" aria-label="Page navigation example">
                      <ul className="pagination pagination-lg pagination-primary">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                    <Pagination aria-label="Page navigation example">
                      <ul className="pagination pagination-sm pagination-primary">
                        <PaginationItem><PaginationLink href="#javascript">{Previous}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
                      </ul>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          </Fragment>
    );
}

export default Paginations;