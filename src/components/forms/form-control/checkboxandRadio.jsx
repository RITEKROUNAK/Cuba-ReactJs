import React,{Fragment} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,FormGroup,Label,Input} from 'reactstrap'
import {CustomRadio,InlineCheckbox,CustomCheckbox, PrimaryState,BrandState,SuccessState,AnimatedCheckboxButtons,SquareCheckbox, Default,Disabled,Checked,RadioStates,CheckboxStates,SolidCheckbox,AnimatedRadioButtons,Option} from "../../../constant";
const CheckboxandRadio = (props) =>  {
    return (
      <Fragment>
        <Breadcrumb parent="Form" title="Checkbox & Radio"/>
        <Container fluid={true}>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5>{CustomRadio}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <h5>{CustomRadio}</h5>
                  </Col>
                  <Col>
                    <FormGroup className="m-t-15 custom-radio-ml">
                      <div className="radio radio-primary">
                        <Input id="radio1" type="radio" name="radio1" value="option1" defaultChecked />
                        <Label for="radio1">{Option}<span className="digits"> {"1"}</span></Label>
                      </div>
                      <div className="radio radio-primary">
                        <Input id="radio3" type="radio" name="radio1" value="option1" disabled/>
                        <Label for="radio3">{Disabled}</Label>
                      </div>
                      <div className="radio radio-primary">
                        <Input id="radio4" type="radio" name="radio1" value="option1" />
                        <Label for="radio4">{Checked}</Label>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <h5>{RadioStates}</h5>
                  </Col>
                  <Col>
                    <FormGroup className="m-t-15 custom-radio-ml">
                      <div className="radio radio-primary">
                        <Input id="radio11" type="radio" name="radio1" value="option1"/>
                        <Label for="radio11">{Option}<span className="digits"> {"1"}</span></Label>
                      </div>
                      <div className="radio radio-secondary">
                        <Input id="radio22" type="radio" name="radio1" value="option1"/>
                        <Label for="radio22">{Option}<span className="digits"> {"2"}</span></Label>
                      </div>
                      <div className="radio radio-success">
                        <Input id="radio55" type="radio" name="radio1" value="option1"/>
                        <Label for="radio55">{Option}<span className="digits"> {"3"}</span></Label>
                      </div>
                      <div className="radio radio-info">
                        <Input id="radio33" type="radio" name="radio1" value="option1" disabled/>
                        <Label for="radio33">{Option}<span className="digits"> {"4"}</span></Label>
                      </div>
                      <div className="radio radio-warning">
                        <Input id="radio44" type="radio" name="radio1" value="option1"/>
                        <Label for="radio44">{Option}<span className="digits"> {"5"}</span></Label>
                      </div>
                      <div className="radio radio-danger">
                        <Input id="radio66" type="radio" name="radio1" value="option1" defaultChecked />
                        <Label for="radio66">{Option}<span className="digits"> {"6"}</span></Label>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <h5>{InlineCheckbox}</h5>
                  </Col>
                  <Col>
                    <FormGroup className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                      <div className="radio radio-primary">
                        <Input id="radioinline1" type="radio" name="radio1" value="option1"  />
                        <Label className="mb-0" for="radioinline1">{Option}<span className="digits"> {"1"}</span></Label>
                      </div>
                      <div className="radio radio-primary">
                        <Input id="radioinline2" type="radio" name="radio1" value="option1"  />
                        <Label className="mb-0" for="radioinline2">{Option}<span className="digits"> {"2"}</span></Label>
                      </div>
                      <div className="radio radio-primary">
                        <Input id="radioinline3" type="radio" name="radio1" value="option1" defaultChecked />
                        <Label className="mb-0" for="radioinline3">{Option}<span className="digits"> {"3"}</span></Label>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5>{CustomCheckbox}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <h5>{CustomCheckbox}</h5>
                  </Col>
                  <Col>
                    <FormGroup className="m-t-15 custom-radio-ml">
                      <div className="checkbox">
                        <Input id="checkbox1" type="checkbox"/>
                        <Label for="checkbox1">{Default}</Label>
                      </div>
                      <div className="checkbox">
                        <Input id="checkbox2" type="checkbox" disabled/>
                        <Label for="checkbox2">{Disabled}</Label>
                      </div>
                      <div className="checkbox">
                        <Input id="checkbox3" type="checkbox" defaultChecked/>
                        <Label for="checkbox3">{Checked}</Label>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <h5>{CheckboxStates}</h5>
                  </Col>
                  <Col>
                    <FormGroup className="m-t-15 custom-radio-ml">
                      <div className="checkbox checkbox-primary">
                        <Input id="checkbox-primary-1" type="checkbox" defaultChecked/>
                        <Label for="checkbox-primary-1">{SuccessState}</Label>
                      </div>
                      <div className="checkbox checkbox-secondary">
                        <Input id="checkbox-dark" type="checkbox" disabled/>
                        <Label for="checkbox-dark">{BrandState}</Label>
                      </div>
                      <div className="checkbox checkbox-success">
                        <Input id="checkbox-primary" type="checkbox" defaultChecked/>
                        <Label for="checkbox-primary">{PrimaryState}</Label>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <h5>{InlineCheckbox}</h5>
                  </Col>
                  <Col>
                    <FormGroup className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                      <div className="checkbox checkbox-dark">
                        <Input id="inline-1" type="checkbox" defaultChecked />
                        <Label for="inline-1">{Option}<span className="digits"> {"1"}</span></Label>
                      </div>
                      <div className="checkbox checkbox-dark">
                        <Input id="inline-2" type="checkbox" defaultChecked />
                        <Label for="inline-2">{Option}<span className="digits"> {"2"}</span></Label>
                      </div>
                      <div className="checkbox checkbox-dark">
                        <Input id="inline-3" type="checkbox" defaultChecked/>
                        <Label for="inline-3">{Option}<span className="digits"> {"3"}</span></Label>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5>{AnimatedRadioButtons}</h5>
              </CardHeader>
              <CardBody className="animate-chk">
                <Row>
                  <Col>
                    <Label className="d-block" for="edo-ani">
                      <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />{Option} {"1"}
                    </Label>
                    <Label className="d-block" for="edo-ani1">
                      <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani"/>{Option} {"2"}
                    </Label>
                    <Label className="d-block" for="edo-ani2">
                      <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked/>{Option} {"3"}
                    </Label>
                    <Label className="d-block" for="edo-ani13">
                      <Input className="radio_animated" id="edo-ani13" type="radio" name="rdo-ani"/>{Option} {"4"}
                    </Label>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5>{AnimatedCheckboxButtons}</h5>
              </CardHeader>
              <CardBody className="animate-chk">
                <Row>
                  <Col>
                    <Label className="d-block" for="chk-ani">
                      <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked/>{Option} {"1"}
                    </Label>
                    <Label className="d-block" for="chk-ani1">
                      <Input className="checkbox_animated" id="chk-ani1" type="checkbox"/>{Option} {"2"}
                    </Label>
                    <Label className="d-block" for="chk-ani2">
                      <Input className="checkbox_animated" id="chk-ani2" type="checkbox" defaultChecked/>{Option} {"3"}
                    </Label>
                    <Label className="d-block" for="chk-ani3">
                      <Input className="checkbox_animated" id="chk-ani3" type="checkbox"/>{Option} {"4"}
                    </Label>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5>{SquareCheckbox}</h5>
              </CardHeader>
              <CardBody>
                <Row className="m-0">
                  <Col>
                    <FormGroup>
                      <div className="checkbox checkbox-dark m-squar">
                        <Input id="inline-sqr-1" type="checkbox"/>
                        <Label className="mt-0" for="inline-sqr-1">{Default}</Label>
                      </div>
                      <div className="checkbox checkbox-dark m-squar">
                        <Input id="inline-sqr-2" type="checkbox" disabled/>
                        <Label for="inline-sqr-2">{Disabled}</Label>
                      </div>
                      <div className="checkbox checkbox-dark m-squar">
                        <Input id="inline-sqr-3" type="checkbox" defaultChecked/>
                        <Label for="inline-sqr-3">{Checked}</Label>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12 pl-0">
                    <h5>{SolidCheckbox}</h5>
                  </Col>
                  <Col>
                    <FormGroup className="m-t-15 mb-0">
                      <div className="checkbox checkbox-solid-success">
                        <Input id="solid1" type="checkbox"/>
                        <Label for="solid1">{Default}</Label>
                      </div>
                      <div className="checkbox checkbox-solid-dark">
                        <Input id="solid2" type="checkbox" disabled/>
                        <Label for="solid2">{Disabled}</Label>
                      </div>
                      <div className="checkbox checkbox-solid-primary">
                        <Input id="solid3" type="checkbox" defaultChecked />
                        <Label for="solid3">{Checked}</Label>
                      </div>
                      <div className="checkbox checkbox-solid-danger">
                        <Input id="solid4" type="checkbox" defaultChecked />
                        <Label for="solid4">{Checked}</Label>
                      </div>
                      <div className="checkbox checkbox-solid-light">
                        <Input id="solid5" type="checkbox" defaultChecked />
                        <Label for="solid5">{Checked}</Label>
                      </div>
                      <div className="checkbox checkbox-solid-info">
                        <Input id="solid6" type="checkbox" defaultChecked />
                        <Label for="solid6">{Checked}</Label>
                      </div>
                      <div className="checkbox checkbox-solid-dark">
                        <Input id="solid7" type="checkbox" defaultChecked />
                        <Label className="mb-0" for="solid7">{Checked}</Label>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
}

export default CheckboxandRadio;