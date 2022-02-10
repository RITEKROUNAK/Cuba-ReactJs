import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody, Table} from 'reactstrap'
import {ColumnOrdering,GridColumn,NestingColumn,GridOptions,ExtraSmall,Small,Medium,Large,ExtraLarge,GridBehavior,GutterWidth,Nestable,Offsets,VerticalAlignment,HorizontalAlignment,Order} from '../../constant'
const Grid = (props) => {
    return (
        <Fragment>
        <Breadcrumb parent="Ui Kits" title="Grid"/>
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{GridOptions}</h5><span>{"Bootstrap grid allows building an equal height flexbile blocks easily"}</span>
              </CardHeader>
              <CardBody className="card-body">
                <p>{"While Bootstrap uses"} <code>{"em"} </code>{"or"} <code>{"rem"} </code>{"for defining most sizes"}, <code>{"px"}</code> {"are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the"} <a href="#javascript">{"font size"}</a>.</p>
                <div className="table-responsive">
                  <Table bordered striped>
                    <thead>
                      <tr>
                        <th></th>
                        <th className="text-center">{ExtraSmall}<br/><small className="digits">&lt;{"576px"}</small></th>
                        <th className="text-center">{Small}<br/><small className="digits">{"≥576px"}</small></th>
                        <th className="text-center">{Medium}<br/><small className="digits">{"≥768px"}</small></th>
                        <th className="text-center">{Large}<br/><small className="digits">{"≥992px"}</small></th>
                        <th className="text-center">{ExtraLarge}<br/><small className="digits">{"≥1200px"}</small></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-nowrap" scope="row">{GridBehavior}</th>
                        <td>{"Horizontal at all times"}</td>
                        <td colSpan={4}>{"Collapsed to start, horizontal above breakpoints"}</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">{"Max container width"}</th>
                        <td>{"None (auto)"}</td>
                        <td className="digits">{"540px"}</td>
                        <td className="digits">{"720px"}</td>
                        <td className="digits">{"960px"}</td>
                        <td className="digits">{"1140px"}</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">{"className prefix"}</th>
                        <td><code>{".col-"}</code></td>
                        <td><code>{".col-sm-"}</code></td>
                        <td><code>{".col-md-"}</code></td>
                        <td><code>{".col-lg-"}</code></td>
                        <td><code>{".col-xl-"}</code></td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">{"# of columns"}</th>
                        <td colSpan={5}>{"12"}</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">{GutterWidth}</th>
                        <td colSpan={5}>{"30px (15px on each side of a column)"}</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">{Nestable}</th>
                        <td colSpan={5}>{"Yes"}</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">{Offsets}</th>
                        <td colSpan={5}>{"Yes"}</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">{ColumnOrdering}</th>
                        <td colSpan={5}>{"Yes"}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{GridColumn}</h5>
              </CardHeader>
              <CardBody className="card-body grid-showcase">
                <p>{"Using a single set of"} <code>{".col-md-*"}</code> {"grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns within any"} <code>{".row"}</code>.</p>
                <Row>
                  <Col md="1 text-center"><span>{"col-md-1"}</span></Col>
                  <Col md="2 text-center"><span>{"col-md-2"}</span></Col>
                  <Col md="2 text-center"><span>{"col-md-2"}</span></Col>
                  <Col md="3 text-center"><span>{"col-md-3"}</span></Col>
                  <Col md="4 text-center"><span>{"col-md-4"}</span></Col>
                  <Col md="5 text-center"><span>{"col-md-5"}</span></Col>
                  <Col md="7 text-center"><span>{"col-md-7"}</span></Col>
                  <Col md="6 text-center"><span>{"col-md-6"}</span></Col>
                  <Col md="6 text-center"><span>{"col-md-6"}</span></Col>
                  <Col md="8 text-center"><span>{"col-md-8"}</span></Col>
                  <Col md="4 text-center"><span>{"col-md-4"}</span></Col>
                  <Col md="9 text-center"><span>{"col-md-9"}</span></Col>
                  <Col md="3 text-center"><span>{"col-md-3"}</span></Col>
                  <Col md="10 text-center"><span>{"col-md-10"}</span></Col>
                  <Col md="2 text-center"><span>{"col-md-2"}</span></Col>
                  <Col md="12 text-center"><span>{"col-md-12"}</span></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{"Setting one column width"}</h5>
              </CardHeader>
              <CardBody className="card-body grid-showcase">
                <p>{"Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column."}</p>
                <Row>
                  <Col className="col"><span>{"1 of 3"}</span></Col>
                  <Col className="col-6"><span>{"2 of 3 (wider)"}</span></Col>
                  <Col className="col"><span> {"3 of 3"}</span></Col>
                </Row>
                <Row>
                  <div className="col"><span>{"1 of 3"}</span></div>
                  <div className="col-5"><span> {"2 of 3 (wider)"}</span></div>
                  <div className="col"><span>{"3 of 3"}</span></div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{VerticalAlignment}</h5>
              </CardHeader>
              <CardBody className="card-body grid-showcase grid-align">
                <p>{"Use flexbox alignment utilities to vertically and horizontally align columns."}</p>
                <Row>
                  <Col className="col align-self-start"><span>{"One of three columns"}</span></Col>
                  <Col className="col align-self-center"><span>{"One of three columns"}</span></Col>
                  <Col className="col align-self-end"><span>{"One of three columns"}</span></Col>
                </Row>
                <Row className="align-items-start">
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                </Row>
                <Row className="align-items-center">
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                </Row>
                <Row className="align-items-end">
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                  <Col className="col"><span>{"One of three columns"}</span></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{HorizontalAlignment}</h5>
              </CardHeader>
              <CardBody className="card-body grid-showcase grid-align">
                <p>{"Use flexbox alignment utilities to vertically and horizontally align columns."}</p>
                <Row className="justify-content-start">
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                </Row>
                <Row className="justify-content-end">
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                </Row>
                <Row className="justify-content-around">
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                </Row>
                <Row className="justify-content-between">
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                  <Col className="col-4"><span>{"One of two columns"}</span></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{NestingColumn}</h5>
              </CardHeader>
              <CardBody className="card-body grid-showcase">
                <p>{"Use flexbox alignment utilities to vertically and horizontally align columns."}</p>
                <Row>
                  <Col className="col-sm-9"><span>{"Level 1: .col-sm-9"}</span>
                    <Row>
                      <Col className="col-8 col-sm-6"><span>{"Level 2: .col-8 .col-sm-6"}</span></Col>
                      <Col className="col-4 col-sm-6"><span>{"Level 2: .col-4 .col-sm-6"}</span></Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Order}</h5>
              </CardHeader>
              <CardBody className="card-body grid-showcase">
                <p>{"Use"} <code>{".order-"}</code> {"classNamees for controlling the"} <strong>{"visual order"}</strong> {"of your content. These classNamees are responsive, so you can set the"} <code>{"order"}</code> {"by breakpoint (e.g.,"} <code>{".order-1.order-md-2"}</code>{"). Includes support for"} <code>{"1"}</code> {"through"} <code>{"12"}</code> {"across all five grid tiers."}</p>
                <Row>
                  <Col className="col"><span>{"First, but unordered"}</span></Col>
                  <Col className="col order-12"><span>{"Second, but last"}</span></Col>
                  <Col className="col order-1"><span>{"Third, but first"}</span></Col>
                </Row>
                <Row>
                  <Col className="col order-last"><span>{"First, but last"}</span></Col>
                  <Col className="col"><span>{"Second, but unordered"}</span></Col>
                  <Col className="col order-first"><span>{"Third, but first"}</span></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Offsets}</h5>
              </CardHeader>
              <CardBody className="card-body grid-showcase">
                <p>{"Move columns to the right using"} <code>{".offset-md-*"}</code> {"classes. These classes increase the left margin of a column by"} <code>{"*"}</code> {"columns. For example,"} <code>{".offset-md-4"}</code> {"moves"} <code>{".col-md-4"}</code> {"over four columns."}</p>
                <Row>
                  <Col md="4"><span>{".col-md-4"}</span></Col>
                  <Col md="4 offset-md-4"><span>{".col-md-4 .offset-md-4"}</span></Col>
                </Row>
                <Row>
                  <Col md="3 offset-md-3"><span>{".col-md-3 .offset-md-3"}</span></Col>
                  <Col md="3 offset-md-3"><span>{".col-md-3 .offset-md-3"}</span></Col>
                </Row>
                <Row>
                  <Col md="6 offset-md-3"><span>{".col-md-6 .offset-md-3"}</span></Col>
                </Row>
                <Row>
                  <Col sm="4" md="6"><span>{".col-sm-5 .col-md-6"}</span></Col>
                  <Col sm="4 offset-sm-2" md="6 offset-md-0"><span>{".col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0"}</span></Col>
                </Row>
                <Row>
                  <Col sm="6" md="5" lg="6"><span>{".col-sm-6 .col-md-5 .col-lg-6"}</span></Col>
                  <Col sm="6" md="5 offset-md-2" lg="6 offset-lg-0"><span>{".col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0"}</span></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
}

export default Grid;