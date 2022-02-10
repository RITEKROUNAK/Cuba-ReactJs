import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
import {DefaultButtons,PrimaryButton,SecondaryButton,SuccessButton,InfoButton,WarningButton,DangerButton,LightButton,SmallButtons,Add,Disabled,Active,LargeButtons,OutlineButtons,OutlineLargeButtons,OutlineSmallButtons,ActiveButtons,DisabledButtons,GradienButtons,ExtraSmallButtons,CustomStateButtons,BoldBorderOutlineButtons,OutlineExtraSmallButtons,DisabledOutlineButtons} from "../../constant";

const EdgeButton = () => {
    return (
      <Fragment>
      <Breadcrumb parent="Buttons" title="Edge Buttons"/>
      <Container fluid={true}>
          <Row>
              <Col sm="12">
                  <Card>
                      <CardHeader>
                          <h5>{DefaultButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code> {"class for edge button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" color="primary" >{PrimaryButton}</Button>
                          <Button className="btn-pill" color="secondary">{SecondaryButton}</Button>
                          <Button className="btn-pill" color="success">{SuccessButton}</Button>
                          <Button className="btn-pill" color="info">{InfoButton}</Button>
                          <Button className="btn-pill" color="warning">{WarningButton}</Button>
                          <Button className="btn-pill" color="danger">{DangerButton}</Button>
                          <Button className="btn-pill" color="light">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{LargeButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-lg"}</code> {"class for large button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" size="lg" color="primary">{PrimaryButton}</Button>
                          <Button className="btn-pill" size="lg" color="secondary">{SecondaryButton}</Button>
                          <Button className="btn-pill" size="lg" color="success">{SuccessButton}</Button>
                          <Button className="btn-pill" size="lg" color="info">{InfoButton}</Button>
                          <Button className="btn-pill" size="lg" color="warning">{WarningButton}</Button>
                          <Button className="btn-pill" size="lg" color="danger">{DangerButton}</Button>
                          <Button className="btn-pill" size="lg" color="light">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{SmallButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-sm"}</code> {"class for small button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill" color="primary" size="sm">{PrimaryButton}</Button>
                          <Button  className="btn-pill" color="secondary" size="sm">{SecondaryButton}</Button>
                          <Button  className="btn-pill" color="success" size="sm">{SuccessButton}</Button>
                          <Button  className="btn-pill" color="info" size="sm">{InfoButton}</Button>
                          <Button  className="btn-pill" color="warning" size="sm">{WarningButton}</Button>
                          <Button  className="btn-pill" color="danger" size="sm">{DangerButton}</Button>
                          <Button  className="btn-pill" color="light" size="sm">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{ExtraSmallButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-xs"}</code> {"class for extra small button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" color="primary" size="xs">{PrimaryButton}</Button>
                          <Button className="btn-pill" color="secondary" size="xs">{SecondaryButton}</Button>
                          <Button className="btn-pill" color="success" size="xs">{SuccessButton}</Button>
                          <Button className="btn-pill" color="info" size="xs">{InfoButton}</Button>
                          <Button className="btn-pill" color="warning" size="xs">{WarningButton}</Button>
                          <Button className="btn-pill" color="danger" size="xs">{DangerButton}</Button>
                          <Button className="btn-pill" color="light" size="xs">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{ActiveButtons}</h5>
                          <span>{Add} <code>{".active"}</code> {"for active state"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" color="primary" active >{Active}</Button>
                          <Button className="btn-pill" color="secondary" active >{Active}</Button>
                          <Button className="btn-pill" color="success" active >{Active}</Button>
                          <Button className="btn-pill" color="info" active >{Active}</Button>
                          <Button className="btn-pill" color="warning" active >{Active}</Button>
                          <Button className="btn-pill" color="danger" active >{Active}</Button>
                          <Button className="btn-pill" color="light  txt-dark" active >{Active}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{DisabledButtons}</h5>
                          <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" color="primary" disabled>{Disabled}</Button>
                          <Button className="btn-pill" color="secondary" disabled>{Disabled}</Button>
                          <Button className="btn-pill" color="success" disabled>{Disabled}</Button>
                          <Button className="btn-pill" color="info" disabled>{Disabled}</Button>
                          <Button className="btn-pill" color="warning" disabled>{Disabled}</Button>
                          <Button className="btn-pill" color="danger" disabled>{Disabled}</Button>
                          <Button className="btn-pill" color="light" disabled>{Disabled}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{CustomStateButtons}</h5>
                          <span>{"The"} <code>{".btn"}</code> {"class used with"} <code>&lt;{"button"}&gt;</code>, <code>&lt;{"a"}&gt;</code> {"and"} <code>&lt;{"input"}&gt;</code> {"elements."}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <button className="btn btn-square btn-primary btn-pill" >{"Link"}</button>
                          <input className="btn btn-square btn-secondary btn-pill" type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                          <input className="btn btn-square btn-success btn-pill" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                          <button className="btn btn-square btn-info btn-pill" type="submit">{"Button"}</button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{OutlineButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-outline-*"}</code> {"class for button with outline"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button  className="btn-pill" outline color="primary">{PrimaryButton}</Button>
                          <Button  className="btn-pill" outline color="secondary">{SecondaryButton}</Button>
                          <Button  className="btn-pill" outline color="success">{SuccessButton}</Button>
                          <Button  className="btn-pill" outline color="info">{InfoButton}</Button>
                          <Button  className="btn-pill" outline color="warning">{WarningButton}</Button>
                          <Button  className="btn-pill" outline color="danger">{DangerButton}</Button>
                          <Button  className="btn-pill" outline color="light txt-dark">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{BoldBorderOutlineButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-outline-*-2x"}</code> {"class for button with bold outline"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" outline color="primary-2x">{PrimaryButton}</Button>
                          <Button className="btn-pill" outline color="secondary-2x">{SecondaryButton}</Button>
                          <Button className="btn-pill" outline color="success-2x">{SuccessButton}</Button>
                          <Button className="btn-pill" outline color="info-2x">{InfoButton}</Button>
                          <Button className="btn-pill" outline color="warning-2x">{WarningButton}</Button>
                          <Button className="btn-pill" outline color="danger-2x">{DangerButton}</Button>
                          <Button className="btn-pill" outline color="light-2x txt-dark">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{OutlineLargeButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-lg"}</code> {"class for large button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill"  outline color="primary" size="lg">{PrimaryButton}</Button>
                          <Button className="btn-pill"  outline color="secondary" size="lg">{SecondaryButton}</Button>
                          <Button className="btn-pill"  outline color="success" size="lg">{SuccessButton}</Button>
                          <Button className="btn-pill"  outline color="info" size="lg">{InfoButton}</Button>
                          <Button className="btn-pill"  outline color="warning" size="lg">{WarningButton}</Button>
                          <Button className="btn-pill"  outline color="danger" size="lg">{DangerButton}</Button>
                          <Button className="btn-pill"  outline color="light txt-dark" size="lg">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{OutlineSmallButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-sm"}</code> {"class for small button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" outline color="primary" size="sm">{PrimaryButton}</Button>
                          <Button className="btn-pill" outline color="secondary" size="sm" >{SecondaryButton}</Button>
                          <Button className="btn-pill" outline color="success" size="sm">{SuccessButton}</Button>
                          <Button className="btn-pill" outline color="info" size="sm">{InfoButton}</Button>
                          <Button className="btn-pill" outline color="warning" size="sm">{WarningButton}</Button>
                          <Button className="btn-pill" outline color="danger" size="sm">{DangerButton}</Button>
                          <Button className="btn-pill" outline color="light txt-dark" size="sm">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{OutlineExtraSmallButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code>,<code>{".btn-outline-*"}</code> {"and"} <code>{".btn-xs"}</code> {"class for extra small button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" outline color="primary " size="xs">{PrimaryButton}</Button>
                          <Button className="btn-pill" outline color="secondary " size="xs">{SecondaryButton}</Button>
                          <Button className="btn-pill" outline color="success " size="xs">{SuccessButton}</Button>
                          <Button className="btn-pill" outline color="info " size="xs">{InfoButton}</Button>
                          <Button className="btn-pill" outline color="warning " size="xs">{WarningButton}</Button>
                          <Button className="btn-pill" outline color="danger " size="xs">{DangerButton}</Button>
                          <Button className="btn-pill" outline color="light txt-dark" size="xs">{LightButton}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{DisabledOutlineButtons}</h5>
                          <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill" outline color="primary" disabled >{Disabled}</Button>
                          <Button className="btn-pill" outline color="secondary" disabled >{Disabled}</Button>
                          <Button className="btn-pill" outline color="success" disabled >{Disabled}</Button>
                          <Button className="btn-pill" outline color="info" disabled >{Disabled}</Button>
                          <Button className="btn-pill" outline color="warning" disabled >{Disabled}</Button>
                          <Button className="btn-pill" outline color="danger" disabled >{Disabled}</Button>
                          <Button className="btn-pill" outline color="light txt-dark" disabled >{Disabled}</Button>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardHeader>
                          <h5>{GradienButtons}</h5>
                          <span>{Add} <code>{".btn-pill"}</code> {"and"} <code>{".btn-*-gradien"}</code> {"class for gradien button"}</span>
                      </CardHeader>
                      <CardBody className="btn-showcase">
                          <Button className="btn-pill"  color="primary-gradien" >{PrimaryButton}</Button>
                          <Button className="btn-pill"  color="secondary-gradien" >{SecondaryButton}</Button>
                          <Button className="btn-pill"  color="success-gradien" >{SuccessButton}</Button>
                          <Button className="btn-pill"  color="info-gradien" >{InfoButton}</Button>
                          <Button className="btn-pill"  color="warning-gradien" >{WarningButton}</Button>
                          <Button className="btn-pill"  color="danger-gradien" >{DangerButton}</Button>
                      </CardBody>
                  </Card>
              </Col>
          </Row>
      </Container>
      </Fragment>
    );
};

export default EdgeButton;