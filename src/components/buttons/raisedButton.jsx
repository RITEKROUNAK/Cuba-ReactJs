import React,{Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
import {DefaultButtons,PrimaryButton,SecondaryButton,SuccessButton,InfoButton,WarningButton,DangerButton,LightButton,SmallButtons,Add,Disabled,Active,LargeButtons,OutlineButtons,OutlineLargeButtons,OutlineSmallButtons,ActiveButtons,DisabledButtons,GradienButtons,ExtraSmallButtons,CustomStateButtons,BoldBorderOutlineButtons,OutlineExtraSmallButtons,DisabledOutlineButtons} from "../../constant";

const RaisedButton = () => {
    return (
      <Fragment>
       <Breadcrumb parent="Buttons" title="Raised Buttons"/>
      <Container fluid={true}>
          <Row>
              <Col sm="12">
                  <Card>
                      <CardHeader>
                          <h5>{DefaultButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-air-*"}</code> {"class  for raised button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill btn-air-primary" color="primary" >{PrimaryButton}</Button>
                          <Button className="btn-pill btn-air-secondary" color="secondary">{SecondaryButton}</Button>
                          <Button className="btn-pill btn-air-success" color="success">{SuccessButton}</Button>
                          <Button className="btn-pill btn-air-info" color="info">{InfoButton}</Button>
                          <Button className="btn-pill btn-air-warning" color="warning">{WarningButton}</Button>
                          <Button className="btn-pill btn-air-danger" color="danger">{DangerButton}</Button>
                          <Button className="btn-pill btn-air-light" color="light">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{LargeButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code> {"and"} <code>{".btn-lg"}</code> {"class for large button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill btn-air-primary" size="lg" color="primary">{PrimaryButton}</Button>
                          <Button className="btn-pill btn-air-secondary" size="lg" color="secondary">{SecondaryButton}</Button>
                          <Button className="btn-pill btn-air-success" size="lg" color="success">{SuccessButton}</Button>
                          <Button className="btn-pill btn-air-info" size="lg" color="info">{InfoButton}</Button>
                          <Button className="btn-pill btn-air-warning" size="lg" color="warning">{WarningButton}</Button>
                          <Button className="btn-pill btn-air-danger" size="lg" color="danger">{DangerButton}</Button>
                          <Button className="btn-pill btn-air-light" size="lg" color="light">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{SmallButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code> {"and"} <code>{".btn-sm"}</code> {"class for small button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button   className="btn-pill btn-air-primary"   color="primary" size="sm">{PrimaryButton}</Button>
                          <Button   className="btn-pill btn-air-secondary"  color="secondary" size="sm">{SecondaryButton}</Button>
                          <Button   className="btn-pill btn-air-success"  color="success" size="sm">{SuccessButton}</Button>
                          <Button   className="btn-pill btn-air-info"  color="info" size="sm">{InfoButton}</Button>
                          <Button   className="btn-pill btn-air-warning"  color="warning" size="sm">{WarningButton}</Button>
                          <Button   className="btn-pill btn-air-danger"  color="danger" size="sm">{DangerButton}</Button>
                          <Button   className="btn-pill btn-air-light" color="light" size="sm">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{ExtraSmallButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code> {"and"} <code>{".btn-xs"}</code> {"class for extra small button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   color="primary" size="xs">{PrimaryButton}</Button>
                          <Button  className="btn-pill btn-air-secondary"  color="secondary" size="xs">{SecondaryButton}</Button>
                          <Button  className="btn-pill btn-air-success"  color="success" size="xs">{SuccessButton}</Button>
                          <Button  className="btn-pill btn-air-info"  color="info" size="xs">{InfoButton}</Button>
                          <Button  className="btn-pill btn-air-warning"  color="warning" size="xs">{WarningButton}</Button>
                          <Button  className="btn-pill btn-air-danger"  color="danger" size="xs">{DangerButton}</Button>
                          <Button  className="btn-pill btn-air-light" color="light" size="xs">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{ActiveButtons}</h5>
                          <span>{Add} <code>{".active"}</code> {"for active state"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   color="primary" active >{Active}</Button>
                          <Button  className="btn-pill btn-air-secondary"  color="secondary" active >{Active}</Button>
                          <Button  className="btn-pill btn-air-success"  color="success" active >{Active}</Button>
                          <Button  className="btn-pill btn-air-info"  color="info" active >{Active}</Button>
                          <Button  className="btn-pill btn-air-warning"  color="warning" active >{Active}</Button>
                          <Button  className="btn-pill btn-air-danger"  color="danger" active >{Active}</Button>
                          <Button  className="btn-pill btn-air-light" color="light  txt-dark" active >{Active}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{DisabledButtons}</h5>
                          <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   color="primary" disabled>{Disabled}</Button>
                          <Button  className="btn-pill btn-air-secondary"  color="secondary" disabled>{Disabled}</Button>
                          <Button  className="btn-pill btn-air-success"  color="success" disabled>{Disabled}</Button>
                          <Button  className="btn-pill btn-air-info"  color="info" disabled>{Disabled}</Button>
                          <Button  className="btn-pill btn-air-warning"  color="warning" disabled>{Disabled}</Button>
                          <Button  className="btn-pill btn-air-danger"  color="danger" disabled>{Disabled}</Button>
                          <Button  className="btn-pill btn-air-light" color="light" disabled>{Disabled}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{CustomStateButtons}</h5>
                          <span>{"The"} <code>{".btn"}</code> {"class used with"} <code>&lt;{"button"}&gt;</code>, <code>&lt;{"a"}&gt;</code> {"and"} <code>&lt;{"input"}&gt;</code> {"elements."}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <button className="btn btn-pill btn-air-primary btn-primary">{"Link"}</button>
                          <input className="btn btn-pill btn-air-secondary btn-secondary" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                          <input className="btn btn-pill btn-air-success btn-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                          <button className="btn btn-pill btn-air-info btn-info" type="submit">{"Button"}</button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{OutlineButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code> {"and"} <code>{".btn-outline-*"}</code> {"class for button with outline"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button   className="btn-pill btn-air-primary"   outline color="primary">{PrimaryButton}</Button>
                          <Button   className="btn-pill btn-air-secondary"  outline color="secondary">{SecondaryButton}</Button>
                          <Button   className="btn-pill btn-air-success"  outline color="success">{SuccessButton}</Button>
                          <Button   className="btn-pill btn-air-info"  outline color="info">{InfoButton}</Button>
                          <Button   className="btn-pill btn-air-warning"  outline color="warning">{WarningButton}</Button>
                          <Button   className="btn-pill btn-air-danger"  outline color="danger">{DangerButton}</Button>
                          <Button   className="btn-pill btn-air-light" outline color="light txt-dark">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{BoldBorderOutlineButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code> {"and"} <code>{".btn-outline-*-2x"}</code> {"class for button with bold outline"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   outline color="primary-2x">{PrimaryButton}</Button>
                          <Button  className="btn-pill btn-air-secondary"  outline color="secondary-2x">{SecondaryButton}</Button>
                          <Button  className="btn-pill btn-air-success"  outline color="success-2x">{SuccessButton}</Button>
                          <Button  className="btn-pill btn-air-info"  outline color="info-2x">{InfoButton}</Button>
                          <Button  className="btn-pill btn-air-warning"  outline color="warning-2x">{WarningButton}</Button>
                          <Button  className="btn-pill btn-air-danger"  outline color="danger-2x">{DangerButton}</Button>
                          <Button  className="btn-pill btn-air-light" outline color="light-2x txt-dark">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{OutlineLargeButtons}</h5>
                          <span><code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-lg"}</code> {"class for large button with outline"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"    outline color="primary" size="lg">{PrimaryButton}</Button>
                          <Button  className="btn-pill btn-air-secondary"   outline color="secondary" size="lg">{SecondaryButton}</Button>
                          <Button  className="btn-pill btn-air-success"   outline color="success" size="lg">{SuccessButton}</Button>
                          <Button  className="btn-pill btn-air-info"   outline color="info" size="lg">{InfoButton}</Button>
                          <Button  className="btn-pill btn-air-warning"   outline color="warning" size="lg">{WarningButton}</Button>
                          <Button  className="btn-pill btn-air-danger"   outline color="danger" size="lg">{DangerButton}</Button>
                          <Button  className="btn-pill btn-air-light"  outline color="light txt-dark" size="lg">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{OutlineSmallButtons}</h5>
                          <span><code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-sm"}</code> {"class for small button with outline"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   outline color="primary" size="sm">{PrimaryButton}</Button>
                          <Button  className="btn-pill btn-air-secondary"  outline color="secondary" size="sm" >{SecondaryButton}</Button>
                          <Button  className="btn-pill btn-air-success"  outline color="success" size="sm">{SuccessButton}</Button>
                          <Button  className="btn-pill btn-air-info"  outline color="info" size="sm">{InfoButton}</Button>
                          <Button  className="btn-pill btn-air-warning"  outline color="warning" size="sm">{WarningButton}</Button>
                          <Button  className="btn-pill btn-air-danger"  outline color="danger" size="sm">{DangerButton}</Button>
                          <Button  className="btn-pill btn-air-light" outline color="light txt-dark" size="sm">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{OutlineExtraSmallButtons}</h5>
                          <span><code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-xs"}</code> {"class for extra small button with "}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   outline color="primary " size="xs">{PrimaryButton}</Button>
                          <Button  className="btn-pill btn-air-secondary"  outline color="secondary " size="xs">{SecondaryButton}</Button>
                          <Button  className="btn-pill btn-air-success"  outline color="success " size="xs">{SuccessButton}</Button>
                          <Button  className="btn-pill btn-air-info"  outline color="info " size="xs">{InfoButton}</Button>
                          <Button  className="btn-pill btn-air-warning"  outline color="warning " size="xs">{WarningButton}</Button>
                          <Button  className="btn-pill btn-air-danger"  outline color="danger " size="xs">{DangerButton}</Button>
                          <Button  className="btn-pill btn-air-light" outline color="light txt-dark" size="xs">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{DisabledOutlineButtons}</h5>
                          <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill btn-air-primary"   outline color="primary" disabled >{Disabled}</Button>
                          <Button  className="btn-pill btn-air-secondary"  outline color="secondary" disabled >{Disabled}</Button>
                          <Button  className="btn-pill btn-air-success"  outline color="success" disabled >{Disabled}</Button>
                          <Button  className="btn-pill btn-air-info"  outline color="info" disabled >{Disabled}</Button>
                          <Button  className="btn-pill btn-air-warning"  outline color="warning" disabled >{Disabled}</Button>
                          <Button  className="btn-pill btn-air-danger"  outline color="danger" disabled >{Disabled}</Button>
                          <Button  className="btn-pill btn-air-light" outline color="light txt-dark" disabled >{Disabled}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{GradienButtons}</h5>
                          <span><code>{".btn-pill"}</code>,<code>{".btn-air-*"}</code>,<code>{".btn-*"}</code> {"and"} <code>{".btn-*-gradien"}</code> {"class for gradien button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill btn-air-primary"  color="primary-gradien" >{PrimaryButton}</Button>
                          <Button className="btn-pill btn-air-secondary"  color="secondary-gradien" >{SecondaryButton}</Button>
                          <Button className="btn-pill btn-air-success"  color="success-gradien" >{SuccessButton}</Button>
                          <Button className="btn-pill btn-air-info"  color="info-gradien" >{InfoButton}</Button>
                          <Button className="btn-pill btn-air-warning"  color="warning-gradien" >{WarningButton}</Button>
                          <Button className="btn-pill btn-air-danger"  color="danger-gradien" >{DangerButton}</Button>
                          <Button className="btn-pill btn-air-light"  color="danger-gradien" >{LightButton}</Button>
                      </CardBody>
                  </Card>
              </Col>
          </Row>
      </Container>
      </Fragment>
    );
};

export default RaisedButton;