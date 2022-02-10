import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {useForm} from 'react-hook-form'
import TooltipForm from './tooltipForm';
import {Container,Row,Col,Card,CardHeader,CardBody,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import {CustomStyles,FirstName,LastName,BrowserDefaults,Tooltips,Username,State,City,Zip,SupportedElements,SubmitForm} from '../../../constant'

const FormValidation = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      <Breadcrumb parent="Form" title="Validation"/>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{CustomStyles}</h5>
              </CardHeader>
              <CardBody>
                <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustom01">{FirstName}</Label>
                      <Input className="form-control" name="firstName" type="text" placeholder="First name" innerRef={register({ required: true })} />
                      <span>{errors.firstName && 'First name is required'}</span>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustom02">{LastName}</Label>
                      <Input className="form-control" name="lastName" type="text" placeholder="Last name" innerRef={register({ required: true })} />
                      <span>{errors.lastName && 'Last name is required'}</span>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustomUsername">{Username}</Label>
                      <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>{"@"}</InputGroupText>
                      </InputGroupAddon>
                        <Input className="form-control" name="userName" type="text" placeholder="Username" innerRef={register({ required: true })} />
                        <span>{errors.lastName && 'User name is required'}</span>
                      </InputGroup>
                    </Col>
                  </div>
                  <div className="form-row">
                    <Col md="6 mb-3">
                      <Label htmlFor="validationCustom03">{City}</Label>
                      <Input className="form-control" name="city" type="text" placeholder="City" innerRef={register({ required: true })} />
                      <span>{errors.city && 'Please provide a valid city'}</span>
                      <div className="invalid-feedback">{"Please provide a valid city."}</div>
                    </Col>
                    <Col md="3 mb-3">
                      <Label htmlFor="validationCustom04">{State}</Label>
                      <Input className="form-control" id="validationCustom04" name="state" type="text" placeholder="State" innerRef={register({ required: true })} />
                      <span>{errors.state && 'Please provide a valid state.'}</span>
                      <div className="invalid-feedback">{"Please provide a valid state."}</div>
                    </Col>
                    <Col md="3 mb-3">
                      <Label htmlFor="validationCustom05">Zip</Label>
                      <Input className="form-control" id="validationCustom05" name="zip" type="text" placeholder="Zip" innerRef={register({ required: true })} />
                      <span >{errors.zip && 'Please provide a valid zip.'}</span>
                      <div className="invalid-feedback">{"Please provide a valid zip."}</div>
                    </Col>
                  </div>
                  <FormGroup>
                    <div className="form-check">
                      <div className="checkbox p-0">
                        <Input className="form-check-input" id="invalidCheck" type="checkbox" />
                        <Label className="form-check-label" htmlFor="invalidCheck">{"Agree to terms and conditions"}</Label>
                      </div>
                      <div className="invalid-feedback">{"You must agree before submitting."}</div>
                    </div>
                  </FormGroup>
                  <Button color="primary">{"Submit form"}</Button>
                </Form>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5>{BrowserDefaults}</h5><span>{"Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript."}</span>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="form-row">
                    <Col md="4 mb-3">
                      <Label htmlFor="validationDefault01">{FirstName}</Label>
                      <Input className="form-control" type="text" placeholder="First name" required />
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationDefault02">{LastName}</Label>
                      <Input className="form-control" type="text" placeholder="Last name" required />
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationDefaultUsername">{Username}</Label>
                      <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>{"@"}</InputGroupText>
                      </InputGroupAddon>
                        <Input className="form-control"  type="text" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
                      </InputGroup>
                    </Col>
                  </div>
                  <div className="form-row">
                    <Col md="6 mb-3">
                      <Label>{City}</Label>
                      <Input className="form-control" type="text" placeholder="City" required />
                    </Col>
                    <Col md="3 mb-3">
                      <Label>{State}</Label>
                      <Input className="form-control" type="text" placeholder="State" required />
                    </Col>
                    <Col md="3 mb-3">
                      <Label>{Zip}</Label>
                      <Input className="form-control" type="text" placeholder="Zip" required />
                    </Col>
                  </div>
                  <FormGroup>
                    <div className="form-check">
                      <div className="checkbox p-0">
                        <Input className="form-check-input" id="invalidCheck2" type="checkbox" required />
                        <Label className="form-check-label" htmlFor="invalidCheck2">Agree to terms and conditions</Label>
                      </div>
                    </div>
                  </FormGroup>
                  <Button color="primary">{SubmitForm}</Button>
                </Form>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{SupportedElements}</h5><span>{"Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback."}</span><span>{"While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript."}</span>
              </CardHeader>
              <CardBody>
                <Form className="was-validated">
                  <div className="custom-control custom-checkbox mb-3">
                    <Input className="custom-control-input" id="customControlValidation1" type="checkbox" required />
                    <Label className="custom-control-label" htmlFor="customControlValidation1">{"Check this custom checkbox"}</Label>
                    <div className="invalid-feedback">{"Example invalid feedback text"}</div>
                  </div>
                  <div className="custom-control custom-radio">
                    <Input className="custom-control-input" id="customControlValidation2" type="radio" name="radio-stacked" required />
                    <Label className="custom-control-label" htmlFor="customControlValidation2">{"Toggle this custom radio"}</Label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <Input className="custom-control-input" id="customControlValidation3" type="radio" name="radio-stacked" required />
                    <Label className="custom-control-label" htmlFor="customControlValidation3">{"Or toggle this other custom radio"}</Label>
                    <div className="invalid-feedback">{"More example invalid feedback text"}</div>
                  </div>
                  <FormGroup>
                    <Input type="select" className="custom-select" required="">
                      <option value="">{"Open this select menu"}</option>
                      <option value="1">{"One"}</option>
                      <option value="2">{"Two"}</option>
                      <option value="3">{"Three"}</option>
                    </Input>
                    <div className="invalid-feedback">{"Example invalid custom select feedback"}</div>
                  </FormGroup>
                  <div className="custom-file">
                    <Input className="custom-file-input" id="validatedCustomFile" type="file" required="" />
                    <Label className="custom-file-label" htmlFor="validatedCustomFile">{"Choose file..."}</Label>
                    <div className="invalid-feedback">{"Example invalid custom file feedback"}</div>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>{Tooltips}</h5><span>{"If your form layout allows it, you can swap the"} <code className="text-danger">{".feedback"}</code> {"classes for"} <code className="text-danger">{".tooltip"}</code> {"classes to display validation feedback in a styled tooltip. Be sure to have a parent with"} <code className="text-danger">{"position: relative"}</code> {"on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup."}</span>
              </CardHeader>
              <CardBody>
                <TooltipForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FormValidation;