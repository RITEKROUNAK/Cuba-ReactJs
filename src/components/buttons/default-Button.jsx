import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
import {DefaultButtons,BootstrapStateButtons,PrimaryButton,SecondaryButton,SuccessButton,InfoButton,WarningButton,DangerButton,LightButton,SmallButtons,Add,Disabled,Active,LargeButtons,OutlineButtons,OutlineLargeButtons,OutlineSmallButtons,ActiveButtons,DisabledButtons,GradienButtons,ExtraSmallButtons,CustomStateButtons,BoldBorderOutlineButtons,OutlineExtraSmallButtons,DisabledOutlineButtons} from "../../constant";
const DefaultButton = () => {
    return (
        <Fragment>
            <Breadcrumb parent="Buttons" title="Default Style"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{DefaultButtons}</h5>
                                <span>{BootstrapStateButtons}</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button color="primary">{PrimaryButton}</Button>
                                <Button color="secondary">{SecondaryButton}</Button>
                                <Button color="success">{SuccessButton}</Button>
                                <Button color="info">{InfoButton}</Button>
                                <Button color="warning">{WarningButton}</Button>
                                <Button color="danger">{DangerButton}</Button>
                                <Button color="light">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card id="large-btn">
                            <CardHeader>
                                <h5>{LargeButtons}</h5>
                                <span>{Add} <code>{".btn-lg"}</code> {"class for large size buttons"}</span>
                            </CardHeader>
                            <CardBody className="btn-showcase">
                                <Button color="primary" size="lg">{PrimaryButton}</Button>
                                <Button color="secondary" size="lg">{SecondaryButton}</Button>
                                <Button color="success" size="lg">{SuccessButton}</Button>
                                <Button color="info" size="lg">{InfoButton}</Button>
                                <Button color="warning" size="lg">{WarningButton}</Button>
                                <Button color="danger" size="lg">{DangerButton}</Button>
                                <Button color="light" size="lg">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card id="small-btn">
                            <CardHeader>
                                <h5>{SmallButtons}</h5>
                                <span>{Add} <code>{".btn-sm"}</code> {"class for small size buttons"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary" size="sm">{PrimaryButton}</Button>
                                <Button color="secondary" size="sm">{SecondaryButton}</Button>
                                <Button color="success" size="sm">{SuccessButton}</Button>
                                <Button color="info" size="sm">{InfoButton}</Button>
                                <Button color="warning" size="sm">{WarningButton}</Button>
                                <Button color="danger" size="sm">{DangerButton}</Button>
                                <Button color="light" size="sm">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card id="ex-small-btn">
                            <CardHeader>
                                <h5>{ExtraSmallButtons}</h5>
                                <span>{Add} <code>{".btn-xs"}</code> {"class for extra small size buttons"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary" size="xs">{PrimaryButton}</Button>
                                <Button color="secondary" size="xs">{SecondaryButton}</Button>
                                <Button color="success" size="xs">{SuccessButton}</Button>
                                <Button color="info" size="xs">{InfoButton}</Button>
                                <Button color="warning" size="xs">{WarningButton}</Button>
                                <Button color="danger" size="xs">{DangerButton}</Button>
                                <Button color="light" size="xs">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card id="active-btn">
                            <CardHeader>
                                <h5>{ActiveButtons}</h5>
                                <span>{Add} <code>{".active"}</code> {"class for active state"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary" active >{Active}</Button>
                                <Button color="secondary" active >{Active}</Button>
                                <Button color="success" active >{Active}</Button>
                                <Button color="info" active >{Active}</Button>
                                <Button color="warning" active >{Active}</Button>
                                <Button color="danger" active >{Active}</Button>
                                <Button color="light  txt-dark" active >{Active}</Button>
                            </CardBody>
                        </Card>
                        <Card id="disabled-btn">
                            <CardHeader>
                                <h5>{DisabledButtons}</h5>
                                <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'"}</code> {"attribute for disabled button"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary" disabled>{Disabled}</Button>
                                <Button color="secondary" disabled>{Disabled}</Button>
                                <Button color="success" disabled>{Disabled}</Button>
                                <Button color="info" disabled>{Disabled}</Button>
                                <Button color="warning" disabled>{Disabled}</Button>
                                <Button color="danger" disabled>{Disabled}</Button>
                                <Button color="light" disabled>{Disabled}</Button>
                            </CardBody>
                        </Card>
                        <Card id="custom-state-button">
                            <CardHeader>
                                <h5>{CustomStateButtons}</h5>
                                <span>{"The"} <code>{".btn"}</code> {"class used with"} <code>&lt;{"button"}&gt;</code>, <code>&lt;{"a"}&gt;</code> {"and"} <code>&lt;{"input"}&gt;</code> {"elements."}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary">{"Link"}</Button>
                                <input className="btn btn-secondary"  type="button" value="Input" data-toggle="tooltip" title="btn btn-secondary" />
                                <input className="btn btn-success" type="submit" value="Submit" data-toggle="tooltip" title="btn btn-success" />
                                <Button color="info" type="submit">{"Button"}</Button>
                            </CardBody>
                        </Card>
                        <Card id="outline-button">
                            <CardHeader>
                                <h5>{OutlineButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*"}</code> {"class for border button"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary">{PrimaryButton}</Button>
                                <Button outline color="secondary">{SecondaryButton}</Button>
                                <Button outline color="success">{SuccessButton}</Button>
                                <Button outline color="info">{InfoButton}</Button>
                                <Button outline color="warning">{WarningButton}</Button>
                                <Button outline color="danger">{DangerButton}</Button>
                                <Button outline color="light txt-dark">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card id="outline-bold-button">
                            <CardHeader>
                                <h5>{BoldBorderOutlineButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*-2x"}</code> {"class for bold outline"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary-2x">{PrimaryButton}</Button>
                                <Button outline color="secondary-2x">{SecondaryButton}</Button>
                                <Button outline color="success-2x">{SuccessButton}</Button>
                                <Button outline color="info-2x">{InfoButton}</Button>
                                <Button outline color="warning-2x">{WarningButton}</Button>
                                <Button outline color="danger-2x">{DangerButton}</Button>
                                <Button outline color="light-2x txt-dark">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card id="outline-large-button">
                            <CardHeader>
                                <h5>{OutlineLargeButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*"}</code> {"class for outline and"} <code>{".btn-lg"}</code> {"class for large button"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary" size="lg">{PrimaryButton}</Button>
                                <Button outline color="secondary" size="lg">{SecondaryButton}</Button>
                                <Button outline color="success" size="lg">{SuccessButton}</Button>
                                <Button outline color="info" size="lg">{InfoButton}</Button>
                                <Button outline color="warning" size="lg">{WarningButton}</Button>
                                <Button outline color="danger" size="lg">{DangerButton}</Button>
                                <Button outline color="light txt-dark" size="lg">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card id="outline-small-button">
                            <CardHeader>
                                <h5>{OutlineSmallButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*"}</code> {"class for outline and"} <code>{".btn-sm"}</code> {"class for small button"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary" size="sm">{PrimaryButton}</Button>
                                <Button outline color="secondary" size="sm" >{SecondaryButton}</Button>
                                <Button outline color="success" size="sm">{SuccessButton}</Button>
                                <Button outline color="info" size="sm">{InfoButton}</Button>
                                <Button outline color="warning" size="sm">{WarningButton}</Button>
                                <Button outline color="danger" size="sm">{DangerButton}</Button>
                                <Button outline color="light txt-dark" size="sm">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card id="ex-outline-small-button">
                            <CardHeader>
                                <h5>{OutlineExtraSmallButtons}</h5>
                                <span>{Add} <code>{".btn-outline-*"}</code> {"class for outline and"} <code>{".btn-xs"}</code> {"class for extra small button"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary " size="xs">{PrimaryButton}</Button>
                                <Button outline color="secondary " size="xs">{SecondaryButton}</Button>
                                <Button outline color="success " size="xs">{SuccessButton}</Button>
                                <Button outline color="info " size="xs">{InfoButton}</Button>
                                <Button outline color="warning " size="xs">{WarningButton}</Button>
                                <Button outline color="danger " size="xs">{DangerButton}</Button>
                                <Button outline color="light txt-dark" size="xs">{LightButton}</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>{DisabledOutlineButtons}</h5>
                                <span>{Add} <code>{".disabled"}</code> {"class or"} <code>{"disabled='disabled'}"}</code> {"attribute for disabled state"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button outline color="primary" disabled >{Disabled}</Button>
                                <Button outline color="secondary" disabled >{Disabled}</Button>
                                <Button outline color="success" disabled >{Disabled}</Button>
                                <Button outline color="info" disabled >{Disabled}</Button>
                                <Button outline color="warning" disabled >{Disabled}</Button>
                                <Button outline color="danger" disabled >{Disabled}</Button>
                                <Button outline color="light txt-dark" disabled >{Disabled}</Button>
                            </CardBody>
                        </Card>
                        <Card id="gradiant">
                            <CardHeader>
                                <h5>{GradienButtons}</h5>
                                <span>{Add} <code>{".btn-*-gradien"}</code> {"class for gradien button"}</span>
                            </CardHeader>
                            <CardBody className=" btn-showcase">
                                <Button color="primary-gradien" >{PrimaryButton}</Button>
                                <Button color="secondary-gradien" >{SecondaryButton}</Button>
                                <Button color="success-gradien" >{SuccessButton}</Button>
                                <Button color="info-gradien" >{InfoButton}</Button>
                                <Button color="warning-gradien" >{WarningButton}</Button>
                                <Button color="danger-gradien" >{DangerButton}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default DefaultButton;