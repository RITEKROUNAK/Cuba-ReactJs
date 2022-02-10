import React ,{useState, Fragment} from 'react';
import {useForm} from 'react-hook-form'
import {Col,Button,Form,Label,Input,FormGroup,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import {FirstName,LastName,Username,State,City,Zip,SubmitForm} from '../../../constant'


const TooltipForm = () => {
  
  const { register, handleSubmit, errors } = useForm();
  const [validateClass , setValidateClass] = useState(false);
  const onSubmit = (e,data) => {
    e.preventDefault();
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };


  return (
    <Fragment>
      <Form className={`needs-validation tooltip-validation ${validateClass ? 'validateClass' : ''}`} noValidate="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <Col md="4 mb-3">
            <Label>{FirstName}</Label>
            <Input className="form-control"  name="firstName" type="text" placeholder="First name" innerRef={register({ required: true })} />
            <span>{errors.firstName && 'First name is required'}</span>
            <div className="valid-feedback">{"Looks good!"}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>{LastName}</Label>
            <Input className="form-control"  name="lastName" type="text" placeholder="Last name" innerRef={register({ required: true })} />
            <span>{errors.lastName && 'Last name is required'}</span>
            <div className="valid-feedback">{"Looks good!"}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>{Username}</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText >{"@"}</InputGroupText>
                </InputGroupAddon>
              <Input className="form-control"  name="userName" type="text" placeholder="Username" aria-describedby="inputGroupPrepend" innerRef={register({ required: true })} />
              <span>{errors.lastName && 'User name is required'}</span>
              <div className="invalid-feedback">{"Please choose a username."}</div>
            </InputGroup>
          </Col>
        </div>
        <div className="form-row">
          <Col md="6 mb-3">
            <Label>{City}</Label>
            <Input className="form-control"  name="city" type="text" placeholder="City" innerRef={register({ required: true })} />
            <span>{errors.city && 'Please provide a valid city'}</span>
            <div className="invalid-feedback">{"Please provide a valid city."}</div>
          </Col>
          <Col md="3 mb-3">
            <Label>{State}</Label>
            <Input className="form-control"  name="state" type="text" placeholder="State" innerRef={register({ required: true })} />
            <span>{errors.state && 'Please provide a valid state.'}</span>
            <div className="invalid-feedback">{"Please provide a valid state."}</div>
          </Col>
          <Col md="3 mb-3">
            <Label>{Zip}</Label>
            <Input className="form-control"  name="zip" type="text" placeholder="Zip" innerRef={register({ required: true })} />
            <span>{errors.zip && 'Please provide a valid zip.'}</span>
            <div className="invalid-feedback">{"Please provide a valid zip."}</div>
          </Col>
        </div>
        <FormGroup>
          <div className="form-check">
            <div className="checkbox p-0">
              <Input className="form-check-input" id="invalidCheck3" type="checkbox" />
              <Label className="form-check-label" htmlFor="invalidCheck3">{"Agree to terms and conditions"}</Label>
            </div>
          </div>
        </FormGroup>
        <Button color="primary"  type="submit" onClick={() => setValidateClass(!validateClass)}>{SubmitForm}</Button>
      </Form>
    </Fragment>
  );
};

export default TooltipForm;